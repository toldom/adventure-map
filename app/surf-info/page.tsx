import styles from "@/app/page.module.scss";
import grid from "@/styles/grid.module.scss";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import LinkCard from "@/components/LinkCard";
import Button from "@/components/Button";
import { surfData } from "@/data/surfData";

// Import the list of beaches
const beaches = Object.entries(surfData);
const beachElements: JSX.Element[] = [];

beaches.forEach(([key, beach]) => {
	beachElements.push(
		<div>
			<Button label={beach.title} type={"tertiary"} link={"/surf-info/" + key} />
			<p>{beach.description}</p>
		</div>
	)
});


export default function SurfInfo() {
	return (
		<div>
			<Header mainLine="Surf" subLine="Info" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<InfoCard title="GENERAL SURF INFO" content="Lorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies." />
					{/* Beaches grid */}
					<div></div>
					<h1>Beaches</h1>
					<div className={grid.gridContainer}>
						{ beachElements }
					</div>
				</div>
			</main>
		</div>
	);
}