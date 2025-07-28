"use client";

import Link from "./components/Link";
import NextLink from "next/link";

export default function AppFooter() {
	return (
		<footer className="bg-slate-800 text-white py-12 bottom-0">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<h4 className="text-xl font-bold mb-4">
							Célom a Történelem
						</h4>
						<p className="text-slate-300 leading-relaxed">
							Célunk, hogy jól kutatott, lebilincselő tartalmat
							nyújtsunk Önnek a világunkat formáló lenyűgöző
							történetekről.
						</p>
					</div>
					<div>
						<h5 className="font-semibold mb-4">Partnereink</h5>
						<ul className="space-y-2 text-slate-300">
							<li>
								<a
									href="https://workingshark.com"
									target="_blank"
									className="hover:text-white transition"
								>
									WorkingShark
								</a>
							</li>
							<li>
								<a
									href="https://vilagtitkok.hu"
									target="_blank"
									className="hover:text-white transition"
								>
									Világtitkok
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="font-semibold mb-4">
							További Információk
						</h5>
						<ul className="space-y-2 text-slate-300">
							<li>
								<Link
									href="/rolunk"
									className="hover:text-white transition"
								>
									Rólunk
								</Link>
							</li>
							<li>
								<NextLink
									href="https://youtube.com/@celom_a_tortenelem"
									className="hover:text-white transition"
									target="_blank"
								>
									YouTube
								</NextLink>
							</li>
							<li>
								<NextLink
									href="https://discord.gg/AEybQJyaX5"
									className="hover:text-white transition"
									target="_blank"
								>
									Discord
								</NextLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
					<p>
						&copy; {/* {{ new Date().getFullYear() }} */} 2025 Célom
						a történelem. Minden jog fentartva. | Adatkezelési
						tájékoztató
					</p>
				</div>
			</div>
		</footer>
	);
}
