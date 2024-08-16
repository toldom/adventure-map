import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function TourismTips() {
	return (
		<div>
			<Header mainLine="Tofino Tourism" subLine="Tips" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>FAQ / Tourism Tips</h1>
				</div>
			</main>
		</div>
	);
}
