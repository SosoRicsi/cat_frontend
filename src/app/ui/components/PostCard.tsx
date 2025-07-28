import { Post } from "@/types";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { shortText } from "@/utils/utils";
import Link from "./Link";
import CategoryCard from "./CategoryCard";

export default function PostCard({ post }: { post: Post }) {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
			<div className="aspect-video overflow-hidden">
				<Image
					src={post.image_url}
					alt={post.title}
					className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					width={800}
					height={400}
				/>
			</div>
			<div className="p-6">
				<CategoryCard category={post.category} size="xs" />

				<h5 className="text-lg font-bold text-slate-900 leading-tight mb-2 cursor-pointer">
					<Link href={`/${post.slug}`}>{post.title}</Link>
				</h5>
				<p className="text-slate-600 text-sm mb-4 leading-relaxed">
					{shortText(post.content)}
				</p>
				<div className="flex items-center text-xs text-slate-500 mb-4">
					<CalendarIcon className="w-3 h-3 mr-1" />
					<span className="mr-3">{post.available_at}</span>
					<ClockIcon className="w-3 h-3 mr-1" />
					<span>{post.read_time} perc</span>
				</div>
				<Link
					href={`/${post.slug}`}
					className="text-slate-800 font-medium hover:text-slate-600 transition-colors"
				>
					<div className="items-center group">
						<span>Elolvasom</span>
						<span className="ml-1 transition-all duration-300 group-hover:ml-3">
							→
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
