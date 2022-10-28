import {  Form, Input } from 'antd';

function SignIn() {
  return (
    <>
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
  </>


    );
  }
export default SignIn;