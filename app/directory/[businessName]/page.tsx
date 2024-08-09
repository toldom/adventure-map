import styles from "@/app/page.module.scss";
import Header from "@/components/Header";

export default function BusinessesListing({ params }: { params: { businessName: String } }) {

	const businessName = params.businessName;

	return (
		<div>
			<Header hasSearch={true} />
			<main className={styles.main}>
				<h1>Business Listing for {businessName}</h1>
			</main>
		</div>
	);
}
