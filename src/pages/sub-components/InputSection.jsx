import { Form, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BiImageAdd } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { LuSendHorizonal } from "react-icons/lu";
import run from "../../config/gemini";
import { useDispatch } from "react-redux";
import { setRes } from "../../redux/ChatHistorySlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const InputSection = ({ id, setIsLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  console.log(inputValue);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const voiceHandler = () => {
    if (!isRecording) {
      SpeechRecognition.startListening({ continuous: true });
      setIsRecording(true);
    } else {
      SpeechRecognition.stopListening();
      setIsRecording(false);
    }
  };

  const chatResponseHandler = async (values) => {
    setIsLoading(true);
    try {
      const data = await run(values.prompt);
      const newId = id || new Date().getTime();
      dispatch(setRes({ user: values.prompt, res: data, id: newId }));
      if (!id) {
        navigate("/" + newId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      name="basic"
      className="input-area d-flex align-items-end justify-content-between border"
      onFinish={() => chatResponseHandler({ prompt: inputValue })}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item name="prompt" style={{ width: "85%" }}>
        <TextArea
          type="text"
          placeholder="Ask something to Bongo BOT"
          autoSize={{
            minRows: 1,
            maxRows: 6,
          }}
          className="my-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form.Item>

      <div className="inputBtnSection mb-2">
        <span>
          <Tooltip placement="top" title="Upload Image">
            <BiImageAdd />
          </Tooltip>
        </span>
        <span>
          <Tooltip placement="top" title="Use Microphone">
            <HiOutlineMicrophone onClick={voiceHandler} />
          </Tooltip>
        </span>
        <button type="submit">
          <LuSendHorizonal />
        </button>
      </div>
    </Form>
  );
};

export default InputSection;
