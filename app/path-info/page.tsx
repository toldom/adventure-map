import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function PathInfo() {
	return (
		<div>
			<Header mainLine="Path" subLine="Info" />
			<main className={styles.main}>
				<h1>Path Info</h1>
			</main>
		</div>
	);
}
