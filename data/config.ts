import { IConfig } from "./types";

import { envMetadata } from "@/data/ssi/ssiMetadata";
import { BusinessData, BusinessCategories } from "@/data/ssi/businessData";
import { faqData } from "@/data/ssi/faqData";
import { trailData } from "@/data/ssi/trailData";
import { surfData } from "@/data/ssi/surfData";

export const config: IConfig = {
    envMetadata: envMetadata,
    businessData: BusinessData,
    businessCategories: BusinessCategories,
    faqData: faqData,
    trailData: trailData,
    surfData: surfData,
}