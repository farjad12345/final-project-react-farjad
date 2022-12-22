import './Login.css';
import { Button, Form, Input , Space, Divider } from 'antd';
import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
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

function SignUp() {
  const token = (JSON.parse(localStorage.user).token);
  let navigate = useNavigate();
  const userContext = useContext(LoginContext)
  const [error, setError] = useState(false)


  const formRef = useRef();
  const onFinish = (values) => {
    const username = values.username;
    const firstname = values.firstname;
    const lastname = values.lastname;
    const password = values.password;
    fetch('https://kiyan.ir/api/v1/users', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "username":username,
          "firstname":firstname,
          "lastname":lastname ,
          "password":password
        },
        ),
      },
      )
      .then(response => response.json())
      .then(res => {
        if (res.command=  'INSERT') 
        {
        setError(false);
        navigate("/");
        } else {
          
          setError((res.error));
          
        }
        
      })

  }
  
  const onReset = () => {
    formRef.current.resetFields();
  };

  return (
    <div className="sign-up">
      <div className='container'>
        <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} >
          <Form.Item 
            label={"Sign Up Form / Create new account" 
            } name="layout">
          </Form.Item>
          <Divider tooltip="true" orientation="center" >{error} </Divider> 
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
            name="firstname"
            label="firstname"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="lastname"
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
              <Button type="primary" htmlType="submit" >
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
export default SignUp;
