// Filter button component
'use client';

import React, { act, MouseEventHandler, useState } from "react";
import Image from "next/image";
import FilterButton from "./FilterButton";
import { BusinessCategories } from "@/data/businessData";
import directoryPage from "@/styles/directoryPage.module.scss";
import { firaSans, firaSansSm } from "@/styles/fonts";

interface IFiltersPorps {
    activeFilter: string,
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function Filters({ activeFilter, setActiveFilter }: IFiltersPorps) {

    const filterButtons: React.JSX.Element[] = [];
    const filterSelectOptions: React.JSX.Element[] = [];

    function handleSelectOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let activeFilterSelection = event.target?.value;
        setActiveFilter(activeFilterSelection);
    }

    for (const [key, category] of Object.entries(BusinessCategories)) {
		filterButtons.push(
			<FilterButton label={category.name} filterType={key} activeFilter={activeFilter} setActiveFilter={setActiveFilter} key={key} />
		);

        filterSelectOptions.push(
            <option value={key} key={key}>{category.name}</option>
        );
	}

    return (
        <div>
            <div className={directoryPage.desktopFilters}>
                <div style={{display:"flex", gap:5, paddingBottom:5, paddingLeft:10}}>
                    <Image src={"/svg/filter-icon.svg"} height={20} width={20} alt="Filter icon" />
                    <p className={firaSansSm.className}>Filter by category</p>
                </div>
                <hr />
                <FilterButton label="All Businesses" filterType="default" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                {filterButtons}
            </div>
            <select name="mobileFilters" className={`${directoryPage.mobileFiltersSelect} ${firaSans.className}`} id="mobileFilters" value={activeFilter} onChange={handleSelectOnChange}>
                <option value="default" key="default">All Businesses</option>
                {filterSelectOptions}
            </select>
        </div>
    );

}