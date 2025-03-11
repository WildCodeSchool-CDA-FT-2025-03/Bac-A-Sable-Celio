type Languages = {
	size: number;
	node: { name: string };
};
export type MyReposType = {
	description: string;
	id: string;
	isPrivate: boolean;
	url: string;
	languages: Languages[];
};
