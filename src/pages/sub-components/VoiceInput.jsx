import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";

// const appId = "<INSERT_SPEECHLY_APP_ID_HERE>";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const VoiceInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const voiceHandler = () => {
    if (!isRecording) {
      SpeechRecognition.startListening();
      setIsRecording(true);
    } else {
      SpeechRecognition.stopListening();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <button onClick={voiceHandler}>{!isRecording || !listening ? "Start" : "Stop"}</button>
      <p>{transcript}</p>
    </div>
  );
};
export default VoiceInput;
