export const dynamic = "force-dynamic";

import PartnerCard from "../ui/components/PartnerCard";
import { Partner } from "@/types";
import PageSection from "../ui/PageSection";

const partners: Partner[] = [
	{
		name: "WorkingShark",
		website: "https://workingshark.com",
		image: "/images/partners/workingshark.png",
	},
	{
		name: "Világtitkok",
		website: "https://vilagtitkok.hu",
		image: "/images/partners/vilagtitkok.png",
	},
];

export default function Rolunk() {
	return (
		<div>
			<PageSection title="A projektről">
				<p>Hamarosan...</p>
			</PageSection>
			<PageSection title="Partnereink">
				<div className="flex flex-wrap gap-3">
					{partners.map((partner) => (
						<PartnerCard partner={partner} key={partner.name} />
					))}
				</div>
			</PageSection>
		</div>
	);
}
