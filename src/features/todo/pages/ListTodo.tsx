import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getListTodo, selectListTodo } from '../todoSlice';

function ListTodo(): JSX.Element {
	const dispatch = useAppDispatch();
	const list = useAppSelector(selectListTodo);
	useEffect(() => {
		dispatch(getListTodo());
	}, [dispatch]);
	return (
		<>
			<h1>Todo list</h1>
			<ul>
				{list
					? list.map((todo) => {
							return <li>{todo?.title}</li>;
					  })
					: null}
			</ul>
		</>
	);
}

export default ListTodo;
