import React from 'react';
import { Button, Modal } from 'antd';

interface ModalRemoveItemProps {
	visible: boolean;
	confirmRemoveItem: () => void;
	setVisibleRemoveItem: (value: boolean) => void;
}

function ModalRemoveItem(props: ModalRemoveItemProps) {
	const { visible, confirmRemoveItem, setVisibleRemoveItem } = props;

	const handleConfirm = () => {
		confirmRemoveItem();
		setVisibleRemoveItem(false);
	};
	return (
		<Modal
			visible={visible}
			title="Notification"
			onOk={() => setVisibleRemoveItem(false)}
			onCancel={() => setVisibleRemoveItem(false)}
			footer={[
				<Button key="back" onClick={() => setVisibleRemoveItem(false)}>
					Cancel
				</Button>,
				<Button key="submit" type="primary" danger onClick={handleConfirm}>
					Delete
				</Button>,
			]}
		>
			Are you sure you want to delete this item ?
		</Modal>
	);
}

export default ModalRemoveItem;
