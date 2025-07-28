import { Category } from "@/types";
import Link from "./Link";
import clsx from "clsx";

export default function CategoryCard({ category, size }: { category: Category, size?: "xs" | "sm" | "base" | "lg" }) {
	const classSize = size ? size : "sm";
	return (
		<Link href={`kategoriak/${category.slug}`} className={clsx(
			`inline-block bg-slate-200 text-slate-700 text-${classSize} font-semibold px-2.5 py-0.5 rounded-full mb-2`,
		)}>
			<span className="my-auto">
				{category.title}
			</span>
		</Link>
	);
}
