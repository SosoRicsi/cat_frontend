import clsx from "clsx";
import Link from "./Link";
import { usePathname } from "next/navigation";

export default function NavLink({
	path,
	label,
	eclass,
}: {
	path: string;
	label: string;
	eclass?: string;
}) {
	const pathName = usePathname();

	const isActive =
		path === "/" ? pathName === "/" : pathName.startsWith(path);

	return (
		<Link
			href={path}
			className={clsx(
				"text-slate-700 hover:text-slate-900 font-medium transition-all",
				isActive && "underline",
				eclass
			)}
		>
			{label}
		</Link>
	);
}
