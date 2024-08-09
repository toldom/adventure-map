import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function TourismTips() {
	return (
		<div>
			<Header mainLine="Tofino Tourism" subLine="Tips" />
			<main className={styles.main}>
				<h1>FAQ / Tourism Tips</h1>
			</main>
		</div>
	);
}
