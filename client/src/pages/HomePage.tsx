//import { useLoaderData } from "react-router-dom";
import ReposCard from "../components/ReposCard";
import type { MyReposType } from "../types/respos.type";
import useRepos from "../services/useRepos";
import Languages from "../components/Languages";

export default function HomePage() {
	const { repos } = useRepos();

	//const { repos } = useLoaderData();

	return (
		<>
			<h2>Mes Repos</h2>
			{repos?.map((repo: MyReposType) => (
				<ReposCard repo={repo} key={repo.id}>
					<Languages repo={repo} />
				</ReposCard>
			))}
		</>
	);
}
