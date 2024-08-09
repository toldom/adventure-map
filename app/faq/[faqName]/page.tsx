import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function TourismTipDetails({ params }: { params: { faqName: string } }) {
	
	const faqName = params.faqName;
	
	return (
		<div>
			<Header mainLine={params.faqName} subLine="*Custom Formatting Needed*" />
			<main className={styles.main}>
				<h1>Tourism Tip Details for {faqName}</h1>
			</main>
		</div>
	);
}
