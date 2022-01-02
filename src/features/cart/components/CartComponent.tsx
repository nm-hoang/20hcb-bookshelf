import React from 'react';
import { Col, Checkbox, Row, Card, Typography, Button, Image, Space } from 'antd';
import { CartItem, PageUrl } from '../../../models';
import Money from '../../../components/common/Money';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { moneyAfterDiscount, moneyItemSummarize } from '../../../helpers/money';
import { useAppDispatch } from '../../../app/hooks';
import { setSelectedItem } from '../cartSlice';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface CartItemProps {
	item: CartItem;
	handleModalRemoveItem: (val: number) => void;
	handleIncreaseItem: (val: number) => void;
	handleDecreaseItem: (val: number) => void;
}

function CartComponent(props: CartItemProps): JSX.Element {
	const { item, handleIncreaseItem, handleDecreaseItem, handleModalRemoveItem } = props;
	const dispatch = useAppDispatch();
	const handleOnChangeCheckbox = () => {
		dispatch(setSelectedItem(item?.bookid!));
	};
	return (
		<Card style={{ width: '100%' }}>
			<Row align="bottom">
				<Col className="d-flex align-center" sm={20} md={15} lg={12}>
					<Space size={10}>
						<Checkbox checked={item.checked} onChange={handleOnChangeCheckbox} />
						<Image className="border-10" width={60} src={item.avatar} />
						<Space size={8} direction="vertical" className="d-flex" style={{ marginTop: '-50%' }}>
							<Link to={`${PageUrl.BOOK}/${item?.bookid!}`}>
								<Title level={5} className="mb-0">
									{item.name}
								</Title>
							</Link>
							<Title level={5} type="secondary">
								<Money money={moneyAfterDiscount(item?.price!, item?.discount!)} />
							</Title>
						</Space>
					</Space>
				</Col>
				<Col sm={20} md={15} lg={12} className="d-flex justify-flex-end">
					<Space align="end" size={30}>
						<Title level={4} className="text-blue-6 mb-0">
							<Money money={moneyItemSummarize(item?.price!, item?.discount!, item?.quantity!)} />
						</Title>
						<Space direction="vertical" className="d-flex align-flex-end">
							<Button
								onClick={() => handleModalRemoveItem(item?.bookid!)}
								type="text"
								icon={<DeleteOutlined />}
							/>
							<Space>
								<Button
									onClick={() => handleDecreaseItem(item?.bookid!)}
									icon={<MinusOutlined />}
								/>
								<Button>{item?.quantity!}</Button>
								<Button onClick={() => handleIncreaseItem(item?.bookid!)} icon={<PlusOutlined />} />
							</Space>
						</Space>
					</Space>
				</Col>
			</Row>
		</Card>
	);
}

export default CartComponent;
