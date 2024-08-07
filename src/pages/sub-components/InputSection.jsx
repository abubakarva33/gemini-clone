import { Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BiImageAdd } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { LuSendHorizonal } from "react-icons/lu";
import run from "../../config/gemini";
import { useDispatch, useSelector } from "react-redux";
import { setRes } from "../../redux/ChatHistorySlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { addOpacityToColor } from "../../utilities/utilities";
import { devDetails } from "../../utilities/devInfo";

const InputSection = ({ id, setIsLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [firstReq, setFirstReq] = useState(true);
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { sideBg } = useSelector((state) => state.customizeSec);
  const { isDevMode } = useSelector((state) => state.devMode);

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

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

  const chatResponseHandler = async () => {
    setIsLoading(true);
    try {
      const data =
        isDevMode && firstReq ? await run(devDetails + inputValue) : await run(inputValue);
      const newId = id || new Date().getTime();
      dispatch(setRes({ user: inputValue, res: data, id: newId }));
      if (!id) {
        navigate("/" + newId);
        setFirstReq(true);
      } else {
        setFirstReq(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="input-area d-flex align-items-end justify-content-between w-100"
      style={{ backgroundColor: addOpacityToColor(sideBg, 0.25) }}
    >
      <TextArea
        type="text"
        placeholder="Ask something to BongoBOT"
        autoSize={{
          minRows: 1,
          maxRows: 6,
        }}
        style={{ width: "85%", backgroundColor: "transparent" }}
        className="my-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
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
        <button onClick={chatResponseHandler}>
          <LuSendHorizonal />
        </button>
      </div>
    </div>
  );
};

export default InputSection;
