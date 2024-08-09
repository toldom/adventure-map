import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function PathDetails({ params }: { params: { pathName: string } }) {

	const pathName = params.pathName;

	return (
		<div>
			<Header mainLine={pathName} subLine="*Custom formatting needed*" />
			<main className={styles.main}>
				<h1>Path Details for {pathName}</h1>
			</main>
		</div>
	);
}
