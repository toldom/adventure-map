import styles from "@/app/page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import LinkCard from "@/components/LinkCard";

export default function ParksMap() {
	return (
		<div>
			<Header mainLine="Parks" subLine="Map" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<div className={styles.imgContainer}>
						<Image src={"/img/parks-map.png"} width={"960"} height={"1355"} alt="Map of the parks around the Tofino area" />
					</div>
				</div>
			</main>
		</div>
	);
}
