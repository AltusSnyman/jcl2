export interface LocationData {
    slug: string;
    name: string;
    shortName: string;
    region: string;
    heroImage: string;
    heroAlt: string;
    accentColor: string;
    tagline: string;
    introParagraph1: string;
    introParagraph2: string;
    localChallenges: { title: string; body: string }[];
    servicesHighlights: { service: string; localNote: string; href: string }[];
    landmarks: string[];
    neighborhoods: string[];
    weatherNote: string;
    soilNote: string;
    distanceFromAuckland: string;
    faq: { q: string; a: string }[];
}

export const locations: LocationData[] = [
    {
        slug: "kaukapakapa",
        name: "Kaukapakapa",
        shortName: "Kaukapakapa",
        region: "Rodney District",
        heroImage: "/images/locations/kaukapakapa.webp",
        heroAlt: "Aerial view of Kaukapakapa rural landscape with red clay farm tracks and Kaipara Harbour estuary",
        accentColor: "text-jcl-limeAccent",
        tagline: "Landscaping on the Doorstep of Kaipara",
        introParagraph1: "Kaukapakapa sits at the southern edge of the Kaipara Harbour — one of the most expansive and ecologically rich estuaries in the Southern Hemisphere. The community here is a mix of long-established farming families and newer lifestyle block owners, many of whom have moved from Auckland in search of space, privacy, and the kind of property you can actually do something with. JCL Projects was built in this community. Justin has been working the land around Kaukapakapa since the business began, and this area represents the heartland of our service work.",
        introParagraph2: "Landscaping around the Kaipara has its own set of requirements. Properties tend to be on clay-dominant soils that retain water, on undulating terrain that slopes toward the harbour catchment, and exposed to the prevailing southwest and northwesterly winds that come off the Kaipara plain. Getting drainage, earthworks, and retaining right from the start means the difference between a property that functions beautifully year-round versus one that turns to mud every winter and has ongoing erosion issues. JCL Projects understands the local conditions here at a level that only comes from working this terrain daily.",
        localChallenges: [
            { title: "Red Clay Soils & Drainage", body: "The red Northland clay soils common throughout Kaukapakapa are notoriously slow-draining. After heavy rain — common in winter months with the westerly weather patterns off the Tasman — water sits on the surface for days. Any driveway, platform, or garden design needs to plan for this from the outset. JCL Projects integrates sub-soil drainage, correctly graded surfaces, and culverts into every project to manage this effectively." },
            { title: "Kaipara Wind Exposure", body: "Properties facing northwest across the Kaipara plain get the full force of prevailing westerlies. This affects planting choices (wind-tolerant natives over ornamental species), site planning (positioning sheds and entertaining areas on sheltered aspects), and the design of any fencing, which needs to be braced for sustained wind loading." },
            { title: "Rural Road Access & Heavy Machinery", body: "Getting machinery to Kaukapakapa properties requires navigating narrow public roads, low-clearance bridges, and sometimes steep access tracks. JCL Projects maintains equipment sized and configured for rural Rodney access — and Justin knows the local road network intimately from years of daily travel." },
        ],
        servicesHighlights: [
            { service: "Retaining Walls", localNote: "Sloped sites toward the Kaipara catchment are extremely common — well-drained retaining is critical.", href: "/services" },
            { service: "Driveway Construction", localNote: "Long rural driveways on red clay need proper base preparation to survive wet winters.", href: "/services" },
            { service: "Custom Pole Sheds", localNote: "Lifestyle block owners throughout Kaukapakapa rely on us for well-positioned rural sheds.", href: "/services" },
            { service: "Bulk Earthworks", localNote: "Site preparation for new builds on undulating terrain — this is core work in the area.", href: "/services" },
            { service: "Rural Fencing", localNote: "Post and rail for boundary and paddock division is in constant demand around Kaukapakapa.", href: "/services" },
        ],
        landmarks: ["Kaipara Harbour foreshore", "Kaukapakapa Hall", "Hoteo River flats", "Makarau settlement", "SH16 at Taupaki", "Kaukapakapa School"],
        neighborhoods: ["Kaukapakapa township", "Makarau", "Hoteo North", "Kaipara Flats", "Taupaki", "Shelly Beach Road properties", "Harbour View lifestyle blocks", "Woodhill", "Wayby Valley", "Glorit"],
        weatherNote: "Kaukapakapa receives 1,200–1,400mm of rainfall annually, with significant winter wet periods. The Kaipara Harbour's proximity moderates temperatures but increases humidity and wind exposure on western-facing blocks.",
        soilNote: "Predominantly Northland red clay and heavy silt loam. Very slow drainage on flat areas. Requires positive drainage solutions on every project — no exceptions.",
        distanceFromAuckland: "55km northwest of Auckland CBD via SH16",
        faq: [
            { q: "Does JCL Projects work in Kaukapakapa?", a: "Yes — Kaukapakapa is in the heart of our service area. Justin lives and works in the Rodney district and has completed projects throughout the area." },
            { q: "How do you handle the clay soil conditions in Kaukapakapa?", a: "We integrate sub-surface drainage into every project — perforated drain pipes behind retaining walls, correctly graded driveways, and culverts at low points in the landscape. No project leaves without a plan for managing the wet season." },
            { q: "How far in advance do I need to book?", a: "Typically 4–8 weeks for a site consultation and quote. Major project start dates depend on current workload. Contact us to discuss your timeline." },
            { q: "Do retaining walls near Kaukapakapa require building consent?", a: "Timber retaining walls up to 1.5m in height generally do not require a building consent under the Auckland Unitary Plan — but site-specific factors such as proximity to boundaries and drainage onto neighbouring properties can change this. JCL Projects will advise during your site consultation." },
            { q: "What does a driveway typically cost in the Kaukapakapa area?", a: "Driveway costs vary widely depending on length, access conditions, and required preparation. A standard rural driveway in the Kaukapakapa area starts from around $8,000 for a short run and can exceed $60,000 for a long rural access track requiring significant earthworks and culverts. Call Justin for an on-site assessment and accurate quote." },
        ],
    },
    {
        slug: "helensville",
        name: "Helensville",
        shortName: "Helensville",
        region: "Rodney District",
        heroImage: "/images/locations/helensville.webp",
        heroAlt: "Rural farmland and lifestyle blocks surrounding Helensville township, New Zealand",
        accentColor: "text-jcl-limeAccent",
        tagline: "Landscaping for the Kaipara Gateway Town",
        introParagraph1: "Helensville is the commercial centre of the northern Rodney district — a small town with deep rural roots, sitting at the head of the Kaipara Harbour where the Northern Wairoa River meets the tidal flats. It's the hub town for a wide network of surrounding rural communities extending out to the Makarau, Glorit, Shelly Beach, South Head, and Kaipara Flats areas. Many of JCL Projects' most complex and rewarding builds are on properties within a 20-minute drive of Helensville, on the varied terrain that characterises this part of Auckland's regional boundary.",
        introParagraph2: "Properties around Helensville include everything from flat river-valley lifestyle blocks — where drainage is the primary challenge — to steep hill country blocks on the ranges east and north of town, where earthworks, retaining, and access track construction are the focus. Justin's understanding of this terrain, the local contractor network, and the specific council requirements that apply to the Kaipara coastal zone means JCL Projects can navigate these projects seamlessly.",
        localChallenges: [
            { title: "River Flats & Flood Risk", body: "Low-lying properties near the Northern Wairoa River and Kaipara Harbour foreshore are subject to periodic flooding and high water tables. Landscaping on these sites requires correct slab heights for sheds and structures, raised garden beds, positive drainage away from all structures, and sometimes engineered culverts for stormwater management." },
            { title: "Hill Country Earthworks", body: "The ranges east and north of Helensville present the opposite challenge — steep, erosion-prone slopes in weathered clay where major earthworks require careful cut-and-fill planning, erosion control during construction, and proper revegetation of disturbed areas post-completion." },
            { title: "Heritage Building Considerations", body: "Helensville has a notable heritage building stock — the railway station, several historic commercial buildings, and residential cottages. Properties near or containing heritage elements sometimes have additional consenting considerations for earthworks and structural retaining. JCL Projects works with owners to navigate these requirements." },
        ],
        servicesHighlights: [
            { service: "Earthworks & Site Preparation", localNote: "Hill country and river flat earthworks are a specialty around Helensville — very different challenges on the same town's doorstep.", href: "/services" },
            { service: "Retaining Walls & Terracing", localNote: "Steep blocks east of town need well-engineered retaining with drainage — we do this regularly.", href: "/services" },
            { service: "Driveway & Access Tracks", localNote: "Long rural driveways connecting to the SH16 network or local Rodney roads are a core offering.", href: "/services" },
            { service: "Rural Fencing", localNote: "Paddock subdivision and boundary fencing throughout the Helensville rural catchment.", href: "/services" },
            { service: "Custom Pole Sheds", localNote: "Well-positioned, properly platformed sheds for lifestyle and rural properties.", href: "/services" },
        ],
        landmarks: ["Northern Wairoa River", "Kaipara Harbour", "Helensville Railway Station", "SH16 Helensville junction", "Helensville Golf Club", "Parakai Hot Springs"],
        neighborhoods: ["Helensville township", "Parakai", "Shelly Beach", "South Head", "Port Albert", "Glorit", "Kaipara Flats", "Hatfields Beach Road", "Parkhurst", "Wharehine"],
        weatherNote: "Helensville averages 1,300mm of annual rainfall with distinct wet winters. The Kaipara Harbour influences local humidity and creates mild temperature extremes, but significant rainfall events bring genuine flood risk to low-lying areas.",
        soilNote: "Mixed — clay loam on hillsides, silt and alluvial soils on river flats. River flat sites have high water tables and limited drainage capacity; hillsides are erosion-prone during earthworks.",
        distanceFromAuckland: "48km northwest of Auckland CBD via SH16",
        faq: [
            { q: "Does JCL Projects cover Helensville and surrounding areas?", a: "Yes — Helensville is one of our primary service areas. We do regular project work throughout the Helensville rural catchment and the surrounding communities of Parakai, Shelly Beach, South Head, and Glorit." },
            { q: "Can you work on both hill country and river flat properties near Helensville?", a: "Absolutely. We regularly work on both — steep hill country earthworks and retaining east of town, and drainage-focused landscaping on the river flat and harbour-edge properties. The challenges are different but both are well within our expertise." },
            { q: "How does council consent work for landscaping near the Kaipara coastal zone?", a: "Properties in the Kaipara coastal environment zone may have additional Auckland Unitary Plan requirements for earthworks and vegetation clearance. JCL Projects can advise on consent triggers and work with owners through the process." },
            { q: "Can you help with drainage issues on a low-lying Helensville property?", a: "Yes — drainage is one of our core specialities on river flat and low-lying harbour-edge properties near Helensville. We design and install sub-surface drainage, swales, culverts, and correctly graded surfaces to manage water in wet season conditions." },
            { q: "What services does JCL Projects provide in Helensville?", a: "We provide earthworks, retaining walls, driveway construction, rural fencing, and custom pole shed builds throughout the Helensville area. On-site consultations are free. Call Justin on 021 327 729 to discuss your project." },
        ],
    },
    {
        slug: "wainui",
        name: "Wainui",
        shortName: "Wainui",
        region: "Auckland North West",
        heroImage: "/images/locations/wainui.webp",
        heroAlt: "Rolling green hills and retaining terraces on a Wainui lifestyle block, Auckland North West",
        accentColor: "text-jcl-limeAccent",
        tagline: "Rural Landscaping at Auckland's Northwest Fringe",
        introParagraph1: "Wainui occupies a fascinating position — technically within the Auckland Council boundary, close enough to the city for an easy commute, but far enough out that properties retain genuine rural character. Development pressure in this area is significant; many blocks that were large rural holdings a decade ago are now being subdivided into lifestyle lot precincts, and each new build calls for landscaping that connects the house to its site in a coherent, functional way. JCL Projects is the local specialist for this transition zone, where urban expectations meet rural reality.",
        introParagraph2: "The terrain around Wainui is characterised by moderately steep rolling country, with the properties on the northern side of the area dropping toward the Kaipara catchment and those on the southern and eastern sides facing toward Dairy Flat and the upper Rodney corridor. Soil types, drainage profiles, and wind exposure vary across the area, which is exactly why local experience matters so much — a template approach to landscaping doesn't work when site conditions shift this much within a few kilometres.",
        localChallenges: [
            { title: "New Subdivision Landscaping", body: "Wainui has seen significant lifestyle block subdivision development in recent years. New build sites are often on bare, compacted post-construction ground that needs total landscaping from scratch — drainage infrastructure, driveway construction, platform creation, retaining, and planting — all coordinated as a single project." },
            { title: "Urban-Rural Interface Requirements", body: "Being near the urban growth boundary means that Wainui properties may have different consenting requirements for vegetation clearance and earthworks than more remote rural areas. JCL Projects understands the Auckland Unitary Plan provisions that apply to this zone and can advise on what requires resource consent." },
            { title: "Slope Management", body: "Rolling to moderately steep terrain is the norm in Wainui. Retaining walls, cut and fill earthworks, and correct stormwater management are standard requirements on most builds — not optional extras." },
        ],
        servicesHighlights: [
            { service: "New Build Landscaping Packages", localNote: "Complete landscaping from bare ground for new lifestyle block builds throughout Wainui.", href: "/landscaping" },
            { service: "Retaining Walls", localNote: "Sloped properties throughout Wainui require well-engineered retaining from the outset.", href: "/services" },
            { service: "Driveway Construction", localNote: "Quality driveway builds connecting to the Wainui Road and local road network.", href: "/services" },
            { service: "Rural Fencing", localNote: "Garden zone exclusion fencing, post and rail, and paddock subdivision.", href: "/services" },
            { service: "Custom Pole Sheds", localNote: "Rural sheds for lifestyle block storage, workshop, and garaging needs.", href: "/services" },
        ],
        landmarks: ["Wainui Road", "Silverdale fringe", "Upper Kaipara catchment", "Rodney/Auckland boundary", "Dairy Flat corridor"],
        neighborhoods: ["Wainui", "Wainui Road properties", "Upper Waitoki Road", "Dairy Flat fringe", "Silverdale North", "Coatesville North", "Ahuroa Road", "Glorit outskirts", "Kaipara Ridge properties"],
        weatherNote: "Wainui sits in a transitional weather zone between the more exposed Kaipara plain to the north and the more sheltered Rodney valley country. Rainfall is 1,000–1,200mm annually, with wet winters and dry summer periods that can create irrigation demand for newly established plants.",
        soilNote: "Clay-based subsoils throughout, with varying topsoil depth on post-construction sites. Many new build sites have had topsoil stripped — importing quality topsoil for lawn and garden establishment is often necessary.",
        distanceFromAuckland: "38km northwest of Auckland CBD via SH1 / Silverdale",
        faq: [
            { q: "Do you work in Wainui?", a: "Yes — Wainui is within our regular service area. We complete projects throughout the Wainui, Dairy Flat, and Silverdale North areas regularly." },
            { q: "My property is a new lifestyle block build with bare ground — can you help?", a: "This is exactly our specialty. We can take a new build site from bare post-construction ground to a fully landscaped property — driveway, platforms, retaining, fencing, lawn, and plantings — as a complete project." },
            { q: "What's the process for getting a quote in Wainui?", a: "Contact us via our quote page or phone, and we'll arrange a free on-site consultation. Justin visits every site personally before quoting." },
            { q: "Do you need resource consent for earthworks in Wainui near the urban growth boundary?", a: "Possibly. Properties near the Auckland urban growth boundary may have Auckland Unitary Plan earthworks provisions that require consent for significant cut and fill. JCL Projects will identify consent requirements during the site assessment and advise accordingly." },
            { q: "Can you build retaining walls on a sloped Wainui section?", a: "Yes — retaining walls on sloped Wainui lifestyle blocks are a regular project type for us. We assess wall height, soil conditions, and drainage requirements on site and specify the correct material and design for your situation." },
        ],
    },
    {
        slug: "waitoki",
        name: "Waitoki",
        shortName: "Waitoki",
        region: "Rodney District",
        heroImage: "/images/locations/waitoki.webp",
        heroAlt: "Bulk earthworks and retaining on a sloped Waitoki rural property, Rodney district NZ",
        accentColor: "text-jcl-limeAccent",
        tagline: "Hill Country Landscaping in the Waitoki Ranges",
        introParagraph1: "Waitoki sits in some of the most dramatic rural terrain in the greater Auckland region — the rolling to steep hill country that forms the backbone of the Rodney district between the Kaipara coastal plain and the more sheltered valleys to the east. Properties here tend to be larger, more remote, and more challenging to develop than the typical lifestyle block closer to Auckland. The rewards are proportional: the views, the space, and the genuine rural character of Waitoki properties are things that money simply cannot recreate closer to the city.",
        introParagraph2: "The landscaping challenges in Waitoki are primarily driven by topography and soil type. Steep clay slopes, limited access for heavy machinery during wet conditions, and the need to create functional, level platforms for buildings and sheds on country that rarely offers them naturally — these are the conditions JCL Projects specialises in. If you're developing a Waitoki property, you need a contractor who has the equipment, experience, and local knowledge to make it work.",
        localChallenges: [
            { title: "Steep Terrain & Access", body: "Getting machinery to remote Waitoki properties requires careful planning. Narrow roads, weight-restricted bridges, and steep access tracks mean that equipment selection, timing with dry weather windows, and route planning are all critical. JCL Projects has the right-sized equipment for this terrain and knows the local road network." },
            { title: "Erosion Control During Earthworks", body: "On steep clay slopes, earthworks can quickly create serious erosion risk if not managed correctly. JCL Projects installs erosion control measures — geofabric silt fences, sediment traps, and temporary revegetation — during construction, and designs finished earthworks to minimise ongoing erosion exposure." },
            { title: "Isolation & Weather Windows", body: "Waitoki properties can be isolated during extended wet periods when roads become impassable for heavy trucks. Project planning needs to account for weather windows, particularly for driveway construction and major earthworks that need dry conditions for compaction." },
        ],
        servicesHighlights: [
            { service: "Bulk Earthworks", localNote: "Creating level platforms on steep hill country — this is our signature project type in Waitoki.", href: "/services" },
            { service: "Retaining Walls", localNote: "Large-scale retaining on challenging slopes, including timber post walls up to 1.5m and engineered options for taller.", href: "/services" },
            { service: "Rural Fencing", localNote: "Boundary and paddock fencing in hill country terrain requires ground anchoring and bracing suited to the slopes.", href: "/services" },
            { service: "Access Tracks", localNote: "All-weather farm tracks that hold up through wet winters — essential infrastructure for any Waitoki property.", href: "/services" },
            { service: "Custom Pole Sheds", localNote: "Shed platforms created by earthworks on level ground — we design the platform and the shed as one scope.", href: "/services" },
        ],
        landmarks: ["Waitoki Range", "Kaipara Harbour upper catchment", "Hoteo River headwaters", "Glorit-Wayby Valley road", "Kaukapakapa eastern ranges"],
        neighborhoods: ["Waitoki", "Wayby Valley", "Hoteo North", "Makarau upper reaches", "Glorit hill country", "Kaipara Heights", "Wharau Road properties", "Eastern Rodney hill stations"],
        weatherNote: "Waitoki is one of the wetter parts of the Rodney district, with the ranges intercepting moisture-laden westerly air masses. Annual rainfall can exceed 1,500mm on exposed ridgelines. Winters bring extended wet periods with limited trafficable days for earthworks.",
        soilNote: "Steep clay and indurated clay subsoils. Very slow drainage, significant slip risk on steep slopes above 20°. All earthworks require careful staging and erosion control management.",
        distanceFromAuckland: "65km northwest of Auckland CBD",
        faq: [
            { q: "Does JCL Projects work in Waitoki and the surrounding hill country?", a: "Yes — hill country work in the Waitoki, Hoteo, and Makarau areas is a core part of our service offering. Justin has extensive experience with steep terrain earthworks and retaining in this area." },
            { q: "How do you manage earthworks on steep Waitoki properties?", a: "Carefully. We plan earthworks in stages timed around dry weather windows, install erosion control measures during construction, and design finished platforms with engineered drainage. We match equipment size to site access and terrain." },
            { q: "Can you build a shed platform on a steep section?", a: "Yes — creating level shed platforms by cut and fill or fill with compaction on steep Waitoki sites is something we do regularly. The earthworks and shed can be scoped as one combined project." },
            { q: "How do you get machinery to remote Waitoki properties?", a: "JCL Projects operates equipment sized for rural Rodney access — Justin knows the local road network and weight-limited bridges intimately. We plan machinery movements around dry weather windows and, where access is very tight, select smaller equipment that can still complete the work effectively." },
            { q: "Do retaining walls in Waitoki require building consent?", a: "Retaining walls under 1.5m in height generally do not require a building consent. On steep Waitoki sites where walls need to be taller or are close to property boundaries or structures, a consent may be required. JCL Projects can advise on this during the on-site assessment." },
        ],
    },
    {
        slug: "kumeu",
        name: "Kumeu",
        shortName: "Kumeu",
        region: "Auckland North West",
        heroImage: "/images/locations/kumeu.webp",
        heroAlt: "Rural driveway and landscaped lifestyle block in Kumeu, North West Auckland",
        accentColor: "text-jcl-limeAccent",
        tagline: "Premium Landscaping in the Kumeu Wine & Lifestyle Corridor",
        introParagraph1: "Kumeu has transformed over the past two decades from a quiet rural service town into one of Auckland's most sought-after lifestyle destinations. The combination of world-class wineries, excellent access via the Northwestern Motorway, and the availability of lifestyle blocks within 35 minutes of the CBD has made it a magnet for professional Auckland families seeking rural space without sacrificing urban convenience. The properties here reflect this — expectations are high, aesthetics matter, and the landscaping needs to match the quality of the build.",
        introParagraph2: "JCL Projects works throughout the Kumeu corridor, delivering landscaping that complements the premium property market in the area. Whether it's a grand driveway entranceway to match a high-spec new build, a professionally terraced and planted garden on a sloped lifestyle block, or a custom shed complex for a serious equestrian or agricultural operation, the standard of work needs to reflect the quality of the properties we're working on. Justin takes personal pride in every project, and the Kumeu market is one where that shows.",
        localChallenges: [
            { title: "Premium Aesthetics & Quality Expectations", body: "Kumeu property owners expect craftsmanship and attention to detail. Driveways need to look as good as they function. Retaining walls need to be level, plumb, and finished. Planting needs to be species-appropriate and expertly placed. JCL Projects brings the same level of care to Kumeu projects that the local property market demands." },
            { title: "Vineyard & Orchard Adjacent Properties", body: "Many Kumeu lifestyle blocks border or are adjacent to vineyard and orchard operations. This creates both opportunity — the landscape aesthetic of the area is exceptional — and practical considerations around drift from agrichemical applications, which requires thoughtful planting placement and windbreak design." },
            { title: "Traffic & Access During Construction", body: "Kumeu Road and the surrounding arterials carry significant traffic. Coordinating machinery movements, material deliveries, and site access on busy roads requires careful logistics planning, particularly for major earthworks projects." },
        ],
        servicesHighlights: [
            { service: "Grand Driveway Entranceways", localNote: "Premium driveway builds with pillars, post-and-rail, and native plantings — the Kumeu market demands the best.", href: "/services" },
            { service: "Retaining & Terracing", localNote: "Beautifully finished terraced gardens on sloped Kumeu lifestyle blocks.", href: "/services" },
            { service: "Custom Pole Sheds", localNote: "Rural sheds and equestrian facilities for larger Kumeu properties.", href: "/services" },
            { service: "Complete New Build Landscaping", localNote: "Full landscaping packages for new builds in the Kumeu lifestyle corridor.", href: "/landscaping" },
            { service: "Rural Fencing", localNote: "Post-and-rail boundary and paddock fencing matched to the Kumeu aesthetic.", href: "/services" },
        ],
        landmarks: ["Kumeu River Wines", "Westgate shopping centre (nearby)", "SH16 / Northwestern Motorway", "Huapai settlement", "Kumeu River", "Coatesville Road"],
        neighborhoods: ["Kumeu", "Huapai", "Riverhead", "Coatesville", "Waimauku", "Taupaki", "Kumeu Hills lifestyle blocks", "Matua Valley", "Redhills fringe"],
        weatherNote: "Kumeu sits in a drier microclimate than areas further north, sheltered by the Waitakere Ranges from direct west coast rain. Annual rainfall is 1,000–1,200mm. Summer drought periods mean newly established plantings often need irrigation through their first two summers.",
        soilNote: "Variable — clay loam predominates on hillsides, with well-drained sedimentary soils in the Kumeu valley floor. Kumeu's proximity to the wine industry reflects the area's soil diversity. Generally better-draining than the deep clays further north.",
        distanceFromAuckland: "30km northwest of Auckland CBD via Northwestern Motorway",
        faq: [
            { q: "Does JCL Projects work in Kumeu and Huapai?", a: "Yes — Kumeu, Huapai, Riverhead, Coatesville, and Waimauku are all within our regular service area. The Kumeu corridor is one of our most active markets." },
            { q: "I have a premium new build and need high-quality landscaping to match. Can you do that?", a: "This is what JCL Projects specialises in. Justin personally oversees every project, and in the Kumeu market specifically we are used to working to a premium standard. Request a site consultation and we'll discuss what's possible for your property." },
            { q: "Can you build a driveway with stone pillars and post-and-rail fencing as a complete package?", a: "Yes — complete driveway packages including earthworks, surface, pillars, fencing, and flanking plantings are one of our most popular project types in the Kumeu area." },
            { q: "How much does landscaping typically cost on a Kumeu lifestyle block?", a: "Project costs depend heavily on scope and site conditions. A complete driveway with post-and-rail typically ranges from $15,000 to $45,000+. Full new build landscaping packages (earthworks, retaining, driveway, fencing, lawn) for larger Kumeu properties frequently range from $60,000 to $150,000+. JCL Projects provides itemised, transparent quotes — there are no surprises. Call Justin to arrange an on-site assessment." },
            { q: "Do you source quality topsoil and mulch for Kumeu garden plantings?", a: "Yes. Where required, we coordinate the supply of screened topsoil, composts, and mulch for garden establishment as part of the project scope. We use trusted local suppliers and specify material quality appropriate for the application." },
        ],
    },
    {
        slug: "auckland-north-west",
        name: "Auckland North West",
        shortName: "Auckland NW",
        region: "Auckland Region",
        heroImage: "/images/locations/auckland-north-west.webp",
        heroAlt: "Newly landscaped lifestyle block in Auckland North West with rural views",
        accentColor: "text-jcl-limeAccent",
        tagline: "North West Auckland's Rural Landscaping Specialists",
        introParagraph1: "Auckland North West encompasses the broad rural and semi-rural corridor stretching from Kumeu and Riverhead in the south through to Helensville and Kaukapakapa in the north — a zone that includes some of Auckland region's most desirable rural lifestyle property. This is JCL Projects' home territory. From the Northwestern Motorway's transition point at Westgate through Kumeu, Waimauku, Taupaki, and up the SH16 corridor through Helensville to the Kaipara, this is where Justin and the team do the bulk of their work, day in and day out.",
        introParagraph2: "The North West is fundamentally different from suburban Auckland landscaping — the properties are larger, the terrain more varied, the expectations more practical, and the conditions more demanding. Clay soils, wet winters, exposure to Tasman weather systems, and the need for all-weather driveways, functional farm tracks, and robust retaining structures define the work here. JCL Projects has built a reputation in this corridor for delivering projects that hold up, look exceptional, and add genuine long-term value to the properties we work on.",
        localChallenges: [
            { title: "Diverse Terrain Across the Corridor", body: "Auckland North West encompasses everything from the relatively flat Kumeu valley floor to the steep hill country around Waitoki and Kaukapakapa. Matching the approach to the specific terrain — flatter sites need drainage focus, steeper sites need earthworks and retaining expertise — is something JCL Projects navigates with deep local knowledge." },
            { title: "Rainfall & Wet Season Preparation", body: "The North West receives 1,000–1,500mm of annual rainfall depending on proximity to the ranges, and winter wet periods can be relentless. All infrastructure we build — driveways, retaining, farm tracks — is designed and constructed to the standard required to perform in full NZ winter conditions without annual maintenance." },
            { title: "Development Boom & Workload", body: "Auckland North West is experiencing significant development pressure as urban expansion and lifestyle block demand both increase. Planning ahead and securing contractor time early is increasingly important in this market — lead times for quality rural landscaping contractors have extended significantly." },
        ],
        servicesHighlights: [
            { service: "Complete Property Landscaping", localNote: "End-to-end landscaping for new builds and existing properties throughout NW Auckland.", href: "/landscaping" },
            { service: "Earthworks", localNote: "Site preparation, cut and fill, and platform creation across all NW Auckland terrain types.", href: "/services" },
            { service: "Retaining Walls", localNote: "Structural retaining with correct sub-surface drainage for NW Auckland's clay soils.", href: "/services" },
            { service: "Driveways", localNote: "All-weather driveway construction from Kumeu to Kaukapakapa.", href: "/services" },
            { service: "Rural Fencing", localNote: "Boundary, paddock, and garden zone fencing throughout the NW corridor.", href: "/services" },
        ],
        landmarks: ["Northwestern Motorway (SH16)", "Westgate / Massey North", "Kumeu township", "Helensville township", "Kaipara Harbour", "Waitakere Ranges western foothills"],
        neighborhoods: ["Kumeu", "Huapai", "Riverhead", "Waimauku", "Taupaki", "Helensville", "Parakai", "Kaukapakapa", "Wainui", "Waitoki", "Coatesville", "Dairy Flat North", "Shelly Beach", "South Head"],
        weatherNote: "North West Auckland spans multiple microclimate zones — from the relatively sheltered Kumeu valley to the exposed Kaipara coastal plain. Expect significant variation in rainfall (1,000–1,500mm), wind exposure, and winter condition severity across the corridor.",
        soilNote: "Clay soils dominate throughout the corridor — from the clay loam of the Kumeu valley to the deep red Northland clay further north. Sub-surface drainage is a design requirement, not an optional extra, on virtually every project in this region.",
        distanceFromAuckland: "30–65km northwest of Auckland CBD, depending on location within the corridor",
        faq: [
            { q: "What areas does JCL Projects service in Auckland North West?", a: "We cover the full North West corridor from Kumeu and Riverhead in the south through to Helensville and Kaukapakapa in the north, including Waimauku, Taupaki, Wainui, Waitoki, Parakai, and surrounding areas. If you're unsure if we cover your location, contact us — we'll let you know." },
            { q: "How long has JCL Projects been working in Auckland North West?", a: "Since the business began in 2019. The North West is our home territory and the area where the vast majority of our work is concentrated. We have extensive local knowledge of the terrain, soil conditions, and council requirements throughout the region." },
            { q: "Can you handle large-scale property development landscaping?", a: "Yes. JCL Projects has the equipment, capacity, and experience to handle large-scale rural landscaping projects — from total site preparation for new builds to complex retaining and earthworks on established properties. Contact us to discuss your project scope." },
            { q: "Is JCL Projects owner-operated or do you use subcontractors?", a: "JCL Projects is fully owner-operated. Justin manages and works on every project personally, supported by a trusted small crew. We do not subcontract work out. This is why clients across Auckland North West trust us to deliver consistent quality — the same person who quotes the job does the work." },
            { q: "How do clay soils across Auckland North West affect landscaping projects?", a: "Clay soils are the dominant soil type throughout the Auckland North West corridor and they affect every project. They drain slowly, swell when wet, and can destabilise slopes if earthworks are not managed correctly. Every JCL Projects design integrates sub-surface drainage appropriate to the clay conditions on site. We do not treat drainage as an optional extra — it is a fundamental part of every project." },
        ],
    },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    return locations.find(l => l.slug === slug);
}
