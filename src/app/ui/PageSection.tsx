import clsx from "clsx";
import Title from "./components/Title";

export default function PageSection({
	children,
	title,
	className,
}: {
	children: React.ReactNode;
	title?: string;
	className?: string;
}) {
	return (
		<article className={clsx("max-w-6xl mx-auto px-4 py-12", className)}>
			{ title ? (
				<Title title={title} />
			) : null }

			<div className="px-6">{children}</div>
		</article>
	);
}
