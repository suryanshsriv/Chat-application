import React, { useCallback, useState } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { Alert, Icon, InputGroup } from 'rsuite';
import { storage } from '../../../../misc/firebase';

const AudioMsgBtn = ({ afterUpload }) => {
  const [isRecording, setIsRecording] = useState(false);
  const { chatId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = useCallback(() => {
    setIsRecording(p => !p);
  }, []);
  const onUpload = useCallback(
    async data => {
      setIsLoading(true);
      try {
        const snap = await storage
          .ref(`/chat/${chatId}`)
          .child(`audio_${Date.now()}.mp3`)
          .put(data.blob, { cacheControl: `public,maz-age=${3600 * 24 * 3}` });

        const file = {
          contentType: snap.metadata.contentType,
          name: snap.metadata.name,
          url: await snap.ref.getDownloadURL(),
        };
        setIsLoading(false);
        afterUpload([file]);
      } catch (error) {
        setIsLoading(false);
        Alert.error(error.message, 4000);
      }
    },
    [afterUpload, chatId]
  );

  return (
    <InputGroup.Button
      onClick={onClick}
      disabled={isLoading}
      clasName={isRecording ? 'animate-blink' : ''}
    >
      <Icon icon="microphone" />
      <ReactMic
        record={isRecording}
        className="d-none "
        onStop={onUpload}
        mimeType="audio/mp3 "
      />
    </InputGroup.Button>
  );
};

export default AudioMsgBtn;
