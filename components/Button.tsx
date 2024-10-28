// Button component

import button from "@/styles/button.module.scss";
import Link from "next/link";
import Image from "next/image";
import { firaSans } from "@/styles/fonts";

interface ButtonProps {
    label?: string,
    type?: string,
    link?: string,
    glyph?: string,
}

export default function Button(props: ButtonProps) {

    const { label = "", type = "primary", link = "#", glyph} = props;

    let style = button.primary;

    switch (type) {
        case "secondary":
            style = button.secondary;
            break;
        case "tertiary":
            style = button.tertiary;
            break;
        case "quad":
            style = button.quad;
    }

    return (
        <Link href={link}>
            <button className={`${style} ${firaSans.className}`}>
                <div className={button.buttonContents}>
                    {(glyph) && 
                        <Image className={button.glyph} src={`/svg/${glyph}.svg`} alt="Tofino Adventure Map Logo" width="40" height="40" />
                    }
                    <p>{label}</p>
                </div>
            </button>
        </Link>
    );
}