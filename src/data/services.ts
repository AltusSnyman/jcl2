export interface ServiceData {
    slug: string;
    name: string;
    shortName: string;
    tagline: string;
    heroImage: string;
    heroAlt: string;
    metaDescription: string;
    keywords: string[];
    intro1: string;
    intro2: string;
    intro3: string;
    keyBenefits: { title: string; body: string }[];
    processSteps: { step: string; title: string; body: string }[];
    locationNotes: { location: string; slug: string; note: string }[];
    galleryImages: { src: string; alt: string }[];
    faq: { q: string; a: string }[];
    relatedServices: { name: string; slug: string }[];
    schemaServiceType: string;
}

export const services: ServiceData[] = [
    {
        slug: "custom-sheds",
        name: "Custom Pole Sheds & Structures",
        shortName: "Custom Sheds",
        tagline: "Purpose-Built Rural Structures That Last for Decades",
        heroImage: "/images/services/media__1771712056369.webp",
        heroAlt: "Custom pole shed built by JCL Projects on a rural Kaukapakapa property",
        metaDescription: "JCL Projects builds custom pole sheds and rural structures across Kaukapakapa, Helensville, Kumeu & North West Auckland. Free on-site quote. Heavy-duty materials, local expertise.",
        keywords: ["custom pole sheds Kaukapakapa", "rural sheds Helensville", "pole sheds Kumeu", "farm sheds Rodney", "custom rural buildings Auckland North West"],
        intro1: "A properly designed and built pole shed is the single most transformative infrastructure investment most rural property owners make. It transforms how a property functions — giving you weather-independent workspace, machinery storage that actually fits your equipment, and the kind of utility that makes rural life genuinely enjoyable rather than a constant battle against weather, mud, and lack of storage. JCL Projects has been building custom pole sheds and rural structures across the Kaukapakapa, Helensville, Waitoki, Kumeu, and wider North West Auckland region since 2019.",
        intro2: "The key word is custom. Off-the-shelf shed kits are designed to be sold, not to suit your site, your equipment, or your actual usage pattern. Justin works with each client to understand what the shed genuinely needs to do — how many vehicles, what machinery, whether you need a workshop area, separated livestock sections, storage lofts, or power and water infrastructure — and designs a structure that delivers exactly that. Materials are specified to match your exposure conditions: coastal-spec coatings within 5km of salt air, heavier structural members in exposed high-wind zones, and correct foundation depths for the specific soil conditions on your block.",
        intro3: "The platform matters as much as the shed itself. JCL Projects prepares shed platforms as part of every build — earthworks, compacted gravel base, correctly graded drainage, and where required, a concrete hardstand for the yard area. A shed dropped on a poorly prepared platform will have water pooling at the entry, doors that won't open in wet weather, and floor issues within two seasons. Getting the platform right from the start is non-negotiable.",
        keyBenefits: [
            { title: "Designed for Your Usage", body: "Every shed starts with a conversation about what you actually need. Equipment sizes, door clearances, access routes, power requirements, and future expansion — all considered before a post is driven." },
            { title: "Platform & Drainage Included", body: "Our shed builds include full site preparation — earthworks, compacted gravel base, and correctly graded drainage. The shed and its platform are designed as one integrated system." },
            { title: "Spec'd for Local Conditions", body: "Coastal-rated materials within salt-air zones, heavy structural members in exposed locations, and foundation depths matched to your specific soil. Not one-size-fits-all — designed for your site." },
            { title: "Compliant Construction", body: "JCL Projects builds to comply with New Zealand Building Code requirements. We can advise on what requires building consent and assist with the consent process for larger or non-exempt structures." },
            { title: "Long-Span Bay Widths", body: "We build wide-span sheds suited to modern farm machinery — tractors, diggers, and large farm vehicles. Don't compromise on bay width and spend the next decade manoeuvring around pillars." },
        ],
        processSteps: [
            { step: "01", title: "Site Consultation", body: "Justin visits your property to understand access, site conditions, orientation, and your specific requirements. No call centres — you meet the person who will build your shed." },
            { step: "02", title: "Design & Quote", body: "We produce a detailed design and obligation-free quote covering earthworks, platform, structural framing, cladding, doors, and any extras (guttering, power rough-in, concrete hardstand)." },
            { step: "03", title: "Consent (if required)", body: "Sheds over 10m² or those attached to the house boundary require building consent. JCL Projects can advise and, where appropriate, assist with the consent application through Auckland Council." },
            { step: "04", title: "Platform Construction", body: "We prepare the shed platform first — earthworks, compacted metal base, drainage. The platform is inspected and confirmed level before any framing begins." },
            { step: "05", title: "Structure Build", body: "Posts are set, framing is erected, and cladding is installed. JCL Projects uses a tight trusted contractor network for specialist trades — electrical, concrete, roofing — ensuring that every element of the build meets the same quality standard." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Red clay soils require deeper posts and careful platform drainage — JCL Projects knows exactly what's needed here." },
            { location: "Helensville", slug: "helensville", note: "Hill country and river flat properties both in our regular build scope around Helensville." },
            { location: "Wainui", slug: "wainui", note: "New lifestyle block builds throughout Wainui — shed platforms as part of complete landscaping packages." },
            { location: "Waitoki", slug: "waitoki", note: "Steep terrain shed platforms built by earthworks prior to structure — remote access accounted for." },
            { location: "Kumeu", slug: "kumeu", note: "Premium equestrian and lifestyle shed builds for Kumeu's demanding property market." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "Full North West Auckland coverage from Kumeu to Kaukapakapa." },
        ],
        galleryImages: [
            { src: "/images/services/service_custom_rural_shed_1771712135171.webp", alt: "Custom rural shed JCL Projects" },
            { src: "/images/services/service_horse_truck_shed_1771710450021.webp", alt: "Large horse truck shed with wide span access" },
            { src: "/images/services/service_shed_hero_1771710341768.webp", alt: "Completed pole shed on a rural lifestyle block" },
        ],
        faq: [
            { q: "Does my shed need a building consent?", a: "Sheds under 10m² generally don't require consent. Larger sheds, or those within certain distances of property boundaries or other buildings, typically do. JCL Projects will advise on your specific situation during the site consultation." },
            { q: "What size sheds can you build?", a: "JCL Projects builds sheds from small tool stores up to large multi-bay farm complexes with 15m+ span bays. There is no standard maximum — we design to your requirements and site constraints." },
            { q: "Can you pour a concrete floor as part of the shed build?", a: "Yes. Concrete floors (workshop slab, hardstand yard, or dedicated wash-down bay) can be included in the project scope. We coordinate the concrete work as part of the overall build sequence." },
            { q: "How long does a typical shed build take?", a: "Platform preparation typically takes 1–3 days depending on earthworks required. A standard single-bay to three-bay shed structure takes 2–5 days to frame and clad. Larger complexes or those with additional trades (electrical, concrete) will take longer." },
            { q: "What areas do you build sheds in?", a: "JCL Projects builds throughout Kaukapakapa, Helensville, Wainui, Waitoki, Kumeu, and the wider Auckland North West region. If you're unsure whether we cover your location, contact us and we'll confirm." },
        ],
        relatedServices: [
            { name: "Bulk Earthworks", slug: "earthworks" },
            { name: "Driveway Construction", slug: "driveways" },
            { name: "Rural Fencing", slug: "rural-fencing" },
        ],
        schemaServiceType: "ConstructionService",
    },
    {
        slug: "retaining-walls",
        name: "Retaining Walls & Terracing",
        shortName: "Retaining Walls",
        tagline: "Structural Retaining That Turns Sloped Sites into Usable Land",
        heroImage: "/images/services/service_retaining_wall_1771710393100.webp",
        heroAlt: "Structural timber retaining wall on a sloped Kaukapakapa rural property",
        metaDescription: "JCL Projects builds retaining walls and terracing across Kaukapakapa, Helensville, Kumeu & Rodney. Timber, concrete, and block options. Free on-site quote.",
        keywords: ["retaining walls Kaukapakapa", "retaining walls Helensville", "retaining walls Kumeu", "terracing Rodney", "sloped yard retaining Auckland North West"],
        intro1: "Sloped ground is the defining challenge on the majority of rural properties across the Rodney district and North West Auckland. Red clay hillsides, river-valley escarpments, and the undulating terrain that characterises the Kaukapakapa, Helensville, and Waitoki areas all require one thing more than anything else: well-designed, correctly drained, structurally sound retaining. A properly built retaining wall transforms an unusable, eroding slope into flat, functional, valuable land. A poorly built wall fails — quickly, expensively, and sometimes dangerously.",
        intro2: "JCL Projects specialises in retaining wall construction for rural properties. Justin has designed and built retaining solutions on some of the most challenging sites in the Rodney district — steep red clay slopes, sites with underground springs and high water tables, properties with difficult access limiting machinery options, and large retaining scopes requiring multiple sequential walls to create a terraced effect across a significant elevation change. The critical element in every retaining wall is what you cannot see: the sub-surface drainage layer behind the wall. Hydrostatic pressure — the pressure of water building up in saturated soil behind a wall that has no drainage — is what destroys retaining walls. JCL Projects never builds a retaining wall without correct drainage. Without exception.",
        intro3: "On rural properties, retaining walls serve multiple functions simultaneously. A well-designed retaining scope creates level terraces suitable for garden beds, lawn, outdoor entertaining, or building platforms. It eliminates erosion from cut slopes. It creates visual structure and character in a landscape that would otherwise be a series of indeterminate slopes. And it adds genuine, measurable value to the property. Buyers understand a well-retained, terraced garden. They also immediately recognise failed or poorly built retaining, and they discount accordingly.",
        keyBenefits: [
            { title: "Sub-Surface Drainage Always Included", body: "Every JCL Projects retaining wall includes a correctly designed drainage layer behind the wall face. Perforated pipe, geotextile filter cloth, and drainage aggregate — no exceptions. This is what makes a retaining wall last." },
            { title: "Multiple Material Options", body: "H4-treated hardwood timber posts and rails, concrete block, gabion baskets, or engineered timber wall systems — JCL Projects specifies the right material for the wall height, soil conditions, and aesthetic requirements of each project." },
            { title: "Terracing Design", body: "Rather than one large wall, we design retaining as a series of lower terraced walls — creating multiple level areas, each of which becomes usable garden or lawn space. This approach also reduces the structural load on individual walls." },
            { title: "Integration with Earthworks", body: "Retaining walls and earthworks are designed together. The cut-and-fill earthworks that create the terraced levels, and the retaining walls that hold those levels, are part of one integrated design — not designed separately and bolted together." },
            { title: "Consent Advice", body: "Retaining walls over 1.5m typically require building consent in Auckland. JCL Projects advises on consent triggers and the consent process — we've been through it many times across the Rodney and Auckland local authority areas." },
        ],
        processSteps: [
            { step: "01", title: "Site Assessment", body: "Justin visits to assess slope gradients, soil conditions, drainage patterns, and access. The assessment determines wall height requirements, appropriate materials, and drainage design." },
            { step: "02", title: "Design & Quote", body: "A detailed retaining design is produced — including wall heights, batter angles, terrace widths, drainage specification, and any access tracks required for machinery during construction." },
            { step: "03", title: "Earthworks", body: "The slope is cut to the designed terrace levels. Cut material is used as fill elsewhere on the property where suitable, or removed if not needed. The cut face is temporarily stabilised during construction." },
            { step: "04", title: "Wall Construction", body: "Posts are installed to correct depth for the wall height. Drainage aggregate and perforated pipe are placed. Wall facing (timber rails, concrete block, or other selected material) is installed to level and plumb." },
            { step: "05", title: "Topsoil & Finish", body: "Topsoil is spread on terraced areas to the specified depth. Temporary erosion control measures are installed on any disturbed areas until vegetation establishes." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Sloped red clay sites toward the Kaipara catchment are our bread and butter — drainage is critical here." },
            { location: "Helensville", slug: "helensville", note: "Hill country slopes east of Helensville regularly require multi-stage retaining with engineered drainage." },
            { location: "Wainui", slug: "wainui", note: "New lifestyle block development across Wainui — retaining as core part of new-build landscaping." },
            { location: "Waitoki", slug: "waitoki", note: "Steep hill country retaining is one of our most common project types in Waitoki — heavy machinery and experienced crew." },
            { location: "Kumeu", slug: "kumeu", note: "Beautifully finished terraced retaining for Kumeu's premium lifestyle block market." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "Retaining across all terrain types throughout the full North West corridor." },
        ],
        galleryImages: [
            { src: "/images/services/service_retaining_wall_1771710393100.webp", alt: "Structural retaining wall built by JCL Projects" },
            { src: "/images/landscaping/retaining.webp", alt: "Terraced retaining on a rural lifestyle block" },
            { src: "/images/services/service_sloped_yard_1771712159670.webp", alt: "Sloped yard transformed with retaining and terracing" },
        ],
        faq: [
            { q: "When does a retaining wall need a building consent?", a: "In Auckland, retaining walls over 1.5m in height generally require a building consent. Walls under 1.5m that are not within 3m of a boundary or other structure are usually exempt. JCL Projects will advise on your specific situation." },
            { q: "How long do timber retaining walls last?", a: "H4-treated hardwood timber retaining walls, properly built with drainage, typically last 20–30 years in NZ conditions. The timber treatment rating (H4) is specifically designed for ground contact applications. We use H4 as a minimum for all in-ground applications." },
            { q: "Why does my existing retaining wall keep failing?", a: "Almost always, failed retaining walls fail because of inadequate drainage. Water builds up behind the wall (hydrostatic pressure) and either pushes it over or saturates the soil to the point where it flows around the wall ends. The fix is rebuilding with a proper drainage layer, not just replacing the wall face." },
            { q: "Can you build retaining on a steep slope with difficult access?", a: "Yes. JCL Projects has equipment sized for difficult rural access — we are not limited to sites that can accommodate large machinery. Justin will assess access options at the initial site visit and design the works accordingly." },
            { q: "Can retaining walls be made to look attractive?", a: "Absolutely. Stepped timber retaining with planted terraces, exposed aggregate block, or gabion baskets filled with local stone are all aesthetically appealing. We design retaining to integrate with the broader landscape, not just be a functional afterthought." },
        ],
        relatedServices: [
            { name: "Bulk Earthworks", slug: "earthworks" },
            { name: "Property Landscaping", slug: "landscaping" },
            { name: "Driveway Construction", slug: "driveways" },
        ],
        schemaServiceType: "ConstructionService",
    },
    {
        slug: "earthworks",
        name: "Bulk Earthworks",
        shortName: "Earthworks",
        tagline: "Site Preparation, Cut & Fill, and Land Levelling for Rural Properties",
        heroImage: "/images/services/service_earthworks_1771710502664.webp",
        heroAlt: "Bulk earthworks and site preparation on a rural lifestyle block in Rodney district NZ",
        metaDescription: "JCL Projects carries out bulk earthworks, site levelling, and land preparation across Kaukapakapa, Helensville, Waitoki & North West Auckland. Free site assessment.",
        keywords: ["bulk earthworks Kaukapakapa", "earthworks Helensville", "site preparation Waitoki", "land levelling Rodney", "cut and fill Auckland North West"],
        intro1: "Earthworks are the foundation on which everything else on a rural property is built — literally. Getting levels right, getting drainage right, and creating stable, compacted platforms for buildings, driveways, and amenity areas before those structures are built is the work that determines whether a property functions well for the next 30 years or becomes an ongoing source of problems. JCL Projects carries out bulk earthworks across the full range of rural property types throughout Kaukapakapa, Helensville, Wainui, Waitoki, Kumeu, and the wider Auckland North West region.",
        intro2: "Rural earthworks are materially different from residential earthworks. The volumes are larger, the machinery required is heavier, and the topographic challenges — steep slopes, remote access, unstable soils, high water tables — are more demanding. JCL Projects has the machinery, the skills, and crucially the site-specific local knowledge to navigate these challenges. Justin has worked the clay soils and hill country terrain of the Rodney district for years and understands how this ground behaves — in wet conditions, in dry conditions, on steep gradients, and in areas with underground water that makes an otherwise simple cut unpredictable.",
        intro3: "Earthworks planning matters as much as earthworks execution. The difference between a project where cut material from one area is efficiently used as fill in another — versus a project that exports large volumes of expensive spoil to landfill and then imports expensive fill material from elsewhere — comes down to design. JCL Projects designs earthworks projects to maximise the use of on-site material, minimise haulage, and achieve the finished levels required with the most efficient construction sequence.",
        keyBenefits: [
            { title: "Correct Equipment for Rural Sites", body: "JCL Projects operates machinery suited to rural terrain — not oversized urban equipment that requires wide sealed road access and level staging areas. We access difficult sites that other contractors won't quote." },
            { title: "Cut-and-Fill Efficiency", body: "We design earthworks to maximise the use of on-site material as fill rather than importing and exporting expensive material. Efficient cut-and-fill significantly reduces project cost." },
            { title: "Erosion Control During Works", body: "Active erosion control — silt fences, sediment traps, staged cut faces — is managed throughout construction. On-site environmental management is part of every earthworks project." },
            { title: "Drainage Integration", body: "Finished earthworks always include a stormwater and surface drainage plan. Correct fall on finished platforms, culverts at flow paths, and downstream outlet design — all specified and built as part of the earthworks scope." },
            { title: "Subsoil Conditions Knowledge", body: "Justin's deep familiarity with Rodney and North West Auckland subsoil conditions means earthworks designs that account for what the ground will actually do — not what it looks like from a desktop survey." },
        ],
        processSteps: [
            { step: "01", title: "Site Assessment & Design", body: "JCL Projects visits the site to assess topography, access, soil conditions (including likely subsoil profile), and downstream drainage. A cut-and-fill design is prepared that achieves the required finished levels with maximum on-site material use." },
            { step: "02", title: "Consent Check", body: "Earthworks volumes above certain thresholds (typically 250m³ in Rodney) may require resource consent under the Auckland Unitary Plan. JCL Projects advises on consent triggers and the consent process." },
            { step: "03", title: "Vegetation Clearance & Topsoil Strip", body: "The work area is cleared and topsoil is stripped and stockpiled for later re-spreading on finished areas. Erosion control measures are installed before bulk earthworks begin." },
            { step: "04", title: "Bulk Cut & Fill", body: "Cut material is moved to fill areas in a planned sequence to minimise double-handling. Each fill layer is compacted to specification before the next lift is placed." },
            { step: "05", title: "Finish & Drainage", body: "Finished surfaces are graded to the specified fall toward drainage outlets. Topsoil is respread on areas to be grassed or planted. Erosion control is maintained until vegetation establishes." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Red clay subsoil behaves very differently when wet — JCL Projects designs earthworks to work with these conditions." },
            { location: "Helensville", slug: "helensville", note: "Both river flat and hill country earthworks near Helensville — very different challenges, both in our regular scope." },
            { location: "Wainui", slug: "wainui", note: "New lifestyle block site preparation throughout the Wainui development corridor." },
            { location: "Waitoki", slug: "waitoki", note: "Steep hill country earthworks in challenging terrain — our specialty project type in Waitoki." },
            { location: "Kumeu", slug: "kumeu", note: "Site preparation for new builds and infill earthworks on Kumeu's lifestyle blocks." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "Earthworks across the full NW Auckland corridor — all terrain types, all scales." },
        ],
        galleryImages: [
            { src: "/images/services/service_earthworks_1771710502664.webp", alt: "Bulk earthworks on a rural site" },
            { src: "/images/landscaping/earthworks.webp", alt: "Site levelling and platform creation" },
            { src: "/images/services/service_access_improvement_1771712230306.webp", alt: "Access improvement and site earthworks" },
        ],
        faq: [
            { q: "When do earthworks require resource consent in Rodney/Auckland?", a: "Under the Auckland Unitary Plan, earthworks of more than 250m³ or 1,000m² in the Rural zone typically require resource consent. Earthworks in sensitive environments (near streams, coastal zone) have lower thresholds. JCL Projects will advise on your specific situation." },
            { q: "Can you work on steep sites?", a: "Yes. JCL Projects has equipment suited to steep rural terrain. We have completed earthworks on sites that other contractors assessed as inaccessible. Justin will assess the site and be upfront about what is and isn't achievable with our equipment." },
            { q: "How do you handle unstable subsoil conditions?", a: "Many Rodney sites have variable subsoil — including indurated clay, springs, and areas of unstable fill. We design earthworks conservatively for known conditions and adapt as works progress. Any significant subsoil surprises are discussed with the client before proceeding." },
            { q: "Can you create a flat building platform on a very steep site?", a: "Yes — cut-and-fill earthworks can create a level platform on steep terrain, though the volume of cut material and the height of any retaining walls required increases significantly with slope angle. JCL Projects will provide a realistic assessment of what's achievable and at what cost." },
            { q: "Do you handle consenting for earthworks?", a: "JCL Projects can advise on consent requirements and, in some cases, assist with consent applications. For large or complex earthworks with significant consent requirements, we recommend engaging a planning consultant." },
        ],
        relatedServices: [
            { name: "Retaining Walls", slug: "retaining-walls" },
            { name: "Custom Pole Sheds", slug: "custom-sheds" },
            { name: "Driveway Construction", slug: "driveways" },
        ],
        schemaServiceType: "ConstructionService",
    },
    {
        slug: "driveways",
        name: "Driveway Construction",
        shortName: "Driveways",
        tagline: "All-Weather Rural Driveways Built for NZ Conditions",
        heroImage: "/images/services/service_driveway_construction_1771712256883.webp",
        heroAlt: "Premium rural driveway construction with grand entranceway and post-and-rail fencing in North West Auckland",
        metaDescription: "JCL Projects builds rural driveways and grand entranceways across Kaukapakapa, Helensville, Kumeu & North West Auckland. All-weather surfaces, correct drainage. Free quote.",
        keywords: ["driveway construction Kaukapakapa", "rural driveway Helensville", "grand entranceway Kumeu", "driveway construction Rodney", "all-weather driveway Auckland North West"],
        intro1: "A rural driveway is not a feature — it is infrastructure. A properly built driveway holds up through every NZ winter without becoming impassable, without forming ruts, and without eroding the banks and ditches at its sides. It remains drivable in the worst of the wet season and looks good doing it. An improperly built rural driveway does the opposite: it deteriorates from the first heavy rain, it requires annual regrading and metal topping, and it becomes the most expensive \"savings\" a rural property owner ever made. JCL Projects has been building rural driveways across the Rodney district and North West Auckland region since 2019, and we have seen — and fixed — enough failed DIY and cheap-contractor driveways to know exactly what separates a driveway that lasts from one that doesn't.",
        intro2: "The difference between a driveway that lasts and one that fails is entirely in the base preparation and drainage. The correct sequence is: formation grading with the right cross-fall, installation of culverts at all watercourse crossings and low points, compacted AP40 basecourse to the correct depth, and then the selected wearing course (chip seal, gravel, or concrete) applied to a correctly prepared base. Skipping or shortcutting any of these steps produces a surface that begins failing within one wet season. JCL Projects does not shortcut these steps.",
        intro3: "Beyond basic driveways, JCL Projects builds complete grand entranceway packages — a feature that has consistently ROI-positive outcomes on rural property. Stone or wood pillars, post-and-rail fencing flanking the entry, native plantings, and a sealed or quality gravel entry section transform arriving at a property. The entranceway is what visitors and potential buyers see first, and the visual impact of a well-designed entry is disproportionate to its actual construction cost.",
        keyBenefits: [
            { title: "Correct Base Preparation", body: "Every JCL driveway starts with correct formation grading — the right cross-fall profile to drain water off the surface rather than through it. No amount of surface material compensates for incorrect formation." },
            { title: "Culverts at Every Water Crossing", body: "Culverts are sized and installed at all natural watercourse crossings and at strategic low points along the driveway. Blocked or undersized culverts are the number-one cause of rural driveway failure." },
            { title: "Multiple Surface Options", body: "Compacted gravel (clean or AP40), chip seal, concrete, or asphalt — JCL Projects can advise on and construct the right surface type for your traffic volumes, budget, and aesthetic requirements." },
            { title: "Grand Entranceway Packages", body: "Pillars, post-and-rail fencing, native plantings, and a premium sealed surface section at the entry — complete entranceway packages designed and built as one scope." },
            { title: "Farm Track Networks", body: "Internal farm track networks connecting paddock gates, troughs, and sheds — built to the same quality standard as the main driveway for all-weather usability year-round." },
        ],
        processSteps: [
            { step: "01", title: "Site Inspection & Survey", body: "Justin walks the proposed driveway alignment to assess gradient, watercourse crossings, soil conditions, and drainage outlets. This determines the full earthworks scope required." },
            { step: "02", title: "Design & Quote", body: "A detailed quote is provided covering formation earthworks, culvert installation, basecourse quantities, and the selected wearing surface. Entranceway features are quoted separately if required." },
            { step: "03", title: "Formation Works", body: "The driveway formation is graded to the design cross-fall. Cut material is used beneficially — driveway formation material typically provides good compacted basecourse if correctly managed." },
            { step: "04", title: "Culvert Installation", body: "Culverts are installed at all watercourse crossings and strategic low points. Inlet and outlet headwalls are constructed. Culverts are correctly bedded in compacted fill." },
            { step: "05", title: "Basecourse & Surface", body: "Compacted AP40 basecourse is placed and compacted in layers. The selected wearing surface is then applied — chip seal is sealed while warm for best penetration, gravel is rolled to consolidate." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Long clay-soil driveways on lifestyle blocks — correct base depth and drainage is critical for winter usability." },
            { location: "Helensville", slug: "helensville", note: "Driveways connecting to the SH16 network — correct sight lines and formation grades for safety." },
            { location: "Wainui", slug: "wainui", note: "New lifestyle subdivision driveways built as part of complete landscaping packages throughout Wainui." },
            { location: "Waitoki", slug: "waitoki", note: "Remote access driveways and internal farm tracks in challenging hill country terrain." },
            { location: "Kumeu", slug: "kumeu", note: "Premium sealed entranceways and grand driveway packages for the Kumeu lifestyle market." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "Driveway construction from Kumeu to Kaukapakapa — all surface types, all scales." },
        ],
        galleryImages: [
            { src: "/images/services/service_driveway_construction_1771712256883.webp", alt: "Rural driveway construction with correct base preparation" },
            { src: "/images/landscaping/driveway.webp", alt: "Completed rural driveway with post-and-rail fencing" },
            { src: "/images/services/service_grand_entranceway_1771710416585.webp", alt: "Grand entranceway with pillars and native plantings" },
        ],
        faq: [
            { q: "How thick should a rural driveway base be?", a: "A minimum of 150mm of compacted AP40 basecourse is the standard recommendation for light rural vehicle traffic. High-traffic areas, areas with soft subsoil, or driveways carrying heavy farm machinery should have 200–300mm of basecourse. JCL Projects will specify the correct depth for your site conditions and traffic loads." },
            { q: "What's the best surface for a rural driveway in NZ?", a: "For most rural lifestyle blocks, a well-constructed compacted gravel over AP40 basecourse is the most cost-effective option. Chip seal provides a harder wearing surface that's easier to maintain. Concrete is the most permanent but has a higher upfront cost. JCL Projects can advise on the best option for your situation." },
            { q: "Why does my existing gravel driveway keep deteriorating?", a: "The most common cause is inadequate base depth, incorrect cross-fall (the surface isn't draining water away from the centre), or blocked/absent culverts causing water to pond and saturate the formation. JCL Projects can assess and quote a remediation that addresses the root cause rather than just topping up with more gravel." },
            { q: "Can you build a grand driveway entranceway as part of the driveway build?", a: "Yes — entranceway pillars, post-and-rail fencing, and native plantings are a popular add-on to driveway builds, particularly in the Kumeu and Helensville markets. We design and build the entranceway and driveway as one integrated project." },
        ],
        relatedServices: [
            { name: "Bulk Earthworks", slug: "earthworks" },
            { name: "Rural Fencing", slug: "rural-fencing" },
            { name: "Property Landscaping", slug: "landscaping" },
        ],
        schemaServiceType: "ConstructionService",
    },
    {
        slug: "rural-fencing",
        name: "Rural Fencing",
        shortName: "Rural Fencing",
        tagline: "Quality Boundary, Paddock & Garden Fencing for Rural Properties",
        heroImage: "/images/services/service_rural_fencing_1771710474299.webp",
        heroAlt: "Post and rail rural fencing on a lifestyle block in Kaukapakapa, New Zealand",
        metaDescription: "JCL Projects builds post-and-rail, electric, and stock fencing throughout Kaukapakapa, Helensville, Kumeu & Rodney. Quality materials, straight lines. Free quote.",
        keywords: ["rural fencing Kaukapakapa", "post and rail fencing Helensville", "paddock fencing Kumeu", "stock fencing Rodney", "rural fencing Auckland North West"],
        intro1: "Fencing on a rural property does far more than mark a boundary — it defines how the property functions. Well-subdivided paddocks with quality fencing enable rotational grazing that transforms pasture productivity. A well-fenced driveway entrance creates instant kerb appeal. Garden exclusion fencing protects planting from livestock. And correctly built boundary fencing prevents the neighbour relationship problems that poor or ambiguous boundaries create. JCL Projects builds rural fencing across the Kaukapakapa, Helensville, Waitoki, Kumeu, and wider Auckland North West areas, using materials and construction methods suited to NZ rural conditions.",
        intro2: "The standard for rural fencing in New Zealand has improved significantly over the past decade — and so have the options available. Post-and-rail fencing has become the aesthetic standard for lifestyle blocks and rural entranceways, replacing the cheap staple-and-wire that characterised older rural properties. Electric tape systems on quality posts allow cost-effective paddock subdivision. Horse fencing combines safety requirements with aesthetics that basic stock fencing doesn't satisfy. JCL Projects works with owners to specify the right fencing solution for each zone of the property — different fence types are appropriate for the entranceway, driveway borders, paddock internal divisions, horse yards, and garden exclusion respectively.",
        intro3: "Construction quality matters in fencing — perhaps more visibly than in any other rural construction work, because a fence line is the most visible element on a property from the road and from adjacent land. A straight, level, well-tensioned fence line with correctly braced corner strainers reads as quality and care. A sagging, crooked fence line with inadequate straining reads the opposite way, regardless of what else on the property looks good. JCL Projects sets fence lines with care, braces corners and gates correctly, and takes pride in the visual result as much as the functional one.",
        keyBenefits: [
            { title: "Post-and-Rail Entranceways", body: "Premium 4-rail hardwood post-and-rail for driveway borders and property entranceways — the single highest-visibility aesthetic element on a rural lifestyle block." },
            { title: "Paddock Subdivision", body: "Practical subdivision of grazing paddocks for rotational grazing — sized and configured to match your stock type and numbers. A correctly subdivided property will pay for its fencing in improved pasture quality within two seasons." },
            { title: "Correct Straining & Bracing", body: "Corners, end posts, and gate posts are braced to the standard required for the fence height and wire tension. An unstrung fence line looks impressive on day one and sags within a year." },
            { title: "Electric Fencing Systems", body: "Temporary and permanent electric tape and wire systems for cost-effective paddock management. JCL Projects installs the energiser, earth stakes, and tape runs as a complete system." },
            { title: "Horse & Livestock Safe Fencing", body: "Horse-safe fencing — no barb, smooth wire rails, safe sight-lines — for equestrian properties throughout Kumeu, Helensville, and the wider Rodney area." },
        ],
        processSteps: [
            { step: "01", title: "Site Walk & Discussion", body: "Justin walks the proposed fence alignments with you, discussing post spacing, gate positions, corner locations, and the specific fencing type appropriate for each section of the property." },
            { step: "02", title: "Quote", body: "A detailed quote is provided per-fence-type per-metre, including materials and labour. Gate hardware and strainer specifications are included." },
            { step: "03", title: "Post-Hole Boring", body: "Posts are bored or rammed to the correct depth for the post height and fence tension load. Corner and strainer posts are bored deeper and set in concrete." },
            { step: "04", title: "Post Setting & Alignment", body: "Posts are set in correct alignment — string line is used throughout to maintain straightness. This is the step that determines the final visual quality of the fence." },
            { step: "05", title: "Rails or Wire", body: "Rails (for post-and-rail) are nailed or bolted in position. Wire is strained to correct tension. Electric tape is clipped to insulators. Gates are hung and adjusted." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Boundary and paddock fencing throughout Kaukapakapa — including corner setups on challenging slopes." },
            { location: "Helensville", slug: "helensville", note: "Post-and-rail entranceways and paddock fencing throughout the Helensville rural catchment." },
            { location: "Wainui", slug: "wainui", note: "Garden exclusion, paddock, and entranceway fencing on new Wainui lifestyle block builds." },
            { location: "Waitoki", slug: "waitoki", note: "Boundary and paddock fencing on steep hill country terrain in Waitoki." },
            { location: "Kumeu", slug: "kumeu", note: "Equestrian and premium post-and-rail fencing on Kumeu's lifestyle and horse properties." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "All fencing types across the full NW Auckland corridor." },
        ],
        galleryImages: [
            { src: "/images/services/service_rural_fencing_1771710474299.webp", alt: "Post and rail rural fencing by JCL Projects" },
            { src: "/images/services/service_grand_entranceway_1771710416585.webp", alt: "Entranceway post and rail fencing" },
            { src: "/images/service-driveways.webp", alt: "Driveway with post and rail fencing" },
        ],
        faq: [
            { q: "What post spacing is correct for rural post-and-rail fencing?", a: "For standard lifestyle block post-and-rail, posts at 2.4m centres (matching standard rail lengths without a mid-span joint) provides good visual results and structural performance. For horse fencing, 2m post spacing is often recommended for additional rigidity." },
            { q: "What H-treatment rating is required for fence posts?", a: "H4 treatment is required for posts in direct ground contact. H3.2 rated timber is not suitable for in-ground fence posts regardless of what suppliers may tell you. JCL Projects uses H4 treated timber for all in-ground post applications." },
            { q: "Do you install gates as part of fencing projects?", a: "Yes. Gate posts (usually heavier, concrete-set posts with dropout hardware), hinges, latches, and the gates themselves are included in our fencing quotes as a complete package. We supply or can source gates to match your fencing style." },
            { q: "Can you fence steep terrain?", a: "Yes. Steep rural sections are common across Waitoki, Kaukapakapa, and Helensville. JCL Projects has experience stepping fence lines down steep gradients and dealing with rock-bearing ground that limits post-hole depth." },
        ],
        relatedServices: [
            { name: "Driveway Construction", slug: "driveways" },
            { name: "Property Landscaping", slug: "landscaping" },
            { name: "Custom Pole Sheds", slug: "custom-sheds" },
        ],
        schemaServiceType: "ConstructionService",
    },
    {
        slug: "landscaping",
        name: "Property Landscaping",
        shortName: "Landscaping",
        tagline: "Complete Rural Property Landscaping from Bare Ground to Finished",
        heroImage: "/images/service-landscaping.webp",
        heroAlt: "Completed rural property landscaping on a North West Auckland lifestyle block",
        metaDescription: "JCL Projects delivers complete rural property landscaping across Kaukapakapa, Helensville, Kumeu & North West Auckland. From new builds to established properties. Free quote.",
        keywords: ["property landscaping Kaukapakapa", "rural landscaping Helensville", "lifestyle block landscaping Kumeu", "landscaping Rodney", "property landscaping Auckland North West"],
        intro1: "The word \"landscaping\" covers a very wide range of work — from a few garden beds and a lawn to a complex multi-stage project that transforms a bare construction site into a fully functional, beautifully presented rural property. JCL Projects operates across the full spectrum. Our landscaping work includes bulk earthworks and retaining, driveway and access track construction, shed platforms, fencing, lawn establishment, garden zone creation, and the coordination of planting as part of a complete property vision. This is what we mean by property landscaping: not an individual task, but the whole-of-property approach to transforming rural land.",
        intro2: "Many JCL Projects clients come to us after a new house build, when the builder has finished and the property around the house is bare, compacted, and unfinished. This is the most common starting point for a complete landscaping project. The typical scope includes: earthworks to establish finished levels and drainage around the house, retaining walls on any sloped sections, a quality driveway from the road to the house and around to the garage and shed, a shed platform and building, boundary and garden zone fencing, and topsoil placement and lawn establishment. Coordinating all of these elements as one coherent project — rather than engaging separate contractors for each trade — is where JCL Projects adds the most value.",
        intro3: "Established properties that have been neglected, or that have accumulated a series of piecemeal improvements that don't cohere as a whole, are the second most common project type. JCL Projects approaches these with a whole-property assessment — identifying what works, what doesn't, and what a realistic improvement scope would deliver for the budget available. Sometimes the best result comes from a focused intervention: one retaining wall, one new driveway section, and new fencing can transform how a property presents without requiring a whole-property overhaul.",
        keyBenefits: [
            { title: "Complete Property Vision", body: "JCL Projects takes a whole-property view — earthworks, retaining, driveways, sheds, fencing, and planting all designed as a coherent system rather than a series of disconnected jobs." },
            { title: "Single Point of Contact", body: "Justin coordinates every element of the landscaping project — earthworks, retaining, structures, and fencing — eliminating the scheduling conflicts and accountability gaps that arise when multiple trades are engaged separately." },
            { title: "New Build Ready", body: "Post-construction bare-ground landscaping is our most common project type. We take new builds from bare construction ground to finished property — driveway, platform, retaining, shed, fencing, and lawn." },
            { title: "Staged Project Planning", body: "Not everything needs to happen at once. JCL Projects helps clients prioritise the most critical elements for stage one, and plans subsequent stages in a logical sequence that avoids costly rework." },
            { title: "Local Knowledge", body: "Landscaping the Rodney district and North West Auckland requires understanding the specific soil conditions, drainage patterns, and weather exposures of each sub-area. JCL Projects has this understanding from years of daily work across the region." },
        ],
        processSteps: [
            { step: "01", title: "Whole-Property Assessment", body: "Justin walks the property with you to develop a shared understanding of what the property needs to function well and present beautifully. Priorities are discussed and a staging plan is developed." },
            { step: "02", title: "Scope Development", body: "A detailed project scope is developed for the agreed first stage. Each element is specified — earthworks volumes, retaining heights, driveway surface type, fencing types — and quoted transparently." },
            { step: "03", title: "Earthworks & Drainage", body: "The project begins with earthworks — establishing finished levels, creating platforms, and installing drainage infrastructure. This is the foundation everything else is built on." },
            { step: "04", title: "Retaining, Driveways & Structures", body: "Retaining walls, driveway construction, and building platforms are completed in logical sequence, with each element taking account of the next." },
            { step: "05", title: "Fencing, Topsoil & Lawn", body: "Once hard landscaping is complete, fencing is installed, topsoil is spread on garden and lawn areas, and the property is seeded or turfed to establish a base covering that immediately transforms the visual presentation." },
        ],
        locationNotes: [
            { location: "Kaukapakapa", slug: "kaukapakapa", note: "Complete property landscaping in JCL Projects' home territory — red clay, hill country, and Kaipara-adjacent blocks." },
            { location: "Helensville", slug: "helensville", note: "New build and established property landscaping throughout the Helensville rural catchment." },
            { location: "Wainui", slug: "wainui", note: "Lifestyle block landscaping as part of the Wainui development boom — from bare ground to finished in one project." },
            { location: "Waitoki", slug: "waitoki", note: "Remote hill country property landscaping — terrain-led design in one of Auckland's most dramatic rural settings." },
            { location: "Kumeu", slug: "kumeu", note: "Premium whole-property landscaping for Kumeu's demanding market — quality and aesthetics, every time." },
            { location: "Auckland North West", slug: "auckland-north-west", note: "North West Auckland's rural landscaping specialists — full corridor coverage, all property types." },
        ],
        galleryImages: [
            { src: "/images/service-landscaping.webp", alt: "Completed rural landscaping JCL Projects" },
            { src: "/images/services/service_property_enhancement_1771712187417.webp", alt: "Property enhancement and landscaping" },
            { src: "/images/services/service_outdoor_entertainment_1771710366474.webp", alt: "Outdoor entertaining area as part of landscaping" },
        ],
        faq: [
            { q: "What does a complete property landscaping project from JCL Projects include?", a: "Typically: earthworks to establish finished levels and drainage, retaining walls on sloped sections, driveway construction, a shed platform and structure (if required), boundary and garden fencing, topsoil placement, and lawn establishment. Additional elements — outdoor entertaining areas, water features, planting — can be included depending on scope." },
            { q: "How do you sequence a landscaping project on a new build site?", a: "Earthworks and drainage come first — always. Then retaining, then driveway and hardstanding, then any shed construction, then fencing, then topsoil and lawn. The sequence ensures each stage is accessible for machinery and not damaged by subsequent work." },
            { q: "Do you work on established properties or only new builds?", a: "Both. Established property improvement — addressing drainage problems, rebuilding failed retaining, adding a driveway extension, or a complete garden zone renovation — is equally in our scope. JCL Projects will provide an honest assessment of what will deliver the best result for your budget." },
            { q: "How long does a complete property landscaping project take?", a: "Varies significantly by scope. A straightforward new-build landscaping project — earthworks, driveway, fencing, topsoil — typically takes 2–4 weeks on site. A complex multi-stage project with significant earthworks and retaining can take 6–12 weeks." },
            { q: "Can you landscape a property in stages?", a: "Yes — staging is very common. JCL Projects will help you develop a stage plan that delivers the most critical elements first and sequences subsequent stages in a logical order that avoids rework costs." },
        ],
        relatedServices: [
            { name: "Retaining Walls", slug: "retaining-walls" },
            { name: "Driveway Construction", slug: "driveways" },
            { name: "Bulk Earthworks", slug: "earthworks" },
        ],
        schemaServiceType: "ConstructionService",
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find(s => s.slug === slug);
}
