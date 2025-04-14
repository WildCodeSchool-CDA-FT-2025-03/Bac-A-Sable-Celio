import type { JSX } from "react";
import type { MyReposType } from "../types/respos.type";
import { Link } from "react-router-dom";

type Props = {
	repo: MyReposType;
	children: JSX.Element;
};

export default function ReposCard({ repo, children }: Props) {
	return (
		<>
			<article>
				<Link to={`/repos/${repo.id}`}>ID : {repo.id}</Link>

				<h4>Name : {repo.name}</h4>
				<h4>URL : {repo.url}</h4>
			</article>
			{children}
			<hr />
		</>
	);
}
