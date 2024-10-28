// Info Card component
import Image from "next/image";
import businessCard from "@/styles/businesscard.module.scss";
import { IBusinessCardProps } from "@/data/types";
import { firaSans, firaSansSm } from "@/styles/fonts";
import { BusinessCategories } from "@/data/businessData";

export default function BusinessCard(props: IBusinessCardProps) {

    const business = props.business;
    const categoryData = BusinessCategories[business.category]


    return (
        <div className={businessCard.cardBody}>
            
            <div>
                <Image style={{backgroundColor:"#87B9C4", borderRadius:14}} src={business.logo} height={"180"} width={"180"} alt={"Logo for " + business.name} />
            </div>

            <div className={businessCard.innerContainer}>
                <div>
                    <div className={businessCard.tag} style={{backgroundColor: categoryData.color}}>
                        <p className={firaSansSm.className}>{categoryData.name}</p>
                    </div>
                    <h1 className={firaSans.className}>{business.name}</h1>
                    {(business.description !== undefined) &&
                        <p className={firaSansSm.className}><em>{business.description}</em></p>
                    }
                </div>

                {(  business.website !== undefined ||
                    business.address !== undefined ||
                    business.facebook !== undefined || 
                    business.instagram !== undefined || 
                    business.twitter !== undefined
                ) && 
                    <div style={{paddingTop: 20}}>
                        {(business.website !== undefined) &&
                            <a href={business.website} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.websiteButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={businessCard.glyph} src={"/svg/Globe.svg"} height={17.5} width={17.5} alt="Internet Globe Icon" />
                                        <p>Website</p>
                                    </div>
                                </button>
                            </a>
                        }
                        {(business.address !== undefined) &&
                            <a href={"https://maps.google.com/?daddr=" + business.address} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.directionsButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={businessCard.glyph} src={"/svg/DirectionSign.svg"} height={17.5} width={17.5} alt="Directions Arrow Icon" />
                                        <p>Directions</p>
                                    </div>
                                </button>
                            </a>
                        }
                        {(business.phone !== undefined) &&
                            <a href={"tel:" + business.phone} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.phoneCallButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={`${businessCard.glyph} ${businessCard.filterWhite}`} src={"/svg/phone-solid.svg"} height={17.5} width={17.5} alt="Phone Call Icon" />
                                        <p>Call</p>
                                    </div>
                                </button>
                            </a>
                        }
                        {(business.instagram !== undefined) &&
                            <a href={"https://instagram.com/" + business.instagram} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.instagramButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={businessCard.glyph} src={"/svg/Instagram_Glyph_White.svg"} height={17.5} width={17.5} alt="Instagram Logo" />
                                        {/* <p>Instagram</p> */}
                                    </div>
                                </button>
                            </a>
                        }
                        {(business.facebook !== undefined) &&
                            <a href={"https://facebook.com/" + business.facebook} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.facebookButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={businessCard.glyph} src={"/img/Facebook_Logo_Secondary.png"} height={17.5} width={17.5} alt="Facebook Logo" />
                                        {/* <p>Facebook</p> */}
                                    </div>
                                </button>
                            </a>
                        }
                        {(business.twitter !== undefined) &&
                            <a href={"https://x.com/" + business.twitter} rel="noreferrer" target="_blank">
                                <button className={`${businessCard.twitterButton} ${firaSans.className}`}>
                                    <div className={businessCard.buttonContents}>
                                        <Image className={businessCard.glyph} src={"/img/x-twitter-logo-white.png"} height={17.5} width={17.5} alt="Facebook Logo" />
                                        {/* <p>X (formerly known as Twitter)</p> */}
                                    </div>
                                </button>
                            </a>
                        }
                    </div>
                }
            </div>
        </div>
    );
}