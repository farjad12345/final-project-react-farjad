import './Login.css';
import { Button, Form, Input, Space, Divider } from 'antd';
import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContext";
import { useLoginUser } from "../../Components/Hook/UseAPi";

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
  let username, password
  let navigate = useNavigate();
  const userContext = useContext(LoginContext)
  const [error, setError] = useState(false)
  
  
  const formRef = useRef();
  
  // const ApiGetUsers = useLoginUser("kiyan","kiyan")
  const  OnFinish=(values)=> {
    let username = values.username;
    let password = values.password; 
    const { response } = useLoginUser("kiyan", "kiyan" );
  }
  
  
  const onReset = () => {
    formRef.current.resetFields();
  };
  
  
  return (
    <div className="login">
      <div className='container'>
        <Form {...layout} ref={formRef} name="control-ref" onFinish={OnFinish}>
          <Form.Item
            label={"Don't have an account yet?  Sign Up"
          } name="layout">

          </Form.Item>
          {error ? <Divider danger >{error} </Divider> : ""}
          <Form.Item
            name="username"
            label="username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit" onClick={OnFinish}>
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
