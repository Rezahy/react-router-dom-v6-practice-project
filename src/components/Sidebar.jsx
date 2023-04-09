import { NavLink, useLocation } from "react-router-dom";
import { slugify } from "../utils";
const Sidebar = ({ title, list }) => {
	const location = useLocation();
	return (
		<div>
			<h3 className="header">{title}</h3>
			<ul className="sidebar-list">
				{list.map((item) => (
					<NavLink
						key={item}
						to={{ pathname: `${slugify(item)}`, search: location.search }}
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						{item.toUpperCase()}
					</NavLink>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
