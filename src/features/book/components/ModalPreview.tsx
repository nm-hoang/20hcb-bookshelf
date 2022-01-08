import React, { useState } from 'react';
import { Button, Col, Modal, Row, Image, Space } from 'antd';
import { PreviewBook } from '../../../api/models';

interface ModalPreviewProps {
	visible: boolean;
	listPreviews: PreviewBook[];
	setShowPreview: (val: boolean) => void;
}

function ModalPreview(props: ModalPreviewProps): JSX.Element {
	const { visible, listPreviews, setShowPreview } = props;
	const [itemSelected, setItemSelected] = useState<string>('');
	const handleClickPhoto = (e: string) => {
		setItemSelected(e);
		console.log(e);
	};

	return (
		<>
			<Modal
				visible={visible}
				width={1000}
				title="Preview book"
				onOk={() => {
					setShowPreview(false);
				}}
				onCancel={() => {
					setShowPreview(false);
				}}
				footer={[
					<Button
						key="back"
						onClick={() => {
							setShowPreview(false);
						}}
					>
						Close
					</Button>,
				]}
			>
				<Row gutter={[20, 35]}>
					<Col span={24}>
						{listPreviews?.length! > 0 && (
							<Image
								width={400}
								src={itemSelected !== '' ? itemSelected : listPreviews[0]?.photo!}
								preview={false}
							/>
						)}
					</Col>
					<Col span={24}>
						<Space wrap size={[50, 20]}>
							{listPreviews?.length! > 0 &&
								listPreviews.map((photo) => {
									return (
										<Image
											className={`${photo?.photo! === itemSelected && `border-selected-blue-5`}`}
											onClick={() => {
												handleClickPhoto(photo?.photo!);
											}}
											width={90}
											preview={false}
											src={photo.photo}
											key={photo.previewBookId}
										/>
									);
								})}
						</Space>
					</Col>
				</Row>
			</Modal>
		</>
	);
}

export default ModalPreview;
