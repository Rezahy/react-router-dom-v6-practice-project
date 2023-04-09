import { Link, useLocation } from "react-router-dom";

const OldSchoolMenuLink = ({ children, to }) => {
	const location = useLocation();
	const match = location.pathname === to;

	return (
		<div className={match ? "active" : ""}>
			{match ? "> " : ""}
			<Link to={to}>{children}</Link>
		</div>
	);
};
export default OldSchoolMenuLink;
