export type MyReposType = {
	description: string;
	id: string;
	isPrivat: boolean;
	languages: [{ size: number; node: { name: string } }];
	updatedAt: Date;
	url: string;
};
