type Languages = {
	size: number;
	node: { name: string };
};

export type MyReposType = {
	id: string;
	isPrivate: boolean;
	languages: Languages[];
	name: string;
	description: string;
	url: string;
};
