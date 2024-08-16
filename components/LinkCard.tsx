// Link Card component

import Link from "next/link";
import linkCard from "@/styles/linkcard.module.scss";
import { firaSansSm } from "@/styles/fonts";

export default function LinkCard() {

    return (
        <div className={linkCard.main}>
            <span className={firaSansSm.className}>For more local listings, visit <Link href={"/parks-map"}>Parks Map Page.</Link></span>
            <span className={firaSansSm.className}>If you're looking for something specific, try the <Link href={"/directory"}>Discover Page</Link> where you can search by business or browse by category.</span>
        </div>
    );
}