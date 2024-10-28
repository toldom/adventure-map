import styles from "@/app/page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";
import InfoCard from "@/components/InfoCard";
import { trailData } from "@/data/trailData";

export default function PathDetails({ params }: { params: { pathKey: string } }) {

	// Fetch content for the given beach
	const pathKey = params.pathKey;
	const pathContent = trailData[pathKey];

	// Extract info cards based information and generate elements
	const contentCards = [];

	for (const [key,path] of Object.entries(pathContent.cardContent)) {
		contentCards.push(<InfoCard title={path.title} content={path.content} />)
	}

	// TODO: Extract nearby business information
	const businessSection = [];
	businessSection.push(<h1>Businesses Near {pathContent.title}</h1>)

	// Extract Image URLs
	const photosSection = [];
	photosSection.push(<h1>Photos</h1>);

	pathContent.photoURLs.forEach(element => {
		photosSection.push(
			<Image src={element} width={"400"} height={"200"} alt={"Images of " + pathContent.title} />
		);
	});

	return (
		<div>
			<Header mainLine={pathContent.title} subLine="Trail" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					{contentCards}
					{businessSection}
					{photosSection}
				</div>
			</main>
		</div>
	);
}
