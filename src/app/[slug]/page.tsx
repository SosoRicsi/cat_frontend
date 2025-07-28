export const dynamic = "force-dynamic";

import axios from "axios";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import PostContent from "../ui/components/PostContent";
import { shortText } from "@/utils/utils";
import Link from "../ui/components/Link";
import { notFound } from "next/navigation";
import CategoryCard from "../ui/components/CategoryCard";
import { Metadata } from "next";

async function getPost(slug: string) {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/post/${slug}`,
			{
				headers: {
					"Content-Type": "application/json",
					"X-SECRET-TOKEN": process.env.API_SECRET,
				},
			}
		);

		return response.data ?? null;
	} catch (error) {
		console.error("Bejegyzés lekérési hiba:", error);
		return null;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const post = await getPost(params.slug);
	if (!post) return {};

	const title = post.title;
	const description = shortText(post.content);
	const image = post.image_url;
	const url = `https://celom-a-tortenelem.eu/${params.slug}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			images: [{ url: image }],
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
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
export default async function PostPage({ params }: any) {
	const post = await getPost(params.slug);
	if (!post) return notFound();

	return (
		<article className="max-w-6xl mx-auto px-4 py-12">
			<header className="mb-8">
				<Link
					href="/"
					className="text-slate-800 font-medium hover:text-slate-600 transition-colors"
				>
					<div className="items-center group flex">
						<span className="mr-1 transition-all duration-300 group-hover:mr-3">
							<ArrowLeftIcon className="w-4 h-4 mr-2" />
						</span>
						<span>Vissza a főoldalra</span>
					</div>
				</Link>

				<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
					{post.title}
				</h1>
				<div className="flex items-center justify-between text-slate-600 mb-8">
					<div className="flex gap-x-6">
						<div className="flex items-center">
							<CalendarIcon className="w-4 h-4 mr-2" />
							<span>{post.available_at}</span>
						</div>
						<div className="flex items-center">
							<ClockIcon className="w-4 h-4 mr-2" />
							<span>{post.read_time} perc</span>
						</div>
					</div>

					<CategoryCard category={post.category} />
				</div>
			</header>

			<div className="mb-12">
				<Image
					src={post.image_url}
					alt={post.title || params.slug}
					className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg border-3 border-slate-200"
					width={800}
					height={400}
				/>
			</div>

			<PostContent content={post.content} />

			<footer className="mt-16 pt-8 border-t border-slate-200">
				<div className="flex justify-between items-center group flex-wrap">
					<Link
						href="/"
						className="text-slate-800 font-medium hover:text-slate-600 transition-colors"
					>
						<div className="items-center group flex">
							<span className="mr-1 transition-all duration-300 group-hover:mr-3">
								<ArrowLeftIcon className="w-4 h-4 mr-2" />
							</span>
							<span>Vissza a főoldalra</span>
						</div>
					</Link>
					<div className="text-sm text-slate-500">
						Közzétéve: {post.available_at}
					</div>
				</div>
			</footer>
		</article>
	);
}
