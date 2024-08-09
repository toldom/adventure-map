import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function Directory() {
	return (
		<div>
			<Header hasSearch={ true } />
			<main className={styles.main}>
				<h1>Directory Page</h1>
			</main>
		</div>
	);
}
