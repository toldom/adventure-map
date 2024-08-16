import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function PathDetails({ params }: { params: { pathName: string } }) {

	const pathName = params.pathName;

	return (
		<div>
			<Header mainLine={pathName} subLine="*Custom formatting needed*" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>Path Details for {pathName}</h1>
				</div>
			</main>
		</div>
	);
}
