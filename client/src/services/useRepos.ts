import { useEffect, useState } from "react";
import type { MyReposType } from "../types/respos.type";
import client from "./client";

const useRepos = () => {
	const [repos, setRepos] = useState<MyReposType[]>([]);

	useEffect(() => {
		client
			.get("/repos")
			.then((data) => {
				console.info("données de data dans useEffect : ", data);
				setRepos(data.data as MyReposType[]);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	console.log("Valeur de Repos dans useRepos : ", repos);
	return { repos };
};
export default useRepos;
