import styles from "@/app/page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function TownMap() {
	return (
		<div>
			<Header mainLine="Tofino" subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<div className={styles.imgContainer}>
						<Image src={"/img/tofino-map.png"} width={"960"} height={"1355"} alt="Map of the Town of Tofino" />
					</div>
				</div>
			</main>
		</div>
	);
}
