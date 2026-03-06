import { Project, Service, Testimonial, ProcessStep, BlogPost } from "./types";

/* ── Projects ─────────────────────────────────────── */
export const projects: Project[] = [
  {
    id: "1",
    title: "14 Verona Street Residence",
    slug: "14-verona-st-pallara",
    location: "Pallara, QLD 4110",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — luxury family home",
    description:
      "A beautifully crafted family residence in Pallara featuring modern architectural lines, premium finishes, and spacious open-plan living. Designed to embrace the Queensland lifestyle with seamless indoor-outdoor flow.",
    heroImage: "/projects/14-verona-st-pallara/hero.webp",
    images: [
      "/projects/14-verona-st-pallara/gallery-01.webp",
      "/projects/14-verona-st-pallara/gallery-02.webp",
      "/projects/14-verona-st-pallara/gallery-03.webp",
      "/projects/14-verona-st-pallara/gallery-04.webp",
      "/projects/14-verona-st-pallara/gallery-05.webp",
      "/projects/14-verona-st-pallara/gallery-06.webp",
      "/projects/14-verona-st-pallara/gallery-07.webp",
      "/projects/14-verona-st-pallara/gallery-08.webp",
      "/projects/14-verona-st-pallara/gallery-09.webp",
      "/projects/14-verona-st-pallara/gallery-10.webp",
      "/projects/14-verona-st-pallara/gallery-11.webp",
      "/projects/14-verona-st-pallara/gallery-12.webp",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "25 Langford Street",
    slug: "25-langford-st",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home — contemporary design & build",
    description:
      "A striking contemporary home on Langford Street showcasing bold architectural design, high-end interiors, and expansive living spaces. Built with meticulous attention to detail and quality craftsmanship throughout.",
    heroImage: "/projects/25-langford-st/hero.webp",
    images: [
      "/projects/25-langford-st/gallery-01.webp",
      "/projects/25-langford-st/gallery-02.webp",
      "/projects/25-langford-st/gallery-03.webp",
      "/projects/25-langford-st/gallery-04.webp",
      "/projects/25-langford-st/gallery-05.webp",
      "/projects/25-langford-st/gallery-06.webp",
      "/projects/25-langford-st/gallery-07.webp",
      "/projects/25-langford-st/gallery-08.webp",
      "/projects/25-langford-st/gallery-09.webp",
      "/projects/25-langford-st/gallery-10.webp",
      "/projects/25-langford-st/gallery-11.webp",
      "/projects/25-langford-st/gallery-12.webp",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "49 Herbert Street",
    slug: "49-herbert-st",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — modern family home",
    description:
      "A sophisticated modern family home on Herbert Street featuring clean architectural lines, premium material selections, and thoughtfully designed living spaces that maximise natural light and ventilation.",
    heroImage: "/projects/49-herbert-st/hero.webp",
    images: [
      "/projects/49-herbert-st/gallery-01.webp",
      "/projects/49-herbert-st/gallery-02.webp",
      "/projects/49-herbert-st/gallery-03.webp",
      "/projects/49-herbert-st/gallery-04.webp",
      "/projects/49-herbert-st/gallery-05.webp",
      "/projects/49-herbert-st/gallery-06.webp",
      "/projects/49-herbert-st/gallery-07.webp",
      "/projects/49-herbert-st/gallery-08.webp",
      "/projects/49-herbert-st/gallery-09.webp",
      "/projects/49-herbert-st/gallery-10.webp",
      "/projects/49-herbert-st/gallery-11.webp",
      "/projects/49-herbert-st/gallery-12.webp",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "3 Brooklyn Street Residence",
    slug: "3-brooklyn-st-spring-mountain",
    location: "Spring Mountain, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home — new build",
    description:
      "A stunning custom home in the Spring Mountain estate featuring contemporary architecture, premium finishes, and generous living areas designed for modern family living in one of Brisbane's most sought-after growth corridors.",
    heroImage: "/projects/3-brooklyn-st-spring-mountain/hero.webp",
    images: [
      "/projects/3-brooklyn-st-spring-mountain/gallery-01.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-02.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-03.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-04.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-05.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-06.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-07.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-08.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-09.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-10.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-11.webp",
      "/projects/3-brooklyn-st-spring-mountain/gallery-12.webp",
    ],
    featured: false,
  },
  {
    id: "5",
    title: "3 Dart Avenue Residence",
    slug: "3-dart-ave-kingston",
    location: "Kingston, QLD 4114",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — family home",
    description:
      "A well-appointed family home in Kingston combining functional design with stylish contemporary finishes. Every space has been carefully planned to deliver comfort, practicality, and lasting quality.",
    heroImage: "/projects/3-dart-ave-kingston/hero.webp",
    images: [
      "/projects/3-dart-ave-kingston/gallery-01.webp",
      "/projects/3-dart-ave-kingston/gallery-02.webp",
      "/projects/3-dart-ave-kingston/gallery-03.webp",
      "/projects/3-dart-ave-kingston/gallery-04.webp",
      "/projects/3-dart-ave-kingston/gallery-05.webp",
      "/projects/3-dart-ave-kingston/gallery-06.webp",
      "/projects/3-dart-ave-kingston/gallery-07.webp",
      "/projects/3-dart-ave-kingston/gallery-08.webp",
      "/projects/3-dart-ave-kingston/gallery-09.webp",
      "/projects/3-dart-ave-kingston/gallery-10.webp",
      "/projects/3-dart-ave-kingston/gallery-11.webp",
      "/projects/3-dart-ave-kingston/gallery-12.webp",
    ],
    featured: false,
  },
  {
    id: "6",
    title: "3 Stanley Street Residence",
    slug: "3-stanley-st-mount-gravatt",
    location: "Mount Gravatt, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — luxury home",
    description:
      "An impressive custom build in Mount Gravatt showcasing architectural excellence and superior craftsmanship. Featuring high ceilings, premium kitchen design, and beautifully appointed interiors throughout.",
    heroImage: "/projects/3-stanley-st-mount-gravatt/hero.webp",
    images: [
      "/projects/3-stanley-st-mount-gravatt/gallery-01.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-02.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-03.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-04.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-05.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-06.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-07.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-08.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-09.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-10.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-11.webp",
      "/projects/3-stanley-st-mount-gravatt/gallery-12.webp",
    ],
    featured: true,
  },
  {
    id: "7",
    title: "35 Ayesha Place",
    slug: "35-ayesha-place-calamvale",
    location: "Calamvale, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home — modern family build",
    description:
      "A modern family home in Calamvale designed with thoughtful attention to space, light, and lifestyle. Featuring contemporary interiors, quality finishes, and functional living areas perfect for family life.",
    heroImage: "/projects/35-ayesha-place-calamvale/hero.webp",
    images: [
      "/projects/35-ayesha-place-calamvale/gallery-01.webp",
      "/projects/35-ayesha-place-calamvale/gallery-02.webp",
      "/projects/35-ayesha-place-calamvale/gallery-03.webp",
      "/projects/35-ayesha-place-calamvale/gallery-04.webp",
      "/projects/35-ayesha-place-calamvale/gallery-05.webp",
      "/projects/35-ayesha-place-calamvale/gallery-06.webp",
      "/projects/35-ayesha-place-calamvale/gallery-07.webp",
      "/projects/35-ayesha-place-calamvale/gallery-08.webp",
      "/projects/35-ayesha-place-calamvale/gallery-09.webp",
      "/projects/35-ayesha-place-calamvale/gallery-10.webp",
      "/projects/35-ayesha-place-calamvale/gallery-11.webp",
      "/projects/35-ayesha-place-calamvale/gallery-12.webp",
    ],
    featured: false,
  },
  {
    id: "8",
    title: "8 Vineyard Drive",
    slug: "8-vineyard-drive-greenbank",
    location: "Greenbank, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — acreage home",
    description:
      "A spacious acreage home in Greenbank set against lush surroundings. This build features expansive living areas, a chef-grade kitchen, and outdoor entertaining spaces that make the most of the tranquil semi-rural setting.",
    heroImage: "/projects/8-vineyard-drive-greenbank/hero.webp",
    images: [
      "/projects/8-vineyard-drive-greenbank/gallery-01.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-02.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-03.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-04.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-05.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-06.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-07.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-08.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-09.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-10.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-11.webp",
      "/projects/8-vineyard-drive-greenbank/gallery-12.webp",
    ],
    featured: true,
  },
  {
    id: "9",
    title: "Premium Custom Build",
    slug: "hi-def-project",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build — premium residence",
    description:
      "A premium custom residence showcasing ARC Builders' commitment to exceptional quality. This project features striking exterior design, luxurious interiors, and the finest material selections throughout.",
    heroImage: "/projects/hi-def-project/hero.webp",
    images: [
      "/projects/hi-def-project/gallery-01.webp",
      "/projects/hi-def-project/gallery-02.webp",
      "/projects/hi-def-project/gallery-03.webp",
      "/projects/hi-def-project/gallery-04.webp",
      "/projects/hi-def-project/gallery-05.webp",
      "/projects/hi-def-project/gallery-06.webp",
      "/projects/hi-def-project/gallery-07.webp",
      "/projects/hi-def-project/gallery-08.webp",
      "/projects/hi-def-project/gallery-09.webp",
      "/projects/hi-def-project/gallery-10.webp",
      "/projects/hi-def-project/gallery-11.webp",
      "/projects/hi-def-project/gallery-12.webp",
    ],
    featured: false,
  },
];

/* ── Services ─────────────────────────────────────── */
export const residentialServices: Service[] = [
  {
    id: "1",
    title: "Custom Homes",
    description:
      "From concept to completion, we design and build bespoke homes tailored to your lifestyle — including Vastu-compliant designs for families who value traditional principles in a modern Australian home.",
    icon: "Home",
    href: "/residential#custom-homes",
  },
  {
    id: "2",
    title: "Renovations",
    description:
      "Transform your existing home with expertly managed renovations that enhance space, light, and value.",
    icon: "Hammer",
    href: "/residential#renovations",
  },
  {
    id: "3",
    title: "Extensions",
    description:
      "Expand your living area with thoughtfully designed extensions that blend seamlessly with your home.",
    icon: "Expand",
    href: "/residential#extensions",
  },
  {
    id: "4",
    title: "Granny Flats & Duplex",
    description:
      "Maximise your property's potential with dual-occupancy builds and self-contained granny flats — ideal for multi-generational families and investment properties.",
    icon: "Building2",
    href: "/residential#granny-flats",
  },
  {
    id: "5",
    title: "Designer Homes",
    description:
      "Premium architectural homes with exceptional finishes. We specialise in multi-generational living, puja rooms, and designs that honour cultural values while embracing modern Australian living.",
    icon: "Gem",
    href: "/residential#designer-homes",
  },
  {
    id: "6",
    title: "Units & Townhouses",
    description:
      "Multi-dwelling developments built to the highest standards, maximising livability and return on investment.",
    icon: "Building",
    href: "/residential#units",
  },
];

export const commercialServices: Service[] = [
  {
    id: "7",
    title: "Shop Fitouts",
    description:
      "Complete commercial fitout solutions for retail spaces, delivering on time and on budget.",
    icon: "Store",
    href: "/commercial#shop-fitouts",
  },
  {
    id: "8",
    title: "Medical Centres",
    description:
      "Specialist medical centre construction meeting all healthcare regulations and compliance requirements.",
    icon: "HeartPulse",
    href: "/commercial#medical-centres",
  },
  {
    id: "9",
    title: "Childcare Centres",
    description:
      "Purpose-built childcare facilities designed for safety, functionality, and inspiring learning environments.",
    icon: "Baby",
    href: "/commercial#childcare",
  },
  {
    id: "10",
    title: "Commercial Buildings",
    description:
      "End-to-end commercial construction for offices, warehouses, and mixed-use developments.",
    icon: "Factory",
    href: "/commercial#commercial-buildings",
  },
];

/* ── Testimonials ─────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Raj & Anita Patel",
    role: "Vastu-Compliant Custom Home — Brisbane",
    quote:
      "ARC Builders understood exactly what we needed — a modern home that respects Vastu principles. From the north-east entrance to the kitchen placement, every detail was considered. Transparent pricing and beautiful craftsmanship.",
  },
  {
    id: "2",
    name: "Vikram & Sunita Mehta",
    role: "Multi-Generational Home — Sunnybank Hills",
    quote:
      "We wanted a home where our parents and kids could live together comfortably, with Vastu-compliant design and a proper puja room. ARC delivered beyond our expectations. They truly understand Indian-Australian family needs.",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    role: "Medical Centre — Brisbane South",
    quote:
      "Building a medical centre has strict requirements. ARC Builders navigated every regulation with expertise and delivered a facility our patients love. As an NRI, it was refreshing to work with a team that understood my vision.",
  },
  {
    id: "4",
    name: "Amit & Kavita Singh",
    role: "Duplex Investment — Logan",
    quote:
      "As NRI investors, we needed a builder we could trust with our investment. ARC's transparent fixed-price contracts and regular updates gave us complete peace of mind. The duplex quality exceeded our expectations.",
  },
];

/* ── Process Steps ────────────────────────────────── */
export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We meet to understand your vision, requirements, and budget. We listen first, advise second, and always put your goals at the centre.",
  },
  {
    id: 2,
    title: "Planning & Design",
    description:
      "Our team develops detailed plans, provides transparent pricing upfront with no hidden costs, and manages all council approvals.",
  },
  {
    id: 3,
    title: "Construction",
    description:
      "Experienced tradespeople bring your project to life with meticulous craftsmanship, regular updates, and on-time delivery.",
  },
  {
    id: 4,
    title: "Completion & Handover",
    description:
      "A thorough quality inspection, walkthrough, and handover. We stand behind our work with comprehensive warranties.",
  },
];

/* ── Blog Posts ────────────────────────────────────── */
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Vastu-Compliant Home Design in Australia: A Complete Guide for Indian Families",
    slug: "vastu-compliant-home-design-australia",
    excerpt:
      "Everything you need to know about building a Vastu-compliant home in Queensland — from plot selection and entrance placement to room orientation and modern adaptations.",
    content: `For Indian-Australian families, building a new home is the perfect opportunity to incorporate Vastu Shastra principles from the ground up. Unlike renovating, a new build lets you design every element — entrance direction, room placement, kitchen orientation — according to Vastu guidelines while meeting Australian building standards.

## What Is Vastu Shastra?

Vastu Shastra is an ancient Indian science of architecture and spatial arrangement. Similar to Feng Shui but rooted in Vedic tradition, Vastu provides guidelines for designing homes that promote health, prosperity, and harmony by aligning with natural elements and directions.

For NRI families in Australia, Vastu represents a meaningful connection to cultural roots while building a modern home.

## Key Vastu Principles for Australian Homes

### 1. Plot Selection & Orientation
- **Square or rectangular plots** are considered most auspicious
- **North-east facing plots** are ideal for overall prosperity
- In Queensland, north-facing homes also maximise natural light — a win for both Vastu and energy efficiency
- Avoid irregular or T-shaped plots where possible

### 2. Main Entrance (Brahmasthan)
The entrance is the most important Vastu element:
- **North, north-east, or east-facing** entrances are considered most auspicious
- The entrance should be well-lit and welcoming
- Avoid entrances facing south-west
- In Australian estate developments, we can work with existing lot orientations and adjust internal layouts accordingly

### 3. Room Placement
- **Master bedroom**: South-west corner for stability and grounding
- **Kitchen**: South-east corner (Agneya), associated with the fire element
- **Puja room**: North-east corner (Ishanya), the most sacred direction
- **Living areas**: North or east for positive energy flow
- **Bathrooms**: North-west or west side
- **Children's rooms**: West or north-west

### 4. Kitchen Design (Vastu Agneya)
The kitchen is particularly important in Vastu:
- The cook should face east while cooking
- The stove should be in the south-east corner
- Water elements (sink, dishwasher) should be in the north-east of the kitchen
- Avoid placing the kitchen directly above or below a bedroom

### 5. Puja Room Design
A dedicated puja room is essential for many Indian-Australian families:
- Ideally located in the north-east corner of the home
- Should have adequate ventilation and natural light
- The idol or image should face west (so you face east while praying)
- Use marble or light-coloured stone flooring
- Incorporate niches for diyas and storage for puja items

## Modern Adaptations for Queensland Homes

Not every Vastu principle can be applied literally in Australian housing estates. Here's how we adapt:

- **Fixed lot orientations**: We adjust internal layouts to maximise Vastu compliance regardless of the lot's street frontage
- **Building codes**: Australian building codes take priority, but Vastu and code compliance are rarely in conflict
- **Climate considerations**: Queensland's subtropical climate means north-facing living areas are ideal for both Vastu and passive solar design
- **Multi-generational layouts**: We design homes with separate wings or granny flats that maintain Vastu principles for each living space

## Why Build Vastu-Compliant with ARC?

At ARC Builders, we understand the cultural significance of Vastu for Indian-Australian families. We work with you and, if desired, your Vastu consultant to ensure every principle is respected — from the initial site assessment through to construction.

Our transparent pricing means you know exactly what Vastu-specific features cost, with no hidden surprises.

**Ready to build a Vastu-compliant home in Queensland?** [Contact us](/contact) for a free consultation with our team.`,
    category: "Vastu & Design",
    author: "ARC Builders Team",
    date: "2025-11-15",
    readTime: "10 min read",
    heroImage: "/projects/14-verona-st-pallara/gallery-01.webp",
    tags: ["vastu shastra", "indian homes", "custom homes", "NRI", "queensland"],
  },
  {
    id: "2",
    title: "Building a Multi-Generational Home in Queensland: For Indian-Australian Families",
    slug: "multi-generational-home-indian-australian",
    excerpt:
      "How to design a home that comfortably accommodates parents, grandparents, and children under one roof — with privacy, cultural spaces, and Vastu principles in mind.",
    content: `Multi-generational living is a cornerstone of Indian culture, and for NRI families in Australia, building a home that accommodates everyone — parents, grandparents, and children — is often the top priority.

## Why Multi-Generational Homes Are Growing in Australia

The Australian Bureau of Statistics reports that multi-generational households are one of the fastest-growing household types in the country. For Indian-Australian families, this isn't a trend — it's tradition.

Benefits include:
- **Shared childcare and eldercare** responsibilities
- **Stronger family bonds** across generations
- **Cost efficiency** compared to maintaining multiple homes
- **Cultural continuity** — grandparents pass on language, values, and traditions
- **Support for elderly parents** who may have migrated as dependents

## Key Design Considerations

### 1. Private Zones Within a Shared Home
The key to successful multi-generational living is balancing togetherness with privacy:
- **Separate master suites** with ensuite bathrooms for parents and grandparents
- **Private sitting areas** so grandparents have their own living space
- **Separate entry points** or a connected granny flat for true independence
- **Soundproofing** between bedrooms and living areas

### 2. Shared Community Spaces
Equally important are the spaces where family comes together:
- **Large open-plan kitchen and dining** for family meals
- **Outdoor entertaining areas** for gatherings and celebrations
- **Puja room** accessible to all family members
- **Media/living room** large enough for the whole family

### 3. Kitchen Design for Indian Cooking
Indian cooking has specific requirements that standard Australian kitchens don't address:
- **Powerful rangehood** (900CFM+) to handle spice-heavy cooking
- **Separate masala/spice kitchen** or butler's pantry for heavy cooking
- **Gas cooktop** for tawa, kadhai, and pressure cooker cooking
- **Extra-deep sink** for washing large vessels
- **Ample pantry storage** for bulk grains, lentils, and spices
- **Tandoor or outdoor cooking area** for weekend family cooking

### 4. Puja Room & Cultural Spaces
- Dedicated **puja room** in the north-east (Vastu-compliant)
- Space for a **shoe rack** near the entrance (shoes-off culture)
- **Havan kund area** in the backyard for outdoor ceremonies
- **Guest bedroom** for visiting relatives from India or interstate

### 5. Vastu Integration
- Home entrance facing north-east or east
- Kitchen in the south-east corner
- Master bedroom in the south-west
- Grandparents' suite in the south or west wing
- Children's rooms in the west or north-west

## Floor Plan Ideas

### Option A: Single-Storey with Wing Layout
A ground-floor home with separate wings — parent wing, grandparent wing, and children's wing — connected by shared living and kitchen spaces. Ideal for families with elderly parents who prefer single-level living.

### Option B: Double-Storey with Ground-Floor Suite
Parents and children upstairs, grandparents' self-contained suite on the ground floor with its own bathroom, kitchenette, and sitting room. Ground floor includes shared kitchen and living areas.

### Option C: Main Home + Attached Granny Flat
A full-sized family home with an attached or detached granny flat sharing the property. Each dwelling is self-contained but connected. This option also provides rental income potential if circumstances change.

## Costs and Budget Planning

A multi-generational home in Queensland typically costs:
- **4-5 bedroom single-storey**: $650,000 – $1,200,000
- **5-6 bedroom double-storey**: $800,000 – $1,500,000+
- **Main home + granny flat**: $700,000 – $1,300,000

These include puja room, masala kitchen, upgraded ventilation, and standard Vastu-compliant layout adjustments.

## Building with ARC

ARC Builders specialises in homes for Indian-Australian families. We understand multi-generational needs, Vastu principles, and the specific kitchen and cultural space requirements that make a house feel like home.

**Planning a multi-generational home?** [Contact us](/contact) for a free design consultation.`,
    category: "Family Living",
    author: "ARC Builders Team",
    date: "2025-10-28",
    readTime: "9 min read",
    heroImage: "/projects/3-brooklyn-st-spring-mountain/gallery-01.webp",
    tags: ["multi-generational", "indian family", "granny flat", "vastu", "NRI"],
  },
  {
    id: "3",
    title: "Understanding the Building Process: What to Expect When Building with ARC",
    slug: "building-process-what-to-expect",
    excerpt:
      "A step-by-step walkthrough of the entire building process, from initial consultation to final handover, so you know exactly what to expect.",
    content: `Building a home can feel overwhelming, especially if it's your first time navigating the Australian building process. At ARC Builders, we guide you through every step with clear communication and no surprises. Here's what to expect.

## Step 1: Initial Consultation (Week 1-2)

Everything starts with a conversation. We meet at your site or our office to discuss:
- Your vision and lifestyle requirements
- Cultural and Vastu preferences
- Budget expectations and financing
- Site conditions and feasibility
- Timeline and key milestones

This consultation is completely free and obligation-free. We encourage you to bring your family — including parents and grandparents — so we understand everyone's needs.

## Step 2: Design & Planning (Weeks 3-10)

Once you decide to proceed, our design team develops detailed plans:
- Architectural drawings and 3D renders
- Vastu-compliant layout optimisation
- Engineering specifications
- Material selections and finishes
- Council submission and approvals

You're involved at every stage. We don't proceed until you're 100% happy with the design.

## Step 3: Transparent Quoting (Weeks 10-12)

This is where ARC differs from most builders. We provide a fully itemised, transparent quote with:
- No hidden costs or allowances
- Every material and finish specified
- Clear inclusions and exclusions
- Fixed price (unless you request changes)

For NRI families, this transparency is particularly important — you know exactly what you're investing before committing.

## Step 4: Construction (Weeks 13-40+)

With approvals in hand and the contract signed, construction begins:
- **Foundation and slab** — the base of your home
- **Frame and roof** — the structure takes shape
- **Lock-up** — windows, doors, and external cladding
- **Fit-out** — plumbing, electrical, plastering
- **Finishes** — painting, flooring, cabinetry, puja room fitout
- **Landscaping** — driveways, paths, outdoor areas

Throughout construction, you receive regular photo updates and site meetings. If family members are interstate or overseas, we provide video walkthroughs.

## Step 5: Handover (Final Week)

Before handover, we conduct:
- A comprehensive quality inspection
- A full walkthrough with you and your family
- Any minor adjustments or touch-ups
- Complete documentation and warranty handover
- A small puja/blessing ceremony if desired

Your new home is ready to move in.

## Why Process Matters

A clear, well-managed process is the difference between a stressful build and an enjoyable one. At ARC, we've refined our process over 10+ years to ensure every client — whether first-time builders or experienced investors — has confidence from start to finish.

**Ready to start your building journey?** [Get in touch](/contact) today.`,
    category: "Building Process",
    author: "ARC Builders Team",
    date: "2025-09-12",
    readTime: "7 min read",
    heroImage: "/projects/49-herbert-st/gallery-01.webp",
    tags: ["building process", "new home", "construction", "timeline", "NRI guide"],
  },
  {
    id: "4",
    title: "NRI Property Investment in Queensland: Building Your Dream Home from Overseas",
    slug: "nri-property-investment-queensland",
    excerpt:
      "A comprehensive guide for Non-Resident Indians looking to build or invest in property in Queensland, covering legal requirements, financing, and how to manage a build remotely.",
    content: `Many Indian families living in Australia — or still based in India — are looking to invest in property in Queensland. Whether it's a family home for when you relocate, a rental investment, or a home for your children studying in Brisbane, building in Australia offers strong returns and lifestyle benefits.

## Why Queensland for NRI Investment?

Queensland, particularly South-East Queensland (Brisbane, Gold Coast, Sunshine Coast), offers:
- **Strong capital growth** — Brisbane property values have grown consistently
- **Population growth** — interstate migration driving demand
- **Olympic infrastructure** — Brisbane 2032 Olympics boosting regional development
- **Affordable relative to Sydney/Melbourne** — better value per square metre
- **Lifestyle appeal** — subtropical climate, multicultural communities, excellent schools

## Legal Requirements for NRI Buyers

### Australian Citizens / Permanent Residents
If you hold Australian citizenship or permanent residency, you can buy and build without restrictions.

### Temporary Visa Holders
If you're on a temporary visa (student, work visa, etc.), you need **Foreign Investment Review Board (FIRB)** approval to purchase property. You can only buy new dwellings or vacant land for new construction — not established homes.

### Key FIRB Rules:
- Application fee varies based on property value
- You must build within 24 months of purchasing vacant land
- If you leave Australia, you may need to sell the property
- Always consult a solicitor for your specific visa situation

## Financing Your Build

### For Australian Residents
Standard home loans apply. Most major banks offer construction loans that release funds in stages:
1. Deposit (usually 10-20%)
2. Slab/foundation stage
3. Frame stage
4. Lock-up stage
5. Fit-out stage
6. Completion

### For Overseas-Based NRIs
Financing is more complex. Options include:
- **Australian bank loans** — some banks lend to non-residents, typically requiring 30-40% deposit
- **Indian bank loans** — some Indian banks offer overseas property loans
- **Self-funded** — many NRI investors fund builds through savings or family
- **Joint ownership** — building with an Australian-based family member

## Managing a Build Remotely

If you're based interstate or overseas, ARC Builders makes it easy:
- **Video consultations** for design and planning discussions
- **3D renders and virtual walkthroughs** before construction
- **Weekly photo updates** during construction
- **Video call site meetings** at every key milestone
- **Single point of contact** — your dedicated project manager
- **Transparent portal access** — see your budget and progress anytime

## What to Build for Maximum Returns

### Owner-Occupier (Family Home)
Build what your family needs — Vastu-compliant layout, puja room, multi-generational design. 4-5 bedrooms in growth suburbs like Sunnybank, Eight Mile Plains, or Calamvale.

### Investment Property
Focus on rental yield and capital growth:
- **Duplexes** — two rental incomes from one block
- **Townhouses** — lower entry cost, strong demand
- **House + granny flat** — dual income stream

### Student Accommodation
If building near universities (UQ, Griffith, QUT), consider:
- Multi-bedroom layouts with shared living
- Proximity to public transport
- Low-maintenance finishes

## Why ARC Builders for NRI Clients

We understand the unique needs of NRI investors and Indian-Australian families:
- **Vastu-compliant designs** available for all home styles
- **Remote project management** with video updates
- **Transparent fixed-price contracts** — no surprises
- **Cultural understanding** — puja rooms, masala kitchens, multi-generational layouts
- **QBCC licensed** — fully insured and warranties included

**Interested in building or investing in Queensland?** [Contact us](/contact) for a free consultation — we're happy to arrange a video call if you're interstate or overseas.`,
    category: "Investment",
    author: "ARC Builders Team",
    date: "2025-08-05",
    readTime: "9 min read",
    heroImage: "/projects/3-dart-ave-kingston/gallery-01.webp",
    tags: ["NRI investment", "property", "queensland", "FIRB", "building costs"],
  },
  {
    id: "5",
    title: "Vastu Kitchen Design for Indian-Australian Homes: Principles & Practical Tips",
    slug: "vastu-kitchen-design-indian-australian",
    excerpt:
      "How to design a kitchen that follows Vastu Shastra principles while meeting the practical demands of Indian cooking in an Australian home.",
    content: `The kitchen is the heart of every Indian home — it's where family gathers, where traditions are passed down through recipes, and where daily nourishment begins. For Indian-Australian families building a new home, getting the kitchen right means balancing Vastu Shastra principles with the practical demands of Indian cooking.

## Vastu Principles for Kitchen Placement

### Direction
- The kitchen should be in the **south-east corner** of the home (Agneya direction), governed by the fire element (Agni)
- If south-east isn't possible, **north-west** is the second-best option
- **Never** place the kitchen in the north-east (sacred/water element) or south-west (earth element)

### Cook's Orientation
- The person cooking should **face east** — this is considered auspicious and aligns with the sunrise/positive energy
- Design the kitchen layout so the primary cooking station faces east

### Fire & Water Separation
- The **stove/cooktop** (fire element) and **sink** (water element) should not be directly adjacent
- Ideally, the sink is in the north-east corner of the kitchen and the stove in the south-east
- The fridge (water element) should also be separated from the stove

### Storage
- Store **grains and groceries** in the south-west area of the kitchen
- **Overhead cabinets** on the southern and western walls
- Keep the **north-east corner** of the kitchen clear or minimal

## Practical Design for Indian Cooking

Beyond Vastu, Indian cooking has specific requirements most Australian kitchen designs don't address:

### Masala Kitchen (Spice Kitchen)
A dedicated second kitchen or enclosed cooking area for heavy Indian cooking:
- Strong **commercial-grade rangehood** (800-1200 CFM) to handle tandoori, frying, and spice grinding
- **Gas cooktop** — essential for tawa cooking, tempering (tadka), and pressure cooking
- **Splashback tiles** that are easy to clean (avoid exposed grout lines)
- **Extra-deep stainless steel sink** for washing large vessels, pressure cookers, and thalis
- **Separate from the main kitchen** — keeps the presentation kitchen clean for entertaining

### Main Kitchen (Show Kitchen)
The beautiful kitchen your guests see:
- **Island bench** for serving and casual dining
- Modern finishes — stone benchtops, quality cabinetry
- **Induction cooktop** for everyday cooking
- **Butler's pantry** connecting to the masala kitchen

### Pantry & Storage
Indian households typically store more dry goods than the average Australian home:
- **Walk-in pantry** or large pull-out pantry system
- Dedicated storage for **25kg rice bags, dal, atta, spices**
- **Lazy Susan** corner cabinets for spice jars
- **Steel wire baskets** for vegetable storage (onions, potatoes, garlic)

### Ventilation
This cannot be overstated:
- A **ducted rangehood** (not recirculating) vented to the exterior
- Minimum **900 CFM** for the masala kitchen
- **Separate ventilation** for masala kitchen and main kitchen
- Consider a **window** in the masala kitchen for cross-ventilation

## Design Ideas That Blend Vastu & Modern Style

### Colour Palette (Vastu-Aligned)
- **South-east kitchen**: Orange, red, or warm earthy tones (fire element colours)
- **North-west kitchen**: White, silver, or cream tones
- Avoid black or very dark colours for the kitchen (considered inauspicious in Vastu)

### Materials
- **Natural stone benchtops** — granite or quartzite (avoid marble near cooking zones as it stains)
- **Timber or warm-toned cabinetry** — complements Vastu's fire element
- **Brass or gold hardware** — culturally resonant and on-trend

### Layout
- **L-shaped or U-shaped** layouts work best for Vastu compliance
- Keep the **centre of the kitchen clear** — avoid islands blocking energy flow (though modern interpretations are flexible)
- **Pooja niche** near the kitchen entry for a small diya or Ganesh idol

## Costs for a Vastu Kitchen

In a new build or major renovation:
- **Main kitchen (premium)**: $35,000 – $65,000
- **Masala kitchen addition**: $15,000 – $30,000
- **Upgraded rangehood/ventilation**: $2,000 – $5,000
- **Butler's pantry**: $10,000 – $20,000

At ARC Builders, all kitchen costs are fully specified in your quote — no allowances, no surprises.

**Designing your dream Indian-Australian kitchen?** [Let's talk](/contact) — we'll create a kitchen that honours your traditions and fits your lifestyle.`,
    category: "Vastu & Design",
    author: "ARC Builders Team",
    date: "2025-07-18",
    readTime: "8 min read",
    heroImage: "/projects/3-stanley-st-mount-gravatt/gallery-01.webp",
    tags: ["vastu kitchen", "indian cooking", "masala kitchen", "kitchen design", "NRI"],
  },
  {
    id: "6",
    title: "Why Transparent Pricing Matters: The Hidden Costs Most Builders Won't Tell You",
    slug: "transparent-pricing-hidden-costs",
    excerpt:
      "Most building quotes look great on paper, but hide costs in allowances and provisional sums. Here's how to protect yourself — especially important for NRI families investing from overseas.",
    content: `If you've ever received a building quote that seemed too good to be true, it probably was. The building industry has a transparency problem, and it costs homeowners thousands of dollars every year. For NRI families building from interstate or overseas, this risk is even greater.

## The Problem with "Allowances"

Many builders use allowances and provisional sums (PS items) to keep their headline price low. An allowance is essentially a placeholder — "we've allocated $5,000 for your kitchen tapware." But when you actually select your tapware, it costs $8,000. That $3,000 difference? That's a variation you have to pay.

Common areas where allowances hide true costs:
- Kitchen appliances and fixtures
- Bathroom tiles and fittings
- Flooring materials
- Electrical and lighting
- Landscaping
- Driveways
- Puja room finishes and marble work

## How Variations Add Up

It's not uncommon for homeowners to face $50,000–$100,000+ in variations on a standard build. By the time you realise the true cost, you're already committed and have limited negotiating power.

For NRI families managing a build remotely, variations are particularly concerning — you may not be there to catch discrepancies or challenge charges.

## The ARC Approach to Pricing

We do things differently:

### 1. Fully Specified Quotes
Every item in your quote is specified — brand, model, colour, and price. No allowances, no provisional sums. This includes speciality items like puja room marble, masala kitchen rangehoods, and Vastu-specific layout adjustments.

### 2. Selection Before Signing
We help you select all your finishes and materials BEFORE you sign the contract. This means the price you agree to is the price you pay.

### 3. Fixed Price Contracts
Once the contract is signed, the price is fixed. The only variations that occur are ones YOU request.

### 4. Open Book Policy
You can see exactly where every dollar goes. We don't hide margins in material costs or subcontractor quotes.

### 5. Remote Transparency
For clients who aren't local, we provide:
- Digital budget tracking accessible anytime
- Photo and video updates at every stage
- Video call meetings for any decisions needed
- Written approval required for any changes

## How to Protect Yourself

When comparing quotes from different builders:
1. Count the number of allowances and PS items
2. Ask for specific product selections, not dollar amounts
3. Request a fixed-price contract
4. Ask about the builder's average variation percentage
5. Check reviews for mentions of cost blowouts
6. Ask how they handle communication with interstate/overseas clients

## The Bottom Line

The cheapest quote is rarely the cheapest build. A transparent, fully specified quote from a reputable builder will almost always deliver better value than a low-ball quote full of allowances.

**Want a truly transparent quote?** [Contact ARC Builders](/contact) for an honest, no-surprises approach to pricing.`,
    category: "Industry Insights",
    author: "ARC Builders Team",
    date: "2025-06-22",
    readTime: "7 min read",
    heroImage: "/projects/8-vineyard-drive-greenbank/gallery-01.webp",
    tags: ["pricing", "transparency", "NRI", "building industry", "contracts"],
  },
];

/* ── Navigation ───────────────────────────────────── */
export const navLinks = [

  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ── Company info ─────────────────────────────────── */
export const companyInfo = {
  name: "ARC Builders",
  fullName: "Aesthetic Residential Commercial Builders",
  phone: "0411 878 438",
  email: "info@arcbuilders.com.au",
  address: "PO Box 1345, Sunnybank Hills QLD 4109",
  experience: "10+",
  tagline: "Builders with a difference",
  qbccLicence: "15090326",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};
