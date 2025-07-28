import {
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Link from "./components/Link";

type Props = {
	maxPages: number;
	current?: string;
};

export default function Pagination({ maxPages, current }: Props) {
	const currentPage = parseInt(current || "1", 10);
	const prevPage = currentPage > 2 ? `/?page=${currentPage - 1}` : "/";
	const nextPage = `/?page=${currentPage + 1}`;

	const getPages = () => {
		const content = [];

		for (let i = 1; i <= maxPages; i++) {
			const href = i === 1 ? "/" : `/?page=${i}`;
			const isActive = i === currentPage;

			content.push(
				<li
					key={i}
					className={`px-1 py-1 rounded cursor-pointer ${
						isActive
							? "text-blue-900 font-bold"
							: "text-blue-600 hover:text-blue-900 transition"
					}`}
				>
					<Link href={href}>{i}</Link>
				</li>
			);
		}

		return content;
	};

	return (
		<ul className="flex items-center gap-2">
			{currentPage > 1 ? (
				<li>
					<Link href={prevPage}>
						<ChevronLeft
							size={16}
							className="text-blue-700 hover:text-blue-900"
						/>
					</Link>
				</li>
			) : (
				<li className="opacity-50 cursor-default">
					<ChevronLeft size={16} />
				</li>
			)}

			{getPages()}

			{currentPage < maxPages ? (
				<li>
					<Link href={nextPage}>
						<ChevronRight
							size={16}
							className="text-blue-700 hover:text-blue-900"
						/>
					</Link>
				</li>
			) : (
				<li className="opacity-50 cursor-default">
					<ChevronRight size={16} />
				</li>
			)}
		</ul>
	);
}
