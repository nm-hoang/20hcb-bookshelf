import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageUrl, StatusNotify } from '../../../api/models';
import { useAppDispatch } from '../../../app/hooks';
import background from '../../../assets/img/login/login-background.svg';
import Notify from '../../../helpers/notify';
import { register } from '../authSlice';

const { Title } = Typography;

function Register(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleFinish = (e: any) => {
    if (e.password === e.confirmPassword) {
      dispatch(register(e));
    } else {
      Notify.error('Password and confirm password do not match !', StatusNotify.error);
    }
  };

  return (
    <>
      <div style={{ minHeight: '60vh', padding: '10px 22px 60px 22px' }}>
        <Row wrap className="d-flex justify-content-center mt-5">
          <Col md={10} sm={24}>
            <Card
              hoverable
              className="text-align-center me-auto ms-auto mb-5"
              style={{ maxWidth: '525px' }}
            >
              <Title level={3}>Register</Title>
              <Form layout="vertical" onFinish={handleFinish}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Email is invalid !',
                    },
                    { required: true },
                  ]}
                  label={<Title level={5}>Email</Title>}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="password"
                  label={<Title level={5}>Password</Title>}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="confirmPassword"
                  label={<Title level={5}>Confirm password</Title>}
                >
                  <Input.Password placeholder="Confirm password" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="fullName"
                  label={<Title level={5}>Fullname</Title>}
                >
                  <Input placeholder="Full name" />
                </Form.Item>
                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Create an account
                  </Button>
                </Form.Item>
                <Space className="d-flex justify-flex-end">
                  <Link to={PageUrl.LOGIN}>
                    <Title level={5} className=" text-normal text-blue-6">Already have an account.</Title>
                  </Link>
                </Space>
              </Form>
            </Card>
          </Col>
          <Col md={{ span: 11, push: 1 }} sm={24}>
            <img
              className="me-auto ms-auto"
              src={background}
              alt="background"
              style={{ width: '70%' }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
