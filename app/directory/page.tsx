'use client';

import React, { act } from "react";
import styles from "@/app/page.module.scss";
import directoryPage from "@/styles/directoryPage.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import BusinessCard from "@/components/BusinessCard";
import Filters from "@/components/Filters";
import { BusinessCategories,  BusinessData } from "@/data/businessData";
// import { firaSans, firaSansSm } from "@/styles/fonts";

export default function Directory() {

	const [activeFilter, setActiveFilter] = React.useState("default-filter");
	
	const businessCards: any = [];

	BusinessData.forEach(business => {

		businessCards.push(
			<BusinessCard business={business} key={business.name} />
		);
	});

	return (
		<div>
			<Header hasSearch={ true } />
			<main className={directoryPage.directoryPage}>
				{/* Filter sidebar */}
				<div className={directoryPage.filteringSection}>
					<Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
				</div>
				{/* Business Card Content */}
				<div className={directoryPage.contentSection}>
					{businessCards}
				</div>
			</main>
		</div>
	);
}
