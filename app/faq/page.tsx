import styles from "@/app/page.module.scss";
import grid from "@/styles/grid.module.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";
import InfoCard from "@/components/InfoCard";
import { faqData } from "@/data/faqData";

// Compose the 
const faqTips = Object.entries(faqData);
const tipLinkElements: JSX.Element[]  = [];
const tipCardElements: JSX.Element[] = [];

faqTips.forEach(([key, tip]) => {
	tipLinkElements.push(
		<Button label={tip.title} type={"tertiary"} link={"/faq/" + key} />
	);

	tipCardElements.push(
		<InfoCard title={tip.title} content={tip.description} />
	);
});

export default function TourismTips() {
	return (
		<div>
			<Header mainLine="Tofino Tourism" subLine="Tips" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>Tips</h1>
					<div className={grid.gridContainer}>
						{tipLinkElements}
					</div>
					{tipCardElements}
				</div>
			</main>
		</div>
	);
}
