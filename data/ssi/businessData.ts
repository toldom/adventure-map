import { IBusinessCategories, IBusinessListing } from "@/data/types";

export const BusinessCategoryKeys = {
    fnb: "fnb",
    wellness: "wellness",
    accomodations: "accomodations",
    activities: "activities",
    surf: "surf",
    retail: "retail",
}

export const BusinessCategories: IBusinessCategories = {
    [BusinessCategoryKeys.fnb]: {
        key: "fnb",
		name: "Food & Beverage",
		color: "#0A7208"
	},
    [BusinessCategoryKeys.wellness]: {
        key: "wellness",
        name: "Wellness",
        color: "#FA7B04"
    },
    [BusinessCategoryKeys.accomodations]: {
        key: "accomodations",
        name: "Accomodations",
        color: "#EC1C24"
    },
    [BusinessCategoryKeys.activities]: {
        key: "activities",
        name: "Activities",
        color: "#662D91"
    },
    [BusinessCategoryKeys.surf]: {
        key: "surf",
        name: "Surf Companies",
        color: "#027FAE"
    },
    [BusinessCategoryKeys.retail]: {
        key: "retail",
        name: "Retail & Galleries",
        color: "#FFC700"
    },
}

export const BusinessData: IBusinessListing[] = [
    // Accomodations
    {
        name: "Duffin Cove",
        description: "Ocean Front Lodging",
        logo: "/svg/logos/1_duffin_cove.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "215 Campbell St, Salt Spring Island, BC, Canada",
        website: "https://www.duffincove.com",
        phone: "+1(250)-725-3448",
        email: "stay@duffincove.com",
        tier: 2
    },
    {
        name: "Himwitsa Lodge",
        description: "First Nations Owned and Operated for over 25 years",
        logo: "/svg/logos/2_Himwitsa.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "300 Main St., Salt Spring Island, BC, Canada",
        website: "https://www.himwitsalodge.com",
        phone: "+1(250)725-2017",
        email: "Salt Spring Island@himwitsa.com",
        tier: 2
    },
    {
        name: "Ocean Village Resort",
        description: "Beachfront cabins on MacKenzie Beach, indoor swimming pool & hot tub",
        logo: "/svg/logos/5_oceanvillage.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "555 Hellesen Dr., Salt Spring Island, BC, Canada",
        website: "https://www.oceanvillageresort.com",
        phone: "+1(250)725-3755",
        tier: 2
    },
    {
        name: "Mackenzie Beach Resort",
        logo: "/svg/logos/4_MackenzieBeach.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "1101 Pacific Rim Hwy, Salt Spring Island, BC, Canada",
        website: "https://www.duffincove.com",
        phone: "+1(250)725-3439",
        tier: 2
    },
    {
        name: "Pacific Sands Beach Resort",
        logo: "/svg/logos/6_pacificsands.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "1421 Pacific Rim Hwy, Salt Spring Island, BC, Canada",
        website: "https://www.pacificsands.com",
        phone: "+1(250)725-3322",
        email: "stay@duffincove.com",
        tier: 2
    },
    {
        name: "Stay Salt Spring Island",
        description: "We offer a diverse selection of Vacation Rentals. Check us out if you’re looking for that perfect rental while visiting Salt Spring Island",
        logo: "/svg/logos/7_staySalt Spring Island.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "609 Pfeiffer Crescent, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.staySalt Spring Island.com",
        phone: "+17784002650",
        email: "info@staySalt Spring Island.com",
        tier: 2
    },
    {
        name: "Surf Grove Campground",
        description: "Semi - and fully serviced campsites accommodate: tents, vans, RVs, and everything in between. Open year-round for camping, all just a stone's throw away from Cox Bay",
        logo: "/svg/logos/8_surfgrove.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "1451 Pacific Rim Hwy, Salt Spring Island, BC, Canada",
        website: "https://www.surfgrove.com",
        phone: "+1(250)725-2750",
        email: "stay@duffincove.com",
        tier: 2
    },
    {
        name: "Salt Spring Island RESORT + MARINA",
        description: "Inspired by Adventure. Floating Sauna, Remote Kayaking, Bear & Whale Watching, Guided Fishing Trips. Your launchpad for everything Salt Spring Island Adventure.",
        logo: "/svg/logos/9_Salt Spring Islandmarinaresort.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "634 Campbell St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "http://Salt Spring Islandresortandmarina.com/",
        phone: "+ 1(844)-680-4184",
        tier: 0 // TODO: Need to confirm this
    },
    {
        name: "West Coast Hideaway",
        description: "Tranquility in the rainforest next to Canada's greatest surf beach, come stay with us! Check us out on AirBnB and VRBO", // Should we include links out to the AirBNB / VRBO listings?
        logo: "/svg/logos/10_westcoast_hideaway.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "1392 Pacific Rim Hwy, Salt Spring Island, BC, Canada",
        website: "https://www.duffincove.com",
        phone: "+1(604)803-8002",
        email: "westcoasthideaway@gmail.com",
        tier: 2
    },
    {
        name: "Whalers Guesthouse / Salt Spring Island Hostel Hostelling International",
        description: "Beautiful Ocean Views, Downtown Location & Affordable Rates",
        logo: "/svg/logos/11_whalersguesthouse.svg",
        category: BusinessCategoryKeys.accomodations,
        address: "81 West St., Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandhostel.com",
        phone: "+1(250)725-3443",
        tier: 2
    },
    {
        name: "Africa BnB",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    {
        name: "Salt Spring Island Motel",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    {
        name: "Middle Beach Lodge",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    {
        name: "Bella Pacifica",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    {
        name: "Cox Bay Beach Resort",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    {
        name: "Long Beach Lodge Resort",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.accomodations,
        tier: 3
    },
    // Food & Beverage
    {
        name: "Adriana's Sandwich Shop",
        description: "New location is open! Are you in need of sandwiches (breakfast or lunch)? Pizza by the slice? Daily specials?",
        logo: "/svg/logos/12_Adrianas.svg",
        category: BusinessCategoryKeys.fnb,
        address: "#4-131 1st Street, Salt Spring Island, BC, Canada",
        website: "http://adrianas.ca/",
        phone: "+1(250)725-0252",
        instagram: "adrianas.sandwich",
        tier: 2 // TODO: Confirm this
    },
    {
        name: "The Bear Bierhaus Restaurant",
        description: "Come enjoy live sports, fresh oysters, cold beverages and a carefully curated made in house west coast inspired menu.",
        logo: "/svg/logos/33_bear_bierhaus.svg",
        category: BusinessCategoryKeys.fnb,
        address: "Located in The MAQ Hotel, 120 First St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.thebearbierhaus.com",
        phone: "+18006653199",
        email: "restaurant@themaqhotel.com",
        tier: 2 // TODO: Confirm this
    },
    {
        name: "Dockside Smoked Fish Store",
        description: "First Nations owned and operated. Serving only WILD, locally caught, smoked salmon and other quality wild smoked fish products.",
        logo: "/svg/logos/14_dockside.svg",
        category: BusinessCategoryKeys.fnb,
        address: "300 Main St., Salt Spring Island, BC, Canada",
        website: "https://www.himwitsa.com",
        phone: "+1(250)725-2557",
        email: "Salt Spring Island@himwitsa.com",
        tier: 2
    },
    {
        name: "Driftwood Cafe at Wickaninnish Inn",
        logo: "/svg/logos/15_driftwood_cafe.svg",
        category: BusinessCategoryKeys.fnb,
        address: "500 Osprey Lane, Salt Spring Island, BC, Canada",
        website: "https://www.wickinn.com",
        phone: "+1(250)725-3100",
        tier: 2
    },
    {
        name: "Lil' Ronnies Beachside BBQ",
        description: "Outdoor seating and take away available. Outdoor stage and live music. Open 12-9pm seven days a week",
        logo: "/svg/logos/19_Lilronnies_bbq.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1101 BC-4, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.lilronniesbbq.com",
        phone: "+1(647)973-7404", // TODO: Confirm phone number, different on Google Maps
        instagram: "lilronniesbbq_Salt Spring Island",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "The Maq Hotel, Pub and Liquor Store",
        description: "The Maq Hotel, Cold Beer, Wine and Spirits Store, Pub, and Restaurant",
        logo: "/svg/logos/20_Maq.svg",
        category: BusinessCategoryKeys.fnb,
        address: "120 First St., Salt Spring Island, BC, Canada",
        website: "https://www.maquinnahotel.com",
        phone: "+1(250)725-3261",
        tier: 2
    },
    {
        name: "Picnic Charcuterie",
        description: "Salt Spring Island's gourmet delicatessen specializing in house-made traditional cured natural, imported artisan cheeses and local preserves, charcuterie platters and frozen gourmet meals.",
        logo: "/svg/logos/22_picnic.svg",
        category: BusinessCategoryKeys.fnb,
        address: "700 Industrial Way, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.picniccharcuterie.com",
        phone: "+1(250)889-5738",
        email: "picnic.charcuterie@gmail.com",
        tier: 2
    },
    {
        name: "Rhino Coffee House",
        description: "Keep Your Head Down and Your Horn Up",
        logo: "/svg/logos/23_rhino.svg",
        category: BusinessCategoryKeys.fnb,
        address: "430 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.rhinocoffeehouse.com",
        phone: "+1(250)725-2558",
        tier: 2
    },
    {
        name: "ROAR",
        description: "Get cozy around the flames in outlive fire restaurants and bar. Locally-sourced ingredients are the focus of our delicious food and cocktails.",
        logo: "/svg/logos/24_roar.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1258 Pacific Rim Hwy, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.duffincove.com",
        phone: "+1(250)725-7267",
        instagram: "roarSalt Spring Island",
        tier: 1
    },
    {
        name: "Savary Island Pie Company",
        description: "Family-owned bakery serving freshly baked pies, bread and more for over 30 years",
        logo: "/svg/logos/25_savoury_island.svg",
        category: BusinessCategoryKeys.fnb,
        address: "230 Main St, Salt Spring Island, BC, Canada",
        website: "https://www.savaryislandpiecompany.com",
        phone: "+1(250)-725-3448",
        instagram: "savaryislandpieco",
        tier: 2
    },
    {
        name: "Schooner Restaurant",
        description: "Celebrating 70 yrs of the best steak and seafood in town",
        logo: "/svg/logos/26_schooner.svg",
        category: BusinessCategoryKeys.fnb,
        address: "331 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.schoonerrestaurant.ca",
        phone: "+1(250)725-3444",
        tier: 2
    },
    {
        name: "Shed Salt Spring Island",
        description: "Burgers, Bowls and Brews - Shed offers high quality casual dining and heated patio in the heart of downtown Salt Spring Island - Dog friendly patio",
        logo: "/svg/logos/27_shed.svg",
        category: BusinessCategoryKeys.fnb,
        address: "461 Campbell St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.shedSalt Spring Island.com",
        phone: "+1(250) 725-7433",
        instagram: "shedSalt Spring Island",
        tier: 2
    },
    {
        name: "Shelter Restaurant",
        description: "A long-time Salt Spring Island staple • Fresh and local ingredients • Offers a year-round covered patio with inlet views and fireside dining - dog friendly patio section",
        logo: "/svg/logos/28_shelter.svg",
        category: BusinessCategoryKeys.fnb,
        address: "634 Campbell St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.shelterrestaurant.com",
        phone: "+1(250)725-3353",
        instagram: "shelterrestaurant",
        tier: 2
    },
    {
        name: "Surfside",
        description: "Fish & Chips, Tacos. Take-out & Licensed Patio. From our boat to your plate.",
        logo: "/svg/logos/29_surfside.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1421 Pacific Rim Hwy, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.surfsidegrill.ca",
        phone: "+1(250)725-8299",
        facebook: "surfsideSalt Spring Island",
        tier: 2
    },
    {
        name: "Tacofino",
        logo: "/svg/logos/30_tacofino.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1184 Pacific Rim Hwy., Salt Spring Island, BC, Canada",
        website: "https://www.tacofino.com",
        phone: "+1(250)725-8288",
        tier: 2
    },
    {
        name: "The General Store Provisions & Libations",
        description: "Cafe + Kitchen + Wine. Panini Sandwiches, packaged smoked BBQ meats, salads, cheese & charcuterie available for eat in or take away.",
        logo: "/svg/logos/32_thegeneralstore.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1101 Pacific Rim Hwy, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://mackenziebeach.com/dining/",
        phone: "+1(647)973-7404",
        instagram: "generalstoreSalt Spring Island",
        tier: 2
    },
    {
        name: "Salt Spring Island Brewing Company",
        logo: "/svg/logos/34_Salt Spring Island_brewery.svg",
        category: BusinessCategoryKeys.fnb,
        address: "681 Industrial Way, Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandbrewingco.com",
        phone: "+1(250)725-2899",
        tier: 2
    },
    {
        name: "Salt Spring Island Craft Distillery",
        description: "Come experience The Spirit of Salt Spring Island - Try organic, local, premium spirits in the tasting room and take bottles to go.",
        logo: "/svg/logos/36_Salt Spring Island_distillery.svg",
        category: BusinessCategoryKeys.fnb,
        address: "681 Industrial Way - Unit G & H, Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandcraftdistillery.com",
        phone: "+1(250)725-2182",
        tier: 2
    },
    {
        name: "Salt Spring Island Licks",
        description: "Salt Spring Island Licks Organic Ice-cream & Frozen Yogurt - Delicious organic soft serve ice-cream and frozen yogurt topped with Salt Spring Island’s favorite desserts sourced straight from local restaurants!! Open 2-10pm daily.",
        logo: "/svg/logos/37_Salt Spring Island_licks.svg",
        category: BusinessCategoryKeys.fnb,
        address: "511 Campbell St #130, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.tufflicks.com",
        phone: "+1(250)725-3300",
        tier: 2
    },
    {
        name: "Tofitian Cafe & Bakery",
        description: "Est. 2002 - Exceptional Coffee & Espresso, Fine Teas, Fresh Sweet & Savoury Baking Daily. Branded Custom Apparel & Gifts. The Swords With Which We Slay!",
        logo: "/svg/logos/38_tofitian.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1180 Pacific Rim Hwy, Salt Spring Island, British Columbia V0R 2Z0, Canada",
        website: "https://www.tofitian.com",
        phone: "+1(250)-725-3448",
        facebook: "tofitian",
        email: "info@tofitian.com",
        tier: 2
    },
    {
        name: "Salt Spring Island Coffee Roasting Company",
        description: "Take-away coffee shop offering freshly roasted, specialty coffee beverages and in house made pastries.",
        logo: "/svg/logos/35_Salt Spring Island_coffee.svg",
        category: BusinessCategoryKeys.fnb,
        address: "605 Gibson St #112, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "http://www.Salt Spring Islandcoffeeroasting.com/",
        email: "Salt Spring Islandcoffeeroasting@gmail.com",
        instagram: "Salt Spring Islandcoffeeroastingcompany",
        tier: 2
    },
    {
        name: "Tough City Sushi and Inn",
        description: "World famous sushi with a licensed oceanfront patio. 8 boutique style rooms.",
        logo: "/svg/logos/40_sushibar.svg",
        category: BusinessCategoryKeys.fnb,
        address: "350 Main St, Salt Spring Island, BC, Canada",
        website: "https://www.toughcity.com",
        phone: "+1(250)725-2021",
        tier: 2
    },
    {
        name: "Wildside Grill",
        description: "Fresh Fish and Chips * Burgers * Tacos",
        logo: "/svg/logos/41_wildside_grill.svg",
        category: BusinessCategoryKeys.fnb,
        address: "1180 Pacific Rim Hwy., Salt Spring Island, BC, Canada",
        website: "https://www.wildsidegrill.com",
        phone: "+1(250)725-9453",
        tier: 2
    },
    {
        name: "Wolf in the Fog",
        description: "Upstairs in the Cedar Building. Open 9am to late.",
        logo: "/svg/logos/42_wolfinthefog.svg",
        category: BusinessCategoryKeys.fnb,
        address: "150 4th St., Salt Spring Island, BC, Canada",
        website: "https://www.wolfinthefog.com",
        phone: "+1(250)725-9653",
        tier: 1
    },
    // Surf Companies
    {
        name: "Live to Surf",
        description: "Wanna Have Fun? Surfing, Bodyboarding, StandUp Paddleboarding, Ages 1+.",
        logo: "/svg/logos/43_livetosurf.svg",
        category: BusinessCategoryKeys.surf,
        address: "1184 Pacific Rim Hwy., Salt Spring Island, BC, Canada",
        website: "https://www.livetosurf.com",
        phone: "+1(250)725-4464",
        tier: 1
    },
    {
        name: "Long Beach Surf Shop",
        description: "Your friendly neighborhood Surf Shop",
        logo: "/svg/logos/44_lbss.svg",
        category: BusinessCategoryKeys.surf,
        address: "630 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.longbeachsurfshop.com",
        phone: "+1(250)725-3800",
        tier: 2
    },
    {
        name: "Pacific Surf School",
        description: "Surf Lessons, Camps, Rentals. Offering an unforgettable experience since 1998.",
        logo: "/svg/logos/45_pacificsurfschool.svg",
        category: BusinessCategoryKeys.surf,
        address: "#1 - 430 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.pacificsurfschool.com",
        phone: "+1(250)725-2155",
        tier: 1
    },
    {
        name: "Storm Surf Shop",
        description: "Salt Spring Island's feature store for surfboards, wetsuits, skate gear, surf/skate fashion and fun!",
        logo: "/svg/logos/46_storm.svg",
        category: BusinessCategoryKeys.surf,
        address: "444 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.stormcanada.ca",
        phone: "+1(250)725-3344",
        tier: 1
    },
    {
        name: "Surf Sister",
        logo: "/svg/logos/47_surfsister.svg",
        category: BusinessCategoryKeys.surf,
        address: "625 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.surfsister.com",
        phone: "+1(250)725-4456",
        tier: 2
    },
    {
        name: "Salt Spring Island Paddle Surf",
        description: "Beach Location • Rentals • Instruction • Retail",
        logo: "/svg/logos/48_Salt Spring Islandpaddlesurf.svg",
        category: BusinessCategoryKeys.surf,
        address: "1119 Pacific Rim Hwy in Tin Wis Resort, Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandpaddlesurf.com",
        phone: "+1(250)244-6399",
        tier: 1
    },
    {
        name: "Salt Spring Island Surf Adventures",
        description: "We do our teaching in the Water",
        logo: "/svg/logos/49_Salt Spring Island_surf_adventures.svg",
        category: BusinessCategoryKeys.surf,
        address: "450 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandsurfadventures.ca",
        phone: "+1(250)725-3119",
        tier: 2
    },
    // Wellness
    {
        name: "Ancient Cedar Spa at Wickaninnish Inn",
        logo: "/svg/logos/51_ancient_cedar_spa.svg",
        category: BusinessCategoryKeys.wellness,
        address: "500 Osprey Lane, Salt Spring Island, BC, Canada",
        website: "https://www.wickinn.com",
        phone: "+1(250)725-3100",
        tier: 2
    },
    {
        name: "Costal Bliss Yoga",
        description: "Salt Spring Island's Yoga Studio. We offer a variety of daily classes taught by experienced teachers both in person and online. + Private Yoga, Retreats, Teacher Training & More!",
        logo: "/svg/logos/52_costalbliss.svg",
        category: BusinessCategoryKeys.wellness,
        address: "1180 Pacific Rim Hwy, Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandstudio.com/",
        facebook: "coastalblissyoga",
        tier: 2
    },
    {
        name: "Sacred Stone Spa",
        description: "The Ultimate in Relaxation - a full menu of spa services including registered massage therapy, esthetics, couples treatments and private infrared sauna sessions.",
        logo: "/svg/logos/53_sacredspa.svg",
        category: BusinessCategoryKeys.wellness,
        address: "#6-368 Main St., Salt Spring Island, BC, Canada",
        website: "https://www.sacredstone.ca",
        phone: "+1(250)725-3341",
        tier: 2
    },
    // Retail / Galleries
    {
        name: "RUBIO",
        description: "Rubio offers fine quality jewelry. A family business taking great pride in providing superior and elegant designs.",
        logo: "/svg/logos/61_rubio.svg",
        category: BusinessCategoryKeys.retail,
        address: "366 Campbell st. #4, Salt Spring Island, BC, Canada",
        website: "http://www.rubiosilver.com/",
        phone: "+18665078246",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "Two Trees Salt Spring Island",
        description: "Locally owned & operated, Two Trees proudly carries many of Salt Spring Island and Ucluelet’s most popular makers of Candles, Ceramics, Art, Jewlery, Clothing, Home Decor, Self-Care, and Bath & Beauty Products.",
        logo: "/svg/logos/69_twotrees.svg",
        category: BusinessCategoryKeys.retail,
        address: "120 Fourth St Unit 103, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://twotrees.ca/",
        phone: "+1(604)764-1288",
        instagram: "twotreesSalt Spring Island",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "La Pérouse Bank",
        description: "Salt Spring Island's Curated Vintage & Thrift Clothing store, focusing on 90s/00's style. A unique mix of Skate, Home Goods and Independent Clothing brands.",
        logo: "/svg/logos/59_.svg",
        category: BusinessCategoryKeys.retail,
        address: "511 Campbell Street Unit 101, Salt Spring Island, BC, Canada",
        website: "https://www.laperousebank.ca",
        phone: "+1(778)628-7586",
        instagram: "laperousebank",
        email: "laperousebank@gmail.com",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "Daylight Cannabis Co.",
        description: "Salt Spring Island & Ucluelet's Licensed Cannabis Store (19+) serving up all things legal weed and curated accessories 11am-8pm.",
        logo: "/svg/logos/54_daylight_canabis.svg",
        category: BusinessCategoryKeys.retail,
        address: "671 Industrial Way #1, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.daylightcannabis.co",
        phone: "+1(250)266-6970", // TODO: Confirm phone #, different on Google
        instagram: "daylightSalt Spring Island",
        tier: 2
    },
    {
        name: "House of Himwitsa Gallery",
        description: "First Nations owned and operated for over 25 years. The finest collection of Northwest Coast First Nation Art.",
        logo: "/svg/logos/56_himwitsa2.svg",
        category: BusinessCategoryKeys.retail,
        address: "300 Main St, Salt Spring Island, BC, Canada",
        website: "https://www.himwitsa.com",
        phone: "+1(250)725-2017",
        email: "Salt Spring Island@himwitsa.com",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "Jeremy Kereski Gallery",
        description: "Located in the heart of Salt Spring Island on Vancouver Island, we are home to the photographic work of local outdoor photographer Jeremy Koreski.",
        logo: "/svg/logos/57_jeremykoreski.svg",
        category: BusinessCategoryKeys.retail,
        address: "440 Campbell St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.jeremykoreskigallery.com",
        phone: "+1(250)725-0323",
        instagram: "jeremykoreskigallery",
        tier: 2 // TODO: Confirm Tier
    },
    {
        name: "Love Craft",
        description: "Local Fashion, Local Art, Awesome Coffee!",
        logo: "/svg/logos/60_lovecraft.svg",
        category: BusinessCategoryKeys.retail,
        address: "346 Campbell St., Salt Spring Island, BC, Canada",
        phone: "+1(250)725-2886",
        facebook: "localSalt Spring Islandart",
        tier: 2
    },
    {
        name: "Mark Hobson Gallery",
        description: "Mark Hobson's gallery showcases the very best of his artwork. Come view his passionate portrayals of the west coast.",
        logo: "/svg/logos/61_markhobson.svg",
        category: BusinessCategoryKeys.retail,
        address: "366 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://markhobson.com/",
        phone: "+1(800)668-2208",
        facebook: "markhobsonart",
        instagram: "markhobsonart",
        twitter: "MarkHobsonArt",
        tier: 2
    },
    {
        name: "Pharmasave",
        logo: "/svg/logos/62_pharmasave.svg",
        category: BusinessCategoryKeys.retail,
        address: "131 1st St., Salt Spring Island, BC, Canada",
        website: "https://www.epicpharmacy.ca", // TODO: Confirm this is correct, also found https://pharmasave.com/Salt Spring Island/
        phone: "+1(250)725-4949",
        tier: 2
    },
    {
        name: "Roy Henry Vickers Gallery",
        description: "Traditional Northwest Coast Longhouse. Gallery featuring the work of Tsimshian Artist Roy Henry Vickers.",
        logo: "/svg/logos/63_RHV.svg",
        category: BusinessCategoryKeys.retail,
        address: "350 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.royhenryvickers.com",
        phone: "+1(250)725-3235",
        facebook: "royhenryvickersgallery",
        instagram: "royhenryvickersgallery",
        twitter: "eagSalt Spring Island",
        tier: 2
    },
    {
        name: "Salt",
        description: "Canadian made Salt Spring Island Towel Co, Westcoastees, Salt Spring Island Soap Co, and locally made gifts and t-shirts",
        logo: "/svg/logos/65_salt.svg",
        category: BusinessCategoryKeys.retail,
        address: "411 Campbell Street, Salt Spring Island, BC, Canada",
        website: "https://www.saltSalt Spring Island.com",
        phone: "+1(250)-725-3448",
        instagram: "SALTSalt Spring Island",
        tier: 2
    },
    {
        name: "The Treehouse Gift & Clothing",
        description: "Bring in your map for 10% off Salt Spring Island's best T-Shirts!",
        logo: "/svg/logos/67_treehouse.svg",
        category: BusinessCategoryKeys.retail,
        address: "305 Campbell St., Salt Spring Island, BC, Canada",
        // website: "http://treehousegiftsSalt Spring Island.com/",
        phone: "+1(250)725-4254",
        tier: 2
    },
    {
        name: "Salt Spring Island Auto Tow Truck", // TODO: Confirm, should this be "Long beach automotive?"
        description: "Towing.  Boosts.  Lockouts. Recoveries. Service Calls.",
        logo: "/svg/logos/68_Salt Spring Islandauto.svg",
        category: BusinessCategoryKeys.retail,
        address: "#3-671 Industrial Way, Salt Spring Island, BC, Canada",
        website: "https://longbeachautomotive.ca/",
        phone: "+1(866)345-9060",
        tier: 2
    },
    // Activities
    {
        name: "Adventure Salt Spring Island Wildlife Tours",
        logo: "/svg/logos/70_adventureSalt Spring Island.svg",
        category: BusinessCategoryKeys.activities,
        address: "421 Main St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.adventureSalt Spring Island.com",
        phone: "+1(250)725-2895",
        facebook: "AdventureSalt Spring Island",
        instagram: "adventure.Salt Spring Island",
        tier: 2
    },
    {
        name: "Atleo Air",
        description: "Scenic flights and Charters. Experience the remote areas of Vancouver Island!",
        logo: "/svg/logos/71_alteoair.svg",
        category: BusinessCategoryKeys.activities,
        address: "50 Wingen Ln., Salt Spring Island, BC, Canada",
        website: "https://www.atleoair.com",
        phone: "+1(250)725-2205",
        instagram: "atleoair",
        facebook: "AtleoAir",
        tier: 2
    },
    {
        name: "Jamies Whaling Station",
        description: "We are your connection to Whales, Bears & Hot Springs in Salt Spring Island & Ucluelet offering authentic, family-friendly eco-adventures since 1982.",
        logo: "/svg/logos/73_jaimes.svg",
        category: BusinessCategoryKeys.activities,
        address: "606 Campbell Street, Salt Spring Island, BC, Canada",
        website: "http://jamies.com/",
        phone: "+1(250)725-3919",
        instagram: "jamieswhalingstation",
        facebook: "jamieswhalingstation",
        tier: 2 // TODO: Confirm tier
    },
    {
        name: "Ocean Outfitters", // TODO: Confirm this place is still open, reported as permanently closed on Google
        description: "Responsible Carbon Neutral Adventures",
        logo: "/svg/logos/PlaceholderLogo.svg",
        category: BusinessCategoryKeys.activities,
        address: "368 Main St., Salt Spring Island, BC, Canada",
        website: "https://www.oceanoutfitters.bc.ca", // TODO: Verify website, it's expired
        phone: "+1(250)725-2866",
        tier: 1
    },
    {
        name: "Paddle West Kayaking",
        description: "Find our yellow kayak shack in Salt Spring Island & get out there with Paddle West Kayaking. Immerse yourself in the beauty that surrounds you.",
        logo: "/svg/logos/74_paddlewest_kayaking.svg",
        category: BusinessCategoryKeys.activities,
        address: "606 Campbell St, Salt Spring Island, BC, Canada",
        website: "https://www.paddlewestkayaking.com",
        phone: "+1(250)725-3232",
        tier: 1
    },
    {
        name: "Remote Passages Marine Excursions -Whales-Bears-Hotspring",
        description: "Zodiac Touring Since 1986",
        logo: "/svg/logos/75_.svg",
        category: BusinessCategoryKeys.activities,
        address: "51 Wharf St., Salt Spring Island, BC, Canada",
        website: "https://www.remotepassages.com",
        phone: "+1(250)725-3330",
        facebook: "RemotePassagesMarineExcursions",
        twitter: "Salt Spring IslandRemote",
        tier: 1
    },
    {
        name: "Swell",
        description: "Surf + SUP + Bike Rentals. Surf & SUP lessons. 2 Locations: Hotel Zed + Mackenzie Beach Resort. Call, Text or book online.",
        logo: "/svg/logos/76_swell.svg",
        category: BusinessCategoryKeys.activities,
        address: "1258 Pacific Rim Hwy, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.swellSalt Spring Island.com",
        phone: "+1(250)266-3787",
        instagram: "swellSalt Spring Island",
        facebook: "swellSalt Spring Island",
        tier: 1
    },
    {
        name: "The Whale Centre",
        description: "Whales, Bears, Birds, Hot Springs and Great Prices!",
        logo: "/svg/logos/77_thewhale_centre.svg",
        category: BusinessCategoryKeys.activities,
        address: "411 Campbell St., Salt Spring Island, BC, Canada",
        website: "https://www.Salt Spring Islandwhalecentre.com",
        phone: "+1(250)725-2132",
        instagram: "Salt Spring Islandwhalecentre",
        facebook: "Salt Spring Islandwhalecentre",
        tier: 1
    },
    {
        name: "Salt Spring Island Bike Co.",
        description: "Huge selection of beach bikes, path bikes & kids bikes. Tandems, trailers, child seats, surf racks and more. Repairs & sales too! Located next to Live to Surf and Tacofino.",
        logo: "/svg/logos/79_Salt Spring Islandbike.svg",
        category: BusinessCategoryKeys.activities,
        address: "1180 Pacific Rim Hwy, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "http://www.Salt Spring Islandbike.com",
        phone: "+1(250)-266-7655",
        instagram: "Salt Spring Islandbike",
        facebook: "Salt Spring Islandbike",
        tier: 2
    },
    {
        name: "Salt Spring Island Fish Guides",
        description: "Salt Spring Island's Premier Sportfishing Outfitter | Year-round | Saltwater salmon/ bottomfish/ crab/ prawns, Freshwater flyfishing. Experienced anglers and first timers welcome.",
        logo: "/svg/logos/81_.svg",
        category: BusinessCategoryKeys.activities,
        address: "630 Campbell St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://www.Salt Spring Islandfishguides.com",
        phone: "+1(877)537-6444",
        instagram: "Salt Spring Islandfishguides",
        tier: 2
    },
    {
        name: "Salt Spring Island Sea Kayaking",
        description: "Celebrating 30 years - Kayak Tours / Instructions / Expeditions and more. Enjoy an espresso overlooking Clayoquot Sound. Enriching the Salt Spring Island Experience since 1988.",
        logo: "/svg/logos/82_Salt Spring Islandseakayaking.svg",
        category: BusinessCategoryKeys.activities,
        address: "320 Main St, Salt Spring Island, BC V0R 2Z0, Canada",
        website: "https://Salt Spring Islandseakayaking.com/",
        phone: "+1(250)725-4222",
        facebook: "Salt Spring Islandseakayaking",
        instagram: "Salt Spring Islandseakayaking",
        tier: 2
    },
    {
        name: "West Coast Aquatic Safaris",
        description: "Daily Whales, Bears & Hot Springs Adventures. Restrooms Onboard, Wheelchair Accessible, All Ages Welcome. Transport Canada Safety Certified Vessels & Crew.",
        logo: "/svg/logos/83_westcoast_aquatic_safaris.svg",
        category: BusinessCategoryKeys.activities,
        address: "101 4th St., Salt Spring Island, BC, Canada",
        website: "https://www.whalesafaris.com",
        phone: "+1(250)725-9227",
        instagram: "whalesafaris",
        facebook: "whalesafaris",
        twitter: "whalesafaris",
        tier: 2
    },
    // TODO: Tier 3 section, need more info
    // {
    //     name: "Duffin Cove",
    //     description: "Ocean Front Lodging",
    //     logo: "/svg/logos/PlaceholderLogo.svg",
    //     category: BusinessCategoryKeys.accomodations,
    //     address: "215 Campbell St, Salt Spring Island, BC, Canada",
    //     website: "https://www.duffincove.com",
    //     phone: "+1(250)-725-3448",
    //     email: "stay@duffincove.com",
    //     tier: 2
    // },
];