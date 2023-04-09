import { useSearchParams, Routes, Route } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";

import Player from "./Player";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
const Players = () => {
	const [searchParams] = useSearchParams();
	const teamId = searchParams.get("teamId");
	console.log(teamId);
	const { loading, response: names } = usePlayerNames(teamId);
	console.log(names);
	if (loading) {
		// return <p className="text-center">LOADING</p>;
		return <Loading />;
	}
	return (
		<div className="container two-column">
			<Sidebar list={names} title="players" />
			<Routes>
				<Route
					path=""
					element={<h4 className="sidebar-instruction">Select a Player</h4>}
				/>
				<Route path=":playerId" element={<Player />} />
			</Routes>
		</div>
	);
};
export default Players;
