import { useState } from "react";
import type { MyReposType } from "../types/respos.type";
import InputForm from "../components/InputForm";
import SelectLanguages from "../components/SelectLanguages";
import useRepos from "../services/useRepos";

const initRepo = {
	url: "",
	isPrivate: false,
	languages: [
		{
			size: 0,
			node: {
				name: "",
			},
		},
	],
	name: "",
	description: "",
};
export default function RepoForm() {
	const [newRepo, setNewRepo] = useState<MyReposType>(initRepo);
	const { addNewRepo } = useRepos();

	const handleNewRepo = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>,
	) => {
		if (e.target.name === "languages") {
			setNewRepo((prev) => ({
				...prev,
				languages: [{ size: 0, node: { name: e.target.value } }],
			}));
		} else if (e.target.name === "isPrivate") {
			setNewRepo(() => ({ ...newRepo, [e.target.name]: !newRepo.isPrivate }));
		} else {
			setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
		}
	};

	const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			console.log("Nouvel ajout de repos", newRepo);
			await addNewRepo(newRepo);
			//setNewRepo(initRepo);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmitRepo}>
			<h1>Ajout d'un repo</h1>
			<InputForm
				handleNewRepo={handleNewRepo}
				value={newRepo.name}
				title="Titre du repo"
				name="name"
			/>
			<br />
			<InputForm
				handleNewRepo={handleNewRepo}
				value={newRepo.description}
				title="Description du repo"
				name="description"
			/>
			<br />
			<InputForm
				handleNewRepo={handleNewRepo}
				value={newRepo.url}
				title="Url du repo"
				name="url"
			/>
			<br />
			<SelectLanguages
				handleNewRepo={handleNewRepo}
				value={newRepo.languages[0].node.name}
			/>
			<br />
			<label htmlFor="">
				Is Private ?
				<input
					type="checkbox"
					name="isPrivate"
					checked={newRepo.isPrivate}
					onChange={handleNewRepo}
				/>
				<br />
			</label>
			<button type="submit">Ajouter</button>
		</form>
	);
}
