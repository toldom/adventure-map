import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function SurfDetails({ params }: { params: { surfName: string } } ) {
	
	const surfName = params.surfName;
	
	return (
		<div>
			<Header mainLine={surfName} subLine="*Custom formatting needed*" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<h1>Surf Details for {surfName}</h1>
				</div>
			</main>
		</div>
	);
}
