// Home page

import styles from "./page.module.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";

import { firaSans, firaSansSm } from "@/styles/fonts";

export default function Home() {
	return (
		<div>
			<Header mainLine="Discover Tofino" subLine="Adventure Map" />
			<main className={styles.main}>
				{/* Buttons */}
				<div className={ styles.mainSection }>
					<Button type="primary" label="VIEW ALL TOFINO BUSINESSES" link="/directory" />
					<div className={styles.btnContainer}>
						<Button type="secondary" label="VIEW TOFINO MAP" link="/town-map" />
						<Button type="secondary" label="VIEW PARKS MAP" link="parks-map" />
					</div>
				</div>

				{/* Learn Section */}
				<div className={styles.mainSection}>

					<h2 className={firaSans.className}>LEARN MORE ABOUT TOFINO</h2>

					<div className={styles.cardContainer}>
						<div className={styles.infoCard}>
							<Button label="Surf Info" type="tertiary" link="/surf-info" glyph="SurfIcon" />
							<p className={firaSansSm.className}>Learn everything you need to know about surfing in Tofino. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
						</div>
						<div className={styles.infoCard}>
							<Button label="Path Info" type="tertiary" link="/path-info" glyph="MapIcon" />
							<p className={firaSansSm.className}>Learn everything you need to know about surfing in Tofino. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
						</div>
						<div className={styles.infoCard}>
							<Button label="How to drive Hwy 4" type="tertiary" link="/faq/how-to-drive-hwy4" glyph="HwyIcon" />
							<p className={firaSansSm.className}>Learn everything you need to know about surfing in Tofino. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
						</div>
					</div>
					<div className={styles.btnContainer}>
						<Button label="Tips & Tricks (FAQ)" type="tertiary" link="/faq" glyph="TipIcon" />
					</div>
				</div>

			</main>
		</div>
	);
}
