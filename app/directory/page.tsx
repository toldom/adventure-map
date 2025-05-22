'use client';

import { useState } from "react";
import directoryPage from "@/styles/directoryPage.module.scss";
import Header from "@/components/Header";
import BusinessCard from "@/components/BusinessCard";
import Filters from "@/components/Filters";

import { config } from "@/data/config";

const BusinessData = config.businessData;

export default function Directory() {
	
	const defaultFilter = "default"
	const [activeFilter, setActiveFilter] = useState(defaultFilter);
	const defaultFilterActive = activeFilter == defaultFilter;

	const businessCards: JSX.Element[] = [];

	BusinessData.forEach(business => {

		const categoryMatchesActiveFilter 	= business.category === activeFilter;
		const showBusiness 					= defaultFilterActive || categoryMatchesActiveFilter;

		if (showBusiness) {
			businessCards.push(
				<BusinessCard business={business} key={business.name} />
			);
		}
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
