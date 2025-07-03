import styles from "@/app/page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";
import { config } from "@/data/config";

const envMetadata = config.envMetadata;

export default function TownMap() {
	return (
		<div>
			<Header mainLine={envMetadata.mapSideAName} subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<div>
						<img className={styles.mapContainer} src={"/svg/maps/" + envMetadata.mapSideADir} /* width={"1329"} height={"1618"} */ alt="Map of the Town of Tofino" />
					</div>
				</div>
			</main>
		</div>
	);
}
