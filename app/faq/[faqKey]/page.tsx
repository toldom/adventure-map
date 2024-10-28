import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import LinkCard from "@/components/LinkCard";
import { faqData } from "@/data/faqData";

export default function TourismTipDetails({ params }: { params: { faqKey: string } }) {
	
	const faqKey = params.faqKey;
	const faqContent = faqData[faqKey];

	return (
		<div>
			<Header mainLine={faqContent.title} subLine="*Custom Formatting Needed*" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<InfoCard 
						title={`FAQ Title for ${faqContent.title}`}
						content={faqContent.description}
					/>
				</div>
			</main>
		</div>
	);
}
