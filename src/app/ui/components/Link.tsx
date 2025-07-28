"use client";

import NextLink from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ReactNode, MouseEvent } from "react";
import { useLoading } from "./LoadingProvider";

type Props = {
	href: string;
	className?: string;
	children: ReactNode;
};

export default function Link({ href, className, children }: Props) {
	const router = useRouter();
	const [, startTransition] = useTransition();
	const { setLoading } = useLoading();

	const pathName = usePathname();
	const searchParams = useSearchParams();

	const currentUrl =
		pathName + (searchParams?.toString() ? "?" + searchParams.toString() : "");

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		if (href === currentUrl) {
			e.preventDefault();
			return;
		}

		e.preventDefault();
		setLoading(true);
		startTransition(() => {
			router.push(href);
		});
	};

	return (
		<NextLink
			href={href}
			onClick={handleClick}
			className={`cursor-pointer ${className || ""}`}
		>
			{children}
		</NextLink>
	);
}
