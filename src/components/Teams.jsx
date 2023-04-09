import useTeamNames from "../hooks/useTeamNames";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

const Teams = () => {
	const { loading, response: teamNames } = useTeamNames();
	if (loading) {
		// return <p className="text-center">LOADING</p>;
		return <Loading />;
	}

	return (
		<div className="container two-column">
			<Sidebar list={teamNames} title="teams" />
			<Outlet />
		</div>
	);
};
export default Teams;
