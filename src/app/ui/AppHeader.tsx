"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./components/NavLink";
import Link from "./components/Link";

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

const rawSlogans = [
	"Veni, vidi, vici.",
	"Cogito ergo sum.",
	"Historia est magistra vitae.",
	"Jöttem, láttam, győztem.",
	"Gondolkodom, tehát vagyok.",
	"A történelem az élet tanítómestere.",
];

export default function AppHeader() {
	const [slogans, setSlogans] = useState<string[]>([]);
	const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

	useEffect(() => {
		const shuffled = shuffleArray(rawSlogans);
		setSlogans(shuffled);
	}, []);

	useEffect(() => {
		if (slogans.length === 0) return;
		const interval = setInterval(() => {
			setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [slogans]);

	return (
		<header className="bg-white border-b-3 border-slate-100 sticky top-0 z-50 sm:max-h-none max-h-[60px]">
			<div className="max-w-6xl mx-auto px-4 sm:py-6 py-2">
				<div className="flex items-center justify-between">
					<div className="flex gap-3 items-center">
						<Link href="/">
							<Image
								src="/transparent_logo.png"
								alt="Célom a Történelem"
								className="w-[40px] h-[40px] sm:w-[51.2px] sm:h-[51.2px]"
								width={51.2}
								height={51.2}
							/>
						</Link>
						<div className="leading-tight">
							<Link href="/">
								<h1 className="text-base sm:text-3xl font-bold text-slate-900 leading-none">
									Célom a Történelem
								</h1>
							</Link>
							<p
								key={currentSloganIndex}
								className="text-xs sm:text-base text-slate-600 mt-0.5 sm:mt-1 transition-opacity duration-500"
							>
								{slogans[currentSloganIndex]}
							</p>
						</div>
					</div>
					<nav className="hidden md:flex space-x-6">
						<NavLink path="/" label="Főoldal" />
						<NavLink path="/kategoriak" label="Kategóriák" />
					</nav>
				</div>
			</div>
		</header>
	);
}
