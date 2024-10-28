// Filter button component
'use client';

import Image from "next/image";
import styles from "@/styles/directoryPage.module.scss";
import { firaSans, firaSansSm } from "@/styles/fonts";


interface IFilterButtonProps {
    label: string,
    filterType: string,
    activeFilter: string,
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterButton({ label, filterType, activeFilter, setActiveFilter }: IFilterButtonProps) {

    function handleFilterButtonClick() {
        if (filterType !== activeFilter) {
            setActiveFilter(filterType);
        }
    }

    // Logic to handle displaying the active filter
    let buttonClassNames = `${styles["buttonObscureLayer"]}`

    if (activeFilter === filterType) {
        buttonClassNames += "activeFilterButton";
    }

    // Logic to handle if filter has an icon
    let iconSource = (filterType !== "default") ? "/svg/filter-icons/filter-" + filterType + ".svg" : undefined;

    return (
        <div className={buttonClassNames} id={`${filterType}-filter`}>
            <button className={`${styles.filterButton} ${firaSans.className}`} onClick={handleFilterButtonClick}>
                <div style={{display:"flex",  justifyContent:"center", alignItems: "center"}}>
                    {(iconSource !== undefined) &&
                        <Image style={{paddingRight:"5px"}} src={iconSource} height={25} width={25} alt="" />
                    }
                    <p>{label}</p>
                </div>
            </button>
        </div>
    );

}