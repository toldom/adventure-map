import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function ParksMap() {
	return (
		<div>
			<Header mainLine="Parks" subLine="Map" />
			<main className={styles.main}>
				<h1>Parks Map</h1>
			</main>
		</div>
	);
}
