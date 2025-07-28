export const dynamic = "force-dynamic";

import { Category, Post } from "@/types";
import axios from "axios";
import PostCard from "@/app/ui/components/PostCard";
import Title from "@/app/ui/components/Title";
import PageSection from "@/app/ui/PageSection";
import Pagination from "@/app/ui/Pagination";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getCategory(
	id: string,
	page: undefined | string
): Promise<{
	category: Category;
	posts: Post[];
	page: number;
	pages: number;
	total: number;
	showing: number;
} | null> {
	let query: string = `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`;

	if (page != undefined) {
		query += `?page=${page}`;
	}

	try {
		const response = await axios.get(query, {
			headers: {
				"Content-Type": "application/json",
				"X-SECRET-TOKEN": process.env.API_SECRET,
			},
		});

		return response.data ?? null;
	} catch (error) {
		console.error("Hiba történt a kategória lekérdezése közben:", error);
		return null;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
	const response = await getCategory(params.id, searchParams.page);
	if (!response) return {};

	const title = `Célom a Történelem | ${response.category.title}`;
	const description = `Kutatáson alapuló történelmi cikkek, gondolatok és elemzések. A kategória: ${response.category.title}`;

	let url: string = `https://celom-a-tortenelem.eu/kategoriak/${response.category.slug}`;

	if (searchParams.page != undefined) {
		url += `?page=${searchParams.page}`;
	}

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			images: [{ url: "https://celom-a-tortenelem.eu/transparent_logo.png" }],
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["https://celom-a-tortenelem.eu/transparent_logo.png"],
		},
		alternates: {
			canonical: url,
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CategoryPosts({ searchParams, params }: any) {
	const response = await getCategory(params.id, searchParams.page);
	if (!response?.category) return notFound();
	const posts = response.posts;

	return (
		<div>
			{posts.length >= 1 ? (
				<>
					<section className="max-w-6xl mx-auto px-4 py-12">
						<Title
							title={`Kategória: ${response.category.title}`}
						/>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{posts.map((post: Post) => (
								<PostCard post={post} key={post.id} />
							))}
						</div>
					</section>

					<PageSection className="mt-0 pt-0">
						<div className="flex justify-center">
							<Pagination
								maxPages={response.pages}
								current={searchParams.page}
							/>
						</div>
					</PageSection>
				</>
			) : (
				<PageSection title="Sajnáljuk...">
					<h1>
						jelenleg nincsenek elérhető bejegyzések ebben a
						kategóriában: {response.category.title}.
					</h1>
				</PageSection>
			)}
		</div>
	);
}
