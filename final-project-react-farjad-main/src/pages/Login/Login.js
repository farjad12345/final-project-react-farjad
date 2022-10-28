import './Login.css';
import { Button, Form, Radio, Space } from 'antd';
import React, { useState, useRef } from 'react';
import SignIn from "./SignIn"
import SignUp from "./SignUp"

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

  const formRef = useRef();

  const onFinish = (values) => {
    console.log(values);
  };
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
