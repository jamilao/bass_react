import React, { Component } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import './signIn.css';
import './master.css';
import 'antd/dist/antd.css';
import FormItem from 'antd/lib/form/FormItem';
class SignIn extends Component {
    render() { 
        return(
            <React.Fragment>
                <div className="primary main form-container">
                    <Form name='sign_in' className='signin-form'>
                        <h1 className="center heading">Sign In</h1>
                        <FormItem>
                        <h2 className="heading">Email</h2>
                        <FormItem 
                        name='email' 
                        rules={[ 
                            {
                                required: true, 
                                message: 'Please input your email!'
                            },
                            ]}
                        >   
                            <Input size="large" className="input" placeholder="Email Address"/>
                        </FormItem>
                        </FormItem>
                        <FormItem>
                            <h2 className="heading">Password</h2>
                            <FormItem
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!'
                                },
                            ]}
                        >
                            <Input size="large" className="input" type="password" placeholder="Password"/>
                            </FormItem>
                        </FormItem>
                        <FormItem name="submit">
                            <Button type="Primary" size="large" className="button center" htmlType="submit">
                                Sign In
                            </Button>
                        </FormItem>
                        <FormItem name="no-login">
                            <Row justify="space-between">
                                <Col span={12}>
                                    <a href="" className="forgot-password">Forgot Password</a>
                                </Col>
                                <Col span={12}>
                                    <a href="" className="create-account">Create Account</a>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;