// Header component

import Image from "next/image";
import Link from "next/link";
import header from "@/styles/header.module.scss";
import { config } from "@/data/config";

import { firaSans, firaSansSm, dancingScript } from "@/styles/fonts";

interface HeaderProps {
    mainLine?: string,
    subLine?: string,
    hasSearch?: boolean
}

const envMetadata = config.envMetadata;

export default function Header(props: HeaderProps) {

    const { mainLine, subLine, hasSearch = false } = props;

    return (
        <div className={ header.main }>
            <div className={ header.navRow } >
                <Link href={"/"}>
                    <Image src={envMetadata.logo} className={ header.tamLogo } alt="Tofino Adventure Map Logo" width="90" height="132" />
                </Link>
                { (hasSearch) && 
                    <input className={ firaSansSm.className } type="text" placeholder="Search by business or keyword" />
                }
                <div className={ header.navBar }>
                    <Link className={ `${header.navLink} ${firaSansSm.className}` } href={"/town-map"} >{ envMetadata.mapSideAName.toUpperCase() } MAP</Link>
                    <Link className={ `${header.navLink} ${firaSansSm.className}` } href={"/parks-map"} >{ envMetadata.mapSideBName.toUpperCase() } MAP</Link>
                    <Link className={ `${header.navLink} ${firaSansSm.className}` } href={"/directory"} >BUSINESS DIRECTORY</Link>
                    <Link className={ `${header.navLink} ${firaSansSm.className}` } href={"/faq"} >FAQ</Link>
                </div>
            </div>
            {/* Display title area only if the component has been given content */}
            { (mainLine !== undefined && subLine !== undefined) &&
                <div className={ header.titleRow }>
                    <h1 className={ firaSans.className }>{mainLine}</h1>
                    <h2  className={ `${dancingScript.className}` }>{subLine}</h2>
                </div>
            }
        </div>
    );
}