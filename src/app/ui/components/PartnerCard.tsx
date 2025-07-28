import { Partner } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function PartnerCard({ partner }: { partner: Partner }) {
	return (
		<div className="bg-zinc-100 border-5 border-zinc-200/25 p-2 rounded-lg w-xs flex gap-3">
			<Image
				src={partner.image}
				alt={partner.name}
				width={75}
				height={75}
				className="rounded-full border-5 border-zinc-200/50"
			/>
			<div className="my-auto">
				<Link href={partner.website} target="_blank" className="my-auto text-lg font-semibold m-0 p-0">{ partner.name }</Link>
				<p className="m-0 p-0 text-sm " style={{ lineHeight: 1 }}>{ partner.comment }</p>
			</div>
		</div>
	);
}