import Image from "next/image";
import { ClockIcon, CalendarIcon } from "lucide-react";
import type { Post } from "@/types";
import { shortText } from "@/utils/utils";
import Link from "./Link";
import CategoryCard from "./CategoryCard";

export default function featuredCard({
	featured_post,
}: {
	featured_post: Post;
}) {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
			<div className="md:w-1/2">
				<Image
					src={featured_post.image_url}
					alt={featured_post.title}
					className="w-full h-64 md:h-full object-cover"
					width={400}
					height={200}
				/>
			</div>
			<div className="md:w-1/2 p-8">
				<CategoryCard category={featured_post.category} />
				
				<h5 className="text-2xl font-bold text-slate-900 mb-4">
					<Link href={`/${featured_post.slug}`}>
						{featured_post.title}
					</Link>
				</h5>
				<p className="text-slate-600 mb-6 leading-relaxed">
					{shortText(featured_post.content)}
				</p>
				<div className="flex items-center text-sm text-slate-500 mb-6">
					<CalendarIcon className="w-4 h-4 mr-2" />
					<span className="mr-4">{featured_post.available_at}</span>
					<ClockIcon className="w-4 h-4 mr-2" />
					<span>{featured_post.read_time} perc</span>
				</div>

				<Link
					href={`/${featured_post.slug}`}
					className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
				>
					Elolvasom
				</Link>
			</div>
		</div>
	);
}
