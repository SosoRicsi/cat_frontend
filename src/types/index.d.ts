export type Category = {
	id: number;
	title: string;
	slug: string;
};

export type Post = {
	id: number;
	image_url: string;
	title: string;
	category: Category;
	content: string;
	available_at: string;
	read_time: number;
	slug: string;
	featured?: boolean;
};

export type PageParams<T> = {
	params: T;
}

export type Partner = {
	name: string;
	website: string;
	image: string;
	comment?: string;
};