import {  Form, Input } from 'antd';

function SignUp() {
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
    </>
    );
  }
export default SignUp;