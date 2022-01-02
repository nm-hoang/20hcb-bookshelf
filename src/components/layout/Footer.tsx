import React from 'react';
import { Col, Layout, Row, Typography, Space } from 'antd';

const { Text, Title } = Typography;

function FooterComponent(): JSX.Element {
	return (
		<>
			<Layout.Footer>
				<Row justify="space-between" style={{ minHeight: '12rem' }}>
					<Col className="d-flex justify-space-between flex-column">
						<Title level={2} italic className="text-blue-4">
							Bookstore
						</Title>
						<Text type="secondary">Copyright © 2021. Team 14. All rights reserved.</Text>
					</Col>
					<Col>
						<Row gutter={[40, 15]}>
							<Col>
								<Title level={4}>About us</Title>
								<Space direction="vertical">
									<Text>About Book Store</Text>
									<Text>Terms and Conditions</Text>
									<Text>Privacy Policy and Information Sharing</Text>
								</Space>
							</Col>
							<Col>
								<Title level={4}>Contact</Title>
								<Space direction="vertical">
									<Space align="baseline" direction="horizontal">
										<Text strong>Phone number:</Text>
										<Text> 0929 123 123</Text>
									</Space>
									<Space align="baseline" direction="horizontal">
										<Text strong>Email:</Text>
										<Text> bookstore@gmailcom</Text>
									</Space>
								</Space>
							</Col>
						</Row>
					</Col>
				</Row>
			</Layout.Footer>
		</>
	);
}

export default FooterComponent;
