import React, { useEffect, useState } from 'react';
import { Col, Row, Image, Space, Typography, Rate, Tag, Button, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { CartItem } from '../../../models';
import { FundProjectionScreenOutlined, PlusCircleOutlined } from '@ant-design/icons';
import CommentItem from '../components/CommentItem';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectListComments, getBookById, selectSingleBook } from '../bookSlice';
import ModalPreview from '../components/ModalPreview';
import Money from '../../../components/common/Money';
import { addToCart } from '../../cart/cartSlice';
import { moneyAfterDiscount } from '../../../helpers/money';

const { Title, Text } = Typography;

function BookDetails(): JSX.Element {
	interface ParamTypes {
		bookid: string;
	}
	const dispatch = useAppDispatch();
	let { bookid } = useParams<ParamTypes>();
	useEffect(() => {
		dispatch(getBookById(Number.parseInt(bookid)));
	}, [dispatch, bookid]);

	const bookItem = useAppSelector(selectSingleBook);
	const listComments = useAppSelector(selectListComments);
	const [showPreview, setShowPreview] = useState(false);
	const [quantityItemSelect, setQuantityItemSelect] = useState(1);
	const handleClickPreview = () => {
		setShowPreview(true);
	};
	const handleClickAddToCart = () => {
		const item: CartItem = {
			quantity: quantityItemSelect,
			bookid: bookItem?.bookid!,
      avatar: bookItem?.avatar!,
			name: bookItem?.name!,
			price: bookItem?.price!,
			discount: bookItem?.discount!,
		};
		dispatch(addToCart(item));
	};
	return (
		<>
			<ModalPreview
				visible={showPreview}
				listPreviews={bookItem?.preview!}
				setShowPreview={setShowPreview}
			/>
			<Row justify="space-around">
				<Col>
					<Image width={500} src={bookItem?.avatar!} />
				</Col>
				<Col md={20} lg={10}>
					<Space direction="vertical" size={35}>
						<Space direction="vertical">
							<Space direction="horizontal" size={30} wrap>
								<Title level={2} className="text-blue-6 mb-0">
									{bookItem?.name!}
								</Title>
								<Rate value={4} disabled={true}></Rate>
							</Space>
							<Title level={4} type="secondary">
								{`by ${bookItem?.author!}`}
							</Title>
						</Space>
						<Space direction="vertical">
							<Space direction="horizontal" size={20}>
								<Title level={1} className="text-blue-6 mb-0">
									<Money money={moneyAfterDiscount(bookItem?.price!, bookItem?.discount!)} />
								</Title>
								<Space>
									<Title level={3} type="secondary" delete className="mb-0">
										<Money money={bookItem?.price!} />
									</Title>
									<Tag color="volcano">{`${bookItem?.discount!} %`}</Tag>
								</Space>
							</Space>
							<Row justify="space-between" align="middle">
								<Col span={12}>
									<Title level={4}>Date release:</Title>
								</Col>
								<Col span={12}>
									<Title level={5} className="text-normal">
										{bookItem?.daterelease!}
									</Title>
								</Col>
							</Row>
							<Row justify="space-between" align="middle">
								<Col span={12}>
									<Title level={4}>Publisher:</Title>
								</Col>
								<Col span={12}>
									<Tag>
										<Title level={5} className="text-normal">
											{bookItem?.publisher!}
										</Title>
									</Tag>
								</Col>
							</Row>
							<Row justify="space-between" align="middle">
								<Col span={12}>
									<Title level={4}>ISBN:</Title>
								</Col>
								<Col span={12}>
									<Tag>
										<Title level={5} className="text-normal">
											{bookItem?.isbn!}
										</Title>
									</Tag>
								</Col>
							</Row>
							<Title level={4}>Description:</Title>
							<Text>{ReactHtmlParser(bookItem?.description!)}</Text>
						</Space>
						<Space direction="vertical">
							<Space size={20} wrap>
								<InputNumber
									onChange={(e) => {
										setQuantityItemSelect(e);
									}}
									min={1}
									max={99}
									defaultValue={1}
									size="large"
								/>
								<Button
									onClick={handleClickAddToCart}
									size="large"
									type="primary"
									icon={<PlusCircleOutlined />}
								>
									Add to cart
								</Button>
							</Space>
							<Button
								onClick={handleClickPreview}
								size="large"
								icon={<FundProjectionScreenOutlined />}
							>
								Preview
							</Button>
						</Space>
						<Space direction="vertical">
							<Title level={4}>Comments: </Title>
							{listComments?.length! > 0 &&
								listComments?.map((comment) => {
									return <CommentItem comment={comment} key={comment.commentid} />;
								})}
						</Space>
					</Space>
				</Col>
			</Row>
		</>
	);
}

export default BookDetails;
