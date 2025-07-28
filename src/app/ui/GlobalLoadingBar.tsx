"use client";

import { useLoading } from "./components/LoadingProvider";

export default function GlobalLoadingBar() {
	const { loading } = useLoading();

	if (!loading) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
			<div className="h-1 bg-gradient-to-r from-slate-800 to-slate-700 animate-[loadingBar_1.5s_linear_infinite]" />
			<style jsx>{`
				@keyframes loadingBar {
					0% {
						margin-left: -100%;
						width: 100%;
					}
					50% {
						margin-left: 0%;
						width: 100%;
					}
					100% {
						margin-left: 100%;
						width: 0%;
					}
				}
			`}</style>
		</div>
	);
}
