import useRepos from "./services/useRepos";

function App() {
	const { repos } = useRepos();
	return (
		<>
			<div>
				<h2>Mes URL</h2>
				<h2>*************************************</h2>
				{repos.map((repos) => (
					<article key={repos.id}>
						<h4>ID : {repos.id}</h4>
						<h4>URL : {repos.url}</h4>
						<h4>Description : {repos.description}</h4>
						<h4>
							Langage(s) :{" "}
							{repos.languages.map((lan, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<article key={index}>
									<h4>📜 {lan.node.name}</h4>
								</article>
							))}
						</h4>
						<hr />
					</article>
				))}
			</div>
		</>
	);
}

export default App;
