// Home page

import styles from "./page.module.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";

import { firaSans, firaSansSm } from "@/styles/fonts";
import { config } from "@/data/config";

const envMetadata = config.envMetadata;

export default function Home() {
	return (
		<div>
			<Header mainLine={"Discover " + envMetadata.name} subLine="Adventure Map" />
			<main className={styles.main}>
				{/* Buttons */}
				<div className={ styles.mainSection }>
					<Button type="primary" label={"VIEW ALL " + envMetadata.name.toUpperCase()  + " BUSINESSES"} link="/directory" />
					<div className={styles.btnContainer}>
						<Button type="mapLink" label={"VIEW " + envMetadata.mapSideAName.toUpperCase() + " MAP"} link="/town-map" />
						<Button type="mapLink" label={"VIEW " + envMetadata.mapSideBName.toUpperCase() + " MAP"} link="/parks-map" />
					</div>
				</div>

				{(envMetadata.includeSurf === true || envMetadata.includeTrails === true || envMetadata.includeFAQ === true) && <>
					{/* Learn Section - include conditionally if any items are included for this env */}
					<div className={styles.mainSection}>

						<h2 className={firaSans.className}>LEARN MORE ABOUT { envMetadata.name.toUpperCase() }</h2>

						<div className={styles.cardContainer}>
							{/* Surf link - include conditionally if surf is enabled for this env */}
							{(envMetadata.includeSurf === true) &&
								<div className={styles.infoCard}>
									<Button label="Surf Info" type="tertiary" link="/surf-info" glyph="SurfIcon" />
									<p className={firaSansSm.className}>Learn everything you need to know about surfing in {envMetadata.name}. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
								</div>
							}
							{/* Path link - include conditionally if paths is enabled for this env */}
							{(envMetadata.includeTrails === true) &&
								<div className={styles.infoCard}>
									<Button label="Path Info" type="tertiary" link="/path-info" glyph="MapIcon" />
									<p className={firaSansSm.className}>Learn everything you need to know about surfing in {envMetadata.name}. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
								</div>
							}
							{/* Hwy 4 link - include conditionally if FAQ is enabled for this env */}
							{(envMetadata.includeFAQ === true) &&
								<div className={styles.infoCard}>
									<Button label="How to drive Hwy 4" type="tertiary" link="/faq/how-to-drive-hwy-4" glyph="HwyIcon" />
									<p className={firaSansSm.className}>Learn everything you need to know about surfing in {envMetadata.name}. From high tides to low tides and rip currents, this info will help you have fun and say safe.</p>
								</div>
							}
						</div>
						{/* FAQ link - include conditionally if FAQ is enabled for this env */}
						{(envMetadata.includeFAQ === true) &&
							<div className={styles.btnContainer}>
								<Button label="Tips & Tricks (FAQ)" type="tertiary" link="/faq" glyph="TipIcon" />
							</div>
						}
					</div></>
				}
			</main>
		</div>
	);
}
