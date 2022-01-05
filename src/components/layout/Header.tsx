import React, { useState } from 'react';
import { Button, Col, Row, Typography, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { PageUrl } from '../../api/models';
import { ShoppingCartOutlined, ShopTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;

function HeaderComponent(): JSX.Element {
	enum HeaderType {
		HOMEPAGE = 'homepage',
		AUTHORS = 'authors',
		PUBLISHER = 'publishers',
	}
	const [selected, setSelected] = useState<string>(HeaderType.HOMEPAGE);
	const handleClick = (e: string) => {
		setSelected(e);
	};
	return (
		<Row className="header__admin" align="middle" justify="space-between">
			<Col>
				<Row justify="end">
					<Link to="/admin">
						<Space direction="vertical" className="header__contain-logo">
							<Title className="header__logo" level={1}>
								<ShopTwoTone twoToneColor="#c2d9ec" /> BOOKSTORE
							</Title>
						</Space>
					</Link>
				</Row>
			</Col>
			<Col>
				<Space wrap direction="horizontal" size={[25, 10]}>
					<Space size={[15, 10]} direction="horizontal" wrap>
						<Link to={PageUrl.HOMEPAGE}>
							<Button
								key={HeaderType.HOMEPAGE}
								type="text"
								onClick={() => {
									handleClick(HeaderType.HOMEPAGE);
								}}
								className="header__item"
							>
								<Title
									type="secondary"
									level={5}
									className={`${HeaderType.HOMEPAGE === selected && `header__item--selected`}`}
								>
									Homepage
								</Title>
							</Button>
						</Link>
						<Link to={HeaderType.AUTHORS}>
							<Button
								key={HeaderType.AUTHORS}
								type="text"
								onClick={() => {
									handleClick(HeaderType.AUTHORS);
								}}
								className="header__item"
							>
								<Title
									type="secondary"
									level={5}
									className={`${HeaderType.AUTHORS === selected && `header__item--selected`}`}
								>
									Authors
								</Title>
							</Button>
						</Link>
						<Link to={PageUrl.PUBLISHERS}>
							<Button
								key={HeaderType.PUBLISHER}
								type="text"
								onClick={() => {
									handleClick(HeaderType.PUBLISHER);
								}}
								className="header__item"
							>
								<Title
									type="secondary"
									level={5}
									className={`${HeaderType.PUBLISHER === selected && `header__item--selected`}`}
								>
									Publishers
								</Title>
							</Button>
						</Link>
					</Space>
				</Space>
			</Col>
			<Col>
				<Space wrap direction="horizontal" size={[30, 10]}>
					<Link to={PageUrl.CART}>
						<Button size="large" icon={<ShoppingCartOutlined />}>
							Cart
						</Button>
					</Link>
					{/* <Link to={PageUrl.LOGIN}>
						<Button type="primary">
							Đăng nhập
						</Button>
					</Link> */}
					<Space direction="horizontal" size={[15, 10]}>
						<Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
						<Title className="mb-0" level={4} type="secondary">
							Harry
						</Title>
					</Space>
				</Space>
			</Col>
		</Row>
	);
}

export default HeaderComponent;
