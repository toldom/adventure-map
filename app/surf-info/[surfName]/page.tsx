import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function SurfDetails({ params }: { params: { surfName: string } } ) {
	
	const surfName = params.surfName;
	
	return (
		<div>
			<Header mainLine={surfName} subLine="*Custom formatting needed*" />
			<main className={styles.main}>
				<h1>Surf Details for {surfName}</h1>
			</main>
		</div>
	);
}
