import styles from "@/app/page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";
import { config } from "@/data/config";

const envMetadata = config.envMetadata;

export default function ParksMap() {
	return (
		<div>
			<Header mainLine={envMetadata.mapSideBName} subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<div>
						<img className={styles.mapContainer} src={"/svg/maps/" + envMetadata.mapSideBDir} /* width={"960"} height={"1355"} */ alt="Map of the parks around the Tofino area" />
					</div>
				</div>
			</main>
		</div>
	);
}
