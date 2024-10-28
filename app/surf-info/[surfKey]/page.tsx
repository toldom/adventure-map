import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";
import InfoCard from "@/components/InfoCard";
import { surfData } from "@/data/surfData";

export default function SurfDetails({ params }: { params: { surfKey: string } } ) {

	// Fetch content for the given beach
	const surfKey = params.surfKey;
	const surfContent = surfData[surfKey];

	// Extract info cards based information and generate elements
	const contentCards = [];

	for (const [key,card] of Object.entries(surfContent.cardContent)) {
		contentCards.push(<InfoCard title={card.title} content={card.content} />)
	}

	// TODO: Extract nearby business information
	const businessSection = [];
	businessSection.push(<h1>Businesses Near {surfContent.title}</h1>)

	// Extract Image URLs
	const photosSection = [];
	photosSection.push(<h1>Photos</h1>);

	surfContent.photoURLs.forEach(element => {
		photosSection.push(
			<Image src={element} width={"400"} height={"200"} alt={"Images of " + surfContent.title} />
		);
	});
	
	return (
		<div>
			<Header mainLine={surfContent.title} subLine="*Updated formatting needed*" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<p><Link href={"/surf-info/"}>ALL BEACHES</Link> &#62; {surfContent.title}</p>
					<LinkCard />
					<h1>Surf Details for {surfContent.title}</h1>
					{contentCards}
					{businessSection}
					{photosSection}
				</div>
			</main>
		</div>
	);
}

