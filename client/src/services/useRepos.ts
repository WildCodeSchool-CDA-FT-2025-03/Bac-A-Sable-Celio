import { useEffect, useState } from "react";
import type { MyReposType } from "../types/respos.type";
import client from "./client";

const useRepos = () => {
	const [repos, setRepos] = useState<MyReposType[]>([]);
	const [oneRepo, setOneRepo] = useState<MyReposType>();

	const getOneRepo = (id: string) => {
		client.get(`/repos/${id}`).then((repo) => {
			setOneRepo(repo.data as MyReposType);
			console.info("Fin de setRepo");
		});
	};

	const addNewRepo = async (repo: MyReposType) => {
		try {
			await client.post("/repos", repo);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		client
			.get("/repos")
			.then((data) => {
				setRepos(data.data as MyReposType[]);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return { repos, oneRepo, getOneRepo, addNewRepo };
};
export default useRepos;
