export const dynamic = "force-dynamic";

import { Post } from "@/types";
import FeaturedCard from "./ui/components/FeaturedCard";
import axios from "axios";
import PostCard from "./ui/components/PostCard";
import Title from "./ui/components/Title";
import PageSection from "./ui/PageSection";
import Pagination from "./ui/Pagination";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ searchParams }: any) {
	let response;
	let recent_posts;
	let featured_post;
	let query;

	if (searchParams.page != undefined && searchParams.page != null) {
		query =
			process.env.NEXT_PUBLIC_API_URL + "/post?page=" + searchParams.page;
	} else {
		query = process.env.NEXT_PUBLIC_API_URL + "/post";
	}

	try {
		response = await axios.get(query, {
			headers: {
				"Content-Type": "application/json",
				"X-SECRET-TOKEN": process.env.API_SECRET,
			},
		});

		featured_post = response.data.posts.featured_post;
		recent_posts = response.data.posts.recent_posts;
	} catch (error) {
		console.error("API hiba: " + error);
		console.error({
			"query": query
		});
	}

	return (
		<div>
			{featured_post ? (
				<section className="max-w-6xl mx-auto px-4 py-12">
					<Title title="Kiemelt bejegyzés" />
					<FeaturedCard featured_post={featured_post} />
				</section>
			) : null}

			{recent_posts ? (
				<>
					<section className="max-w-6xl mx-auto px-4 py-12">
						<Title title="Legújabb bejegyzések" />
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{recent_posts.map((post: Post) => (
								<PostCard post={post} key={post.id} />
							))}
						</div>
					</section>

					<PageSection className="mt-0 pt-0">
						<div className="flex justify-center">
							<Pagination
								maxPages={response?.data.pages}
								current={searchParams.page}
							/>
						</div>
					</PageSection>
				</>
			) : (
				<PageSection title="Sajnáljuk...">
					<h1>jelenleg nincsenek elérhető bejegyzések.</h1>
				</PageSection>
			)}
		</div>
	);
}
