import './Login.css';
import { Button, Form, Radio, Space, Divider } from 'antd';
import React, { useState, useRef, useContext } from 'react';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {  useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContext";

const layout = {

  labelCol: {
    span: 28,
  },
  wrapperCol: {
    span: 16.5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
function Login() {
  const [loginOrSignup, setloginOrSignup] = useState(true);
  let navigate = useNavigate();
  const userContext = useContext(LoginContext)
  const [error, setError] = useState(false)


  const formRef = useRef();

  const baseURL = "https://kiyan.ir/api/v1/login";
  const onFinish = (values) => {
    let username = values.username;
    let password = values.password;
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          "username": username,
          "password": password
        }
        )
      })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          setError(false);
          navigate("/");
          console.log(res.token);
          userContext.login(username, password, (res.token));
        } else {
          setError ((res.error));
        }

      })
  }
  
  const onReset = () => {
    formRef.current.resetFields();
  };
  const HandeleLogIn = () => {
    setloginOrSignup(true)

  }
  const HandeleSignUp = () => {
    setloginOrSignup(false)

  }

  return (
    <div className="login">
        <div className='container'>
    <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
          <Form.Item label={loginOrSignup ? "Don't have an account yet?  Sign Up" : "Have Accounts: Sign in"} name="layout">
        <Radio.Group value={"state"} >
          <Space>
            <Radio.Button {...layout} value="LogIn" onClick={HandeleLogIn}>LogIn</Radio.Button>
            <Radio.Button value="SignUp" onClick={HandeleSignUp}>SignUp</Radio.Button>
          </Space>
        </Radio.Group>
      </Form.Item>
          {error ? <Divider>{error} </Divider> : ""}
          {loginOrSignup ? <SignIn /> : <SignUp />}  

      <Form.Item {...tailLayout}>
        <Space>
          <Button   type="primary" htmlType="submit" onClick={onFinish}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>

        </Space>
      </Form.Item>

        </Form>
        </div>
        </div>
  );
}
export default Login;
