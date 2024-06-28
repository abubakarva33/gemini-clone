import { useDispatch, useSelector } from "react-redux";
import "./Homepage.css";
import { Button, Form, Input, Spin } from "antd";
import run from "../../config/gemini";
import { setRes } from "../../redux/ChatHistorySlice";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Response from "../sub-components/Response/Response";
import { BiImageAdd } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { LuSendHorizonal } from "react-icons/lu";
import TextArea from "antd/es/input/TextArea";

const Homepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(false);
  const { history } = useSelector((state) => state.chatHistory);

  // set loading and set response history //
  const chatResponseHandler = async ({ prompt }) => {
    setIsLoading(true);
    try {
      const data = await run(prompt);
      const newId = id || new Date().getTime();
      dispatch(setRes({ user: prompt, res: data, id: newId }));
      if (!id) {
        navigate("/" + newId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  return (
    <div
      className="d-flex align-items-center flex-column justify-content-between"
      style={{ height: "95vh", position: "relative" }}
    >
      <div className="  overflow-scroll" ref={responseContainerRef} style={{ marginBottom: 100 }}>
        <Response id={id} className="response  overflow-y-auto" />
        <Spin spinning={loading} height={100}></Spin>
      </div>

      <Form
        name="basic"
        className="login-form d-flex align-items-end justify-content-between border w-100"
        onFinish={chatResponseHandler}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="prompt" style={{ width: "85%" }}>
          <div className="">
            <TextArea
              type="text"
              placeholder="Product Name"
              autoSize={{
                minRows: 1,
                maxRows: 6,
              }}
            />
          </div>
        </Form.Item>

        <div>
          <button>
            <BiImageAdd />
          </button>
          <button>
            <HiOutlineMicrophone />
          </button>
          <button type="submit">
            <LuSendHorizonal />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Homepage;
