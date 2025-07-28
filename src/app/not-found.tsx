export const dynamic = "force-dynamic";

import { Metadata } from "next";
import Link from "./ui/components/Link";
import PageSection from "./ui/PageSection";

export const metadata: Metadata = {
	title: "Célom a Történelem | 404",
	description: "A keresett oldal átmenetileg nem elérhető, vagy nem létezik."
}

export default function NotFound() {
	return (
		<div className="flex justify-center">
			<PageSection title="404 - A keresett oldal nem található.">
				<h1 className="text-lg">
					Sajnáljuk, de az oldal amit felkeresett átmenetileg nem elérhető, vagy
					nem létezik.
				</h1>
				<div className="flex justify-center gap-2">
					<Link
						href="/"
						className="font-medium hover:text-slate-900 transition-colors"
					>
						<span className="hover:mr-3 mr-1 transition-all">
							Vissza a főoldalra
						</span>
						→
					</Link>
				</div>
			</PageSection>
		</div>
	);
}
