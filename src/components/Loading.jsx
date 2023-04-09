import { useEffect, useState } from "react";

const Delayed = ({ children, wait = 500 }) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true);
		}, wait);
		return () => {
			clearTimeout(timeout);
		};
	});
	return show === true ? children : null;
};

const Loading = () => {
	return (
		<Delayed>
			<div className="loading center"></div>
		</Delayed>
	);
};
export default Loading;
