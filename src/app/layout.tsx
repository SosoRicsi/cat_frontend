import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "./ui/AppHeader";
import AppFooter from "./ui/AppFooter";
import { LoadingProvider } from "./ui/components/LoadingProvider";
import GlobalLoadingBar from "./ui/GlobalLoadingBar";

export const metadata: Metadata = {
	title: {
		default: "Célom a Történelem",
		template: "%s | Célom a Történelem",
	},
	description:
		"Célunk, hogy jól kutatott, lebilincselő tartalmat nyújtsunk Önnek a világunkat formáló lenyűgöző történelemről.",
	openGraph: {
		title: "Célom a Történelem",
		description:
			"Kutatáson alapuló történelmi cikkek, gondolatok és elemzések.",
		url: "https://celom-a-tortenelem.eu",
		siteName: "Célom a Történelem",
		locale: "hu_HU",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="hu">
			<body className={"antialiased"}>
				<LoadingProvider>
					<GlobalLoadingBar />
					<div className={"min-h-screen bg-slate-50 flex flex-col"}>
						<AppHeader />
						<main className="flex-grow">
							<section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
								<div className="max-w-6xl mx-auto px-4 text-center">
									<h2 className="text-4xl md:text-5xl font-bold mb-4">
										Célom a Történelem
									</h2>
									<p className="text-xl text-slate-200 max-w-2xl mx-auto">
										Célunk, hogy jól kutatott, lebilincselő
										tartalmat nyújtsunk Önnek a világunkat
										formáló lenyűgöző történelemről.
									</p>
								</div>
							</section>
							<section>{children}</section>
						</main>
						<AppFooter />
					</div>
				</LoadingProvider>
			</body>
		</html>
	);
}
