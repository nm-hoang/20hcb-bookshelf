import React from 'react';
import { Avatar, Col, Divider, Rate, Row, Space, Typography } from 'antd';
import { Comment } from '../../../api/models';

interface CommentProps {
	comment: Comment;
}

const { Text } = Typography;

function CommentItem(props: CommentProps): JSX.Element {
	const { comment } = props;
	return (
		<>
			<Row justify="space-between" gutter={[80, 20]}>
				<Col>
					<Space size={15}>
						<Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
						<Space direction="vertical">
							<Text className="h6">{comment.fullName}</Text>
							<Text>{comment.content}</Text>
						</Space>
					</Space>
				</Col>
				<Col>
					<Rate disabled={true} value={comment.rating}></Rate>
				</Col>
				<Divider className="my-1" />
			</Row>
		</>
	);
}

export default CommentItem;
