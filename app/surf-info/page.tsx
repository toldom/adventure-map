import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function SurfInfo() {
	return (
		<div>
			<Header mainLine="Surf" subLine="Info" />
			<main className={styles.main}>
				<h1>Surf Info</h1>
			</main>
		</div>
	);
}
