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
    cardContent: ICardData [],
    nearbyBusinessKeys: string [],
    photoURLs: string [],
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
    description: string,
    logo: string,
    category: IBusinessCategory,
    address?: string,
    website?: string,
    phone?: string,
    email?: string,
    facebook?: string,
    instagram?: string,
    twitter?: string,
    tier: number
}