import styles from "@/app/page.module.scss";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import LinkCard from "@/components/LinkCard";

export default function TourismTipDetails({ params }: { params: { faqName: string } }) {
	
	const faqName = params.faqName;

	// Hard-coded sample content, representing what long-form content will look like
	let content = "Lorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies. Lorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies.\n\nLorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies.\n\nLorem ipsum dolor sit amet consectetur. Sit viverra nam enim etiam. Vitae vulputate turpis ac velit. Vitae commodo ultricies duis donec cursus aliquet nam velit. Tristique facilisis aliquam commodo tempus accumsan. Ac suscipit vitae laoreet posuere diam dignissim nulla. Vestibulum sed nunc pulvinar interdum orci est erat elit imperdiet. Justo duis arcu vitae sed lobortis lacus. Sit ut iaculis enim sit porttitor. Nunc morbi quis iaculis arcu. Interdum morbi suspendisse egestas in arcu dignissim diam. Auctor eget luctus ac ipsum ultricies."
	
	return (
		<div>
			<Header mainLine={params.faqName} subLine="*Custom Formatting Needed*" />
			<main className={styles.main}>
				<div className={styles.mainSection}>
					<LinkCard />
					<InfoCard 
						title={`FAQ Title for ${faqName}`}
						content={content}
					/>
				</div>
			</main>
		</div>
	);
}
