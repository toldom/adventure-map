import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function TownMap() {
	return (
		<div>
			<Header mainLine="Tofino" subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>Town Map</h1>
				</div>
			</main>
		</div>
	);
}
