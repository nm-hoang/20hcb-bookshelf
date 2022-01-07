import React from 'react';

interface MoneyProps {
	money: number;
}

function Money(props: MoneyProps) {
	const { money } = props;
	return <>{money ? money.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}</>;
}

export default Money;
