// Filter button component
'use client';

import React, { act, MouseEventHandler } from "react";
import Image from "next/image";
import styles from "@/styles/directoryPage.module.scss";
import FilterButton from "./FilterButton";
import businessCard from "@/styles/businesscard.module.scss";
import { BusinessCategories } from "@/data/businessData";
import { firaSans, firaSansSm } from "@/styles/fonts";

interface IFiltersPorps {
    // handleFilterButtonClick: MouseEventHandler
    activeFilter: string,
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function Filters({ activeFilter, setActiveFilter }: IFiltersPorps) {

    const filterButtons: any = [];

    for (const [key, category] of Object.entries(BusinessCategories)) {
		filterButtons.push(
			<FilterButton label={category.name} filterType={key} activeFilter={activeFilter} setActiveFilter={setActiveFilter} key={key} />
		);
	}

    return (
        <div>
            <Image src={"/svg/filter-icon.svg"} height={20} width={20} alt="Filter icon" />
            <p>Filter by category</p>
            <hr />
            <FilterButton label="All Businesses" filterType="default" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            {filterButtons}
        </div>
    );

}