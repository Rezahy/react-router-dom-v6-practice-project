import Sidebar from "./Sidebar";
import useTeamsArticles from "../hooks/useTeamsArticles";
import { Outlet, useParams } from "react-router-dom";
import Loading from "./Loading";

const Articles = () => {
	const { teamId } = useParams();
	const { response: articles, loading } = useTeamsArticles(teamId);
	console.log(articles);
	if (loading) {
		// return <p className="text-center">LOADING</p>;
		return <Loading />;
	}
	return (
		<div className="container two-column">
			<Sidebar
				list={articles.map((article) => article.title)}
				title="Articles"
			/>
			<Outlet />
		</div>
	);
};
export default Articles;
