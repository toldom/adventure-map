import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function ParksMap() {
	return (
		<div>
			<Header mainLine="Parks" subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>Parks Map</h1>
				</div>
			</main>
		</div>
	);
}
