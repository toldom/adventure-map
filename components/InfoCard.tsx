// Info Card component

import infoCard from "@/styles/infocard.module.scss";
import { firaSans, firaSansSm } from "@/styles/fonts";

interface InfoCardProps {
    title: string,
    content: string,
}

export default function InfoCard(props: InfoCardProps) {

    const { title, content } = props;

    // If either of the given props are undefined, do not render the element
    if (title === undefined || content === undefined) { return; }

    return (
        <div className={infoCard.main}>
            <h1 className={firaSans.className}>{title}</h1>
            <p className={firaSansSm.className}>{content}</p>
        </div>
    );
}