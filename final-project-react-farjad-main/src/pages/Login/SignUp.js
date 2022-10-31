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
  const baseURL =  "https://kiyan.ir/api/v1" 
  const onFinish = (values) => {
    var username = values.username;
    var firstname = values.firstname;
    var lastname = values.lastname;
    var password = values.password;
    fetch('https://kiyan.ir/api/v1/users', {
      method: 'POST',
      headers: {
        'accept': '*/*' ,
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`, // notice the Bearer before your token
      },
      body: JSON.stringify(
        {
          "username": username,
          "firstname": firstname,
          "lastname": lastname ,
          "password": password
        },
        ),
      },
      )
      .then(response => response.json())
      .then(res => {
        if (res.token) 
        {
        setError(false);
        navigate("/");
        userContext.signup(username, firstname, lastname, password)
        } else {
          
          setError((res.error));
          console.log(res); 
          
        }
        
      })
      console.log(username, firstname, lastname, password)
    console.log(token);
  }
  
  const onReset = () => {
    formRef.current.resetFields();
  };

  return (
    <div className="signUp">
      <div className='container'>
        <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} >
          <Form.Item
            label={"Don't have an account yet?  Sign Up" 
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
              <Button type="primary" htmlType="submit" onClick={onFinish}>
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
