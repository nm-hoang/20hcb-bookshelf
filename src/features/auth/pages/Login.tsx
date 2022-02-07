import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageUrl } from '../../../api/models';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import background from '../../../assets/img/login/login-background.svg';
import { login, selectStatusLogin } from '../authSlice';

const { Title, Text } = Typography;

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleFinish = (e: any) => {
    dispatch(login(e));
  };
  const statusLogin = useAppSelector(selectStatusLogin);
  const history = useHistory();
  useEffect(() => {
    if (statusLogin === 'success') {
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusLogin]);
  return (
    <>
      <div style={{ minHeight: '60vh', padding: '10px 22px 60px 22px' }}>
        <Row wrap className="d-flex justify-content-center mt-5">
          <Col md={10} sm={24}>
            <Card
              hoverable
              className=" text-align-center me-auto ms-auto mb-5"
              style={{ maxWidth: '525px' }}
            >
              <Title level={3}>Login</Title>
              <Form layout="vertical" onFinish={handleFinish}>
                <Form.Item
                  name="username"
                  rules={[{ required: true }]}
                  label={<Title level={5}>Username</Title>}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="password"
                  label={<Title level={5}>Password</Title>}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Space className="d-flex justify-flex-end">
                  <Link to={PageUrl.FORGOT_PASSWORD}>
                    <Text className="text-blue-6 mb-1">Forgot password ?</Text>
                  </Link>
                </Space>
                <Form.Item  className="mb-0" >
                  <Button block type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
                <Space className="d-flex justify-flex-end">
                  <Link to={PageUrl.REGISTER}>
                    <Title level={5} className=" text-normal text-blue-6">Create an account.</Title>
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

export default Login;
