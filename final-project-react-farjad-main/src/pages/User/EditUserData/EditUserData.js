import './EditUserData.css';
import { Button, Form, Input, Space, Divider } from 'antd';
import React, { useState, useRef, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";



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

function EditUserData({ cancel }) {
    let navigate = useNavigate();

    const token = (JSON.parse(localStorage.user).token);
    const [error, setError] = useState(false)

    const formRef = useRef();
    let { userId } = useParams();

    const onFinish = (values) => {
        let username = values.username;
        let firstname = values.firstname;
        let lastname = values.lastname;
        let password = values.password;
        
        const baseURL =
            `https://kiyan.ir/api/v1/users/${userId}`
        fetch(baseURL, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                "Authorization": `Bearer ${token}`, // notice the Bearer before your token
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "firstname": firstname,
                    "lastname": lastname,
                    "password": password
                },
            ),
        },
        )
            .then(response => response.json())
            .then(res => {
                if (res.token) {
                    setError(false);
                } else {
                    setError((res.error));
                    console.log(res);
                }

            })
            .then(navigate("/"))
        }


    const onReset = () => {
        formRef.current.resetFields();
    };
    return (
        <div className="signUp">
            <div className='container'>
                <Form {...layout} ref={formRef} name="control-ref" >
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
                            <Button htmlType="button" onClick={() => cancel(cancel(false))}>
                                Cancel
                            </Button>

                        </Space>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
}
export default EditUserData;
