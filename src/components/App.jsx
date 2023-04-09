import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Team from "./Team";
import Articles from "./Articles";
import Article from "./Article";
export default function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:teamId" element={<TeamPage />} />
					{/* <Route path="/teams" element={<Teams />} /> */}
					{/* use with Outlet */}
					<Route path="/teams" element={<Teams />}>
						<Route
							path=""
							element={<h4 className="sidebar-instruction">Select a Team</h4>}
						/>
						<Route path=":teamId" element={<Team />} />
					</Route>
					<Route path="/players/*" element={<Players />} />
					<Route path="/:teamId/articles" element={<Articles />}>
						<Route
							path=""
							element={
								<h4 className="sidebar-instruction">Select a Article</h4>
							}
						/>
						<Route path=":articleId" element={<Article />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}
