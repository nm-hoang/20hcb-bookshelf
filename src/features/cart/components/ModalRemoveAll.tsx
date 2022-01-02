import React from 'react';
import { Button, Modal } from 'antd';

interface ModalRemoveItemProps {
	visible: boolean;
	confirmRemoveAll: () => void;
	setVisibleRemoveAll: (value: boolean) => void;
}

function ModalRemoveItem(props: ModalRemoveItemProps) {
	const { visible, confirmRemoveAll, setVisibleRemoveAll } = props;

	const handleConfirm = () => {
		confirmRemoveAll();
		setVisibleRemoveAll(false);
	};
	return (
		<Modal
			visible={visible}
			title="Notification"
			onOk={() => setVisibleRemoveAll(false)}
			onCancel={() => setVisibleRemoveAll(false)}
			footer={[
				<Button key="back" onClick={() => setVisibleRemoveAll(false)}>
					Cancel
				</Button>,
				<Button key="submit" type="primary" danger onClick={handleConfirm}>
					Delete
				</Button>,
			]}
		>
			Are you sure you want to delete all items ?
		</Modal>
	);
}

export default ModalRemoveItem;
