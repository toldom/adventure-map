// Component Props
export interface IBusinessCardProps {
    business: IBusinessListing
}

// Data Object Structures
export interface ICardData {
    title: string,
    content: string,
}

export interface IPageData {
    [key: string]: IBeachData,
}

export interface IBeachData {
    title: string,
    description: string,
    cardContent: ICardData[],
    nearbyBusinessKeys: string[],
    photoURLs: string[],
}

export interface IBusinessCategories {
    [key: string]: {
        key: string,
        name: string,
        color: string
    }
}

export interface IBusinessListing {
    name: string,
    description?: string,
    logo: string,
    category: string,
    address?: string,
    website?: string,
    phone?: string,
    email?: string,
    facebook?: string,
    instagram?: string,
    twitter?: string,
    tier: number,
    mapSide?: string,
    mapChunk?: string,
}

export interface IEnvMetadata {
    name: string,
    logo: string,
    envKey: string,
    includeSurf: boolean,
    includeTrails: boolean,
    includeFAQ: boolean,
    mapSideAName: string,
    mapSideBName: string,
    mapSideADir: string,
    mapSideBDir: string,
}

export interface IConfig {
    envMetadata: IEnvMetadata,
    businessData: IBusinessListing[],
    businessCategories: IBusinessCategories,
    faqData: IPageData,
    trailData: IPageData,
    surfData: IPageData,
}