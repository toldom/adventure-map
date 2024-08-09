import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function TownMap() {
	return (
		<div>
			<Header mainLine="Tofino" subLine="Map" />
			<main className={styles.main}>
				<h1>Town Map</h1>
			</main>
		</div>
	);
}
