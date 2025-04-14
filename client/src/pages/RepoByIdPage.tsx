/* eslint-disable react-hooks/exhaustive-deps */
//import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";
import { useEffect } from "react";

export default function ReposByIdPage() {
	const { id } = useParams();
	const { oneRepo, getOneRepo } = useRepos();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getOneRepo(id as string);
	}, [id]);

	return (
		<div>
			<h1>Informations sur repo {id}</h1>
			<h2>{oneRepo?.name}</h2>
			<h2>{oneRepo?.url}</h2>
			{oneRepo?.languages.map((lg) => (
				<h4 key={oneRepo.id}>{lg.node.name}</h4>
			))}
		</div>
	);
}
