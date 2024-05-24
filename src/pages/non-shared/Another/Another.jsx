import { useDispatch, useSelector } from "react-redux";
import "./Another.css";
import { Button, Form, Input, Spin } from "antd";
import run from "../../../config/gemini";
import { setRes } from "../../../redux/features/ChatHistory";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Another = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.chatHistory);
  const [loading, setIsLoading] = useState(false);

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

  return (
    <Spin spinning={loading}>
      {Object.values(history).map((item) => (
        <Link className="me-2" to={`/${item[0].id}`} key={item[0].id}>
          {item[0].user}
        </Link>
      ))}
      <div style={{ maxWidth: 700, margin: "auto" }} className=" formTemplate">
        <h3 className="title"> PRAN-RFL PCML DATA INPUT</h3>
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
              <p className="mb-0"> NAME</p>
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
      <button onClick={() => navigate("/")}>New Chat</button>
      <br />
      <div>
        {id && Object.keys(history)?.length ? (
          <div>
            <h1>History</h1>
            {history[id]?.map(({ user, res }, ind) => {
              const output = res.replace(/\* \*\*(.*?)\*\* /g, "<h6>$1</h6>");
              return (
                <div key={ind}>
                  <h5>
                    {ind + 1} {user}
                  </h5>
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: output }} />
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </Spin>
  );
};

export default Another;
