export const dynamic = "force-dynamic";

import axios from "axios";
import CategoryCard from "../ui/components/CategoryCard";
import PageSection from "../ui/PageSection";
import { Category } from "@/types";

export default async function Kategoriak() {
	let error = true;
	let categories: Category[] = [];

	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/categories`,
			{
				headers: {
					"Content-Type": "application/json",
					"X-SECRET-TOKEN": process.env.API_SECRET,
				},
			}
		);

		categories = res.data.categories;
		error = false;
	} catch (error) {
		error = true;
		console.log("Error while fetching categories:", error);
	}
	return (
		<div>
			{error === true ? (
				<PageSection title="Sajnáljuk...">
					<h1>egy hiba történt a kategóriák betöltése közben.</h1>
				</PageSection>
			) : (
				<PageSection title="Kategóriák">
					<div className="flex gap-3">
						{categories.map((category) => (
							<CategoryCard
								category={category}
								key={category.title}
							/>
						))}
					</div>
				</PageSection>
			)}
		</div>
	);
}
