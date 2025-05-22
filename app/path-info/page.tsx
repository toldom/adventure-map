import styles from "@/app/page.module.scss";
import grid from "@/styles/grid.module.scss"
import Button from "@/components/Button";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import LinkCard from "@/components/LinkCard";
import { config } from "@/data/config";

// Import the list of paths
const trailData = config.trailData;
const paths = Object.entries(trailData);
const pathElements: JSX.Element[] = [];

paths.forEach(([key, path]) => {
	pathElements.push(
		<div>
			<Button label={path.title} type={"quad"} link={"/path-info/" + key} />
			<p>{path.description}</p>
		</div>
	)
});

export default function PathInfo() {

	return (
		<div>
			<Header mainLine="Path" subLine="Info" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<InfoCard title="GENERAL PATH INFO" content="Lorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies." />
					<h1>Paths</h1>
					<h1>Hiking Trails</h1>
					<div className={grid.gridContainer}>
						{pathElements}
					</div>
				</div>
			</main>
		</div>
	);
}
