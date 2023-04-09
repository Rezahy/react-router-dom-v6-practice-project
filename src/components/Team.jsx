import useTeam from "../hooks/useTeam";
import { Link, useParams } from "react-router-dom";
import TeamLogo from "./TeamLogo";
import Loading from "./Loading";

const Team = () => {
	const { teamId } = useParams();
	const { response: team, loading } = useTeam(teamId);
	// if (loading) {
	// 	return <p className="text-center m-auto">LOADING</p>;
	// }
	if (!team) {
		return null;
	}
	return (
		<div className="panel">
			{loading === true ? (
				<Loading />
			) : (
				<div style={{ width: "100%" }}>
					<TeamLogo id={team.id} className="center" />
					<h1 className="medium-header">{team.name}</h1>
					<ul className="info-list row">
						<li>
							Est.<div>{team.established}</div>
						</li>
						<li>
							Manager<div>{team.manager}</div>
						</li>
						<li>
							Coach<div>{team.coach}</div>
						</li>
					</ul>
					<Link className="center btn-main" to={`/${teamId}`}>
						{team.name} Team Page
					</Link>
				</div>
			)}
		</div>
	);
};
export default Team;
