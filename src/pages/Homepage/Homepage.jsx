import { useDispatch, useSelector } from "react-redux";
import "./Homepage.css";
import { Button, Form, Input, Spin } from "antd";
import run from "../../config/gemini";
import { setRes } from "../../redux/ChatHistorySlice";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Response from "../sub-components/Response/Response";

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
      <div className="  overflow-scroll" ref={responseContainerRef}>
        <Spin spinning={loading}>
          <Response id={id} className="response  overflow-scroll" />
        </Spin>
      </div>

      <Form
        name="basic"
        className="login-form"
        onFinish={chatResponseHandler}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="prompt"
          rules={[
            {
              required: true,
              message: "Please input salesman name!",
            },
          ]}
        >
          <div className="d-flex align-items-center formItem">
            <Input type="text" placeholder="Product Name" />
          </div>
        </Form.Item>
        <Button
          htmlType="submit"
          className="w-50 d-flex align-items-center justify-content-center mx-auto formBtn"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Homepage;
