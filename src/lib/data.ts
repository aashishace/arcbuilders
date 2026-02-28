import { Project, Service, Testimonial, ProcessStep, BlogPost } from "./types";

/* ── Projects ─────────────────────────────────────── */
export const projects: Project[] = [
  {
    id: "1",
    title: "The Riverview Residence",
    slug: "riverview-residence",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2025",
    architect: "ARC Design Studio",
    scope: "Full design & build — 4 bed, 3 bath luxury home",
    description:
      "A stunning waterfront residence featuring floor-to-ceiling glass, open-plan living, and a seamless indoor-outdoor flow. Every detail was meticulously crafted to complement the riverside setting.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Sunnybank Hills Modern",
    slug: "sunnybank-hills-modern",
    location: "Sunnybank Hills, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom double-storey home",
    description:
      "A contemporary double-storey home with clean lines, natural materials, and expansive living areas. Designed for a growing family with an emphasis on natural light and ventilation.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Greenfield Duplex",
    slug: "greenfield-duplex",
    location: "Logan, QLD",
    type: "duplex",
    year: "2024",
    scope: "Dual occupancy duplex",
    description:
      "A thoughtfully designed dual-occupancy duplex that maximises space and returns. Each unit features 3 bedrooms, modern finishes, and private outdoor areas.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Heritage Kitchen Renovation",
    slug: "heritage-kitchen-renovation",
    location: "Paddington, QLD",
    type: "renovation",
    year: "2023",
    scope: "Heritage kitchen & bathroom renovation",
    description:
      "A sensitive renovation of a heritage Queenslander, blending period character with contemporary kitchen and bathroom design.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    ],
    featured: false,
  },
  {
    id: "5",
    title: "Southside Medical Centre",
    slug: "southside-medical-centre",
    location: "Brisbane South, QLD",
    type: "commercial",
    year: "2024",
    scope: "Full commercial fitout — medical centre",
    description:
      "A state-of-the-art medical centre built to strict healthcare regulations. Features include six consulting rooms, a reception area, and accessible design throughout.",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    ],
    featured: true,
  },
  {
    id: "6",
    title: "Garden Extension Retreat",
    slug: "garden-extension-retreat",
    location: "Mount Gravatt, QLD",
    type: "extension",
    year: "2023",
    scope: "Rear extension with granny flat",
    description:
      "A seamless rear extension that doubled the living space of an existing family home, incorporating a self-contained granny flat with separate access.",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
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
      "From concept to completion, we design and build bespoke homes tailored to your lifestyle, site, and budget.",
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
      "Maximise your property's potential with dual-occupancy builds and self-contained granny flats.",
    icon: "Building2",
    href: "/residential#granny-flats",
  },
  {
    id: "5",
    title: "Designer Homes",
    description:
      "Premium architectural homes with exceptional finishes and cutting-edge design for the discerning homeowner.",
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
    name: "Sarah & James Mitchell",
    role: "Custom Home — Brisbane",
    quote:
      "ARC Builders turned our dream into reality. Their attention to detail and transparent pricing made the entire process stress-free. We couldn't be happier with our new home.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Duplex Development — Logan",
    quote:
      "Professional from start to finish. The team communicated clearly at every stage and delivered a quality duplex that exceeded our expectations. Highly recommended.",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    role: "Medical Centre — Brisbane South",
    quote:
      "Building a medical centre has strict requirements. ARC Builders navigated every regulation with expertise and delivered a facility our patients love.",
  },
  {
    id: "4",
    name: "David & Karen O'Brien",
    role: "Renovation — Paddington",
    quote:
      "Our heritage home needed careful hands. ARC understood the character of our Queenslander and delivered a stunning modern kitchen while respecting the original charm.",
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
    title: "How Much Does It Cost to Build a Custom Home in Queensland?",
    slug: "cost-to-build-custom-home-queensland",
    excerpt:
      "A comprehensive guide to understanding the costs involved in building a custom home in Queensland, from land preparation to final finishes.",
    content: `Building a custom home in Queensland is one of the most significant investments you'll ever make. Understanding the true costs upfront helps you plan effectively and avoid surprises.

## Average Build Costs in Queensland (2025)

The cost of building a custom home in Queensland typically ranges from **$1,800 to $3,500+ per square metre**, depending on the level of customisation, finishes, and complexity of the design.

For a standard 4-bedroom, 2-bathroom home of approximately 250 sqm, you can expect:

- **Budget builds**: $450,000 – $600,000
- **Mid-range builds**: $600,000 – $900,000
- **Premium builds**: $900,000 – $1,500,000+

## What Factors Affect the Cost?

### 1. Site Conditions
Sloping blocks, rocky terrain, or flood-prone areas can increase site preparation costs significantly. A geotechnical report is essential before planning begins.

### 2. Design Complexity
Single-storey vs double-storey, unique architectural features, large window spans, and curved walls all impact costs. The more complex the design, the more skilled labour and materials required.

### 3. Material Selection
From structural elements to internal finishes, material choices dramatically affect the final price. Premium stone benchtops, engineered timber flooring, and high-end appliances can add $50,000–$150,000.

### 4. Council Requirements
Different councils across Queensland have varying requirements for setbacks, overlays, and approvals. These can affect design options and add to planning costs.

## Why Transparent Pricing Matters

At ARC Builders, we believe in transparent upfront pricing with no hidden costs. Before construction begins, you'll have a detailed, itemised quote covering every aspect of your build. No surprises. No variations you didn't agree to.

## How to Get Started

The first step is a free consultation. We'll discuss your vision, assess your site, and provide realistic guidance on budget expectations. From there, we develop detailed plans and a comprehensive quote before any work begins.

**Ready to understand the true cost of your dream home?** [Contact us](/contact) for an obligation-free consultation.`,
    category: "Building Costs",
    author: "ARC Builders Team",
    date: "2025-11-15",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    tags: ["building costs", "custom homes", "queensland", "budgeting"],
  },
  {
    id: "2",
    title: "Renovate or Rebuild? How to Decide What's Best for Your Property",
    slug: "renovate-or-rebuild-guide",
    excerpt:
      "Deciding between renovating your existing home or knocking down and rebuilding? Here's a practical guide to help you make the right choice.",
    content: `One of the biggest decisions homeowners face is whether to renovate their existing home or demolish and start fresh. Both options have pros and cons, and the right choice depends on your specific situation.

## When Renovation Makes Sense

### Structural Integrity
If your home has good bones — solid foundations, sound framing, and compliant plumbing/electrical — renovation can be a cost-effective way to modernise.

### Heritage or Character Value
Queenslanders and heritage homes have unique character that's impossible to replicate. A well-executed renovation preserves this charm while adding modern functionality.

### Budget Constraints
Targeted renovations (kitchens, bathrooms, extensions) can achieve dramatic results for $100,000–$400,000, significantly less than a full rebuild.

### Council Zoning
Some heritage overlays or neighbourhood character provisions may restrict demolition. Always check with your local council first.

## When Rebuilding Makes Sense

### Major Structural Issues
If foundations are compromised, walls are shifting, or the framing is deteriorated, renovation costs can quickly exceed rebuild costs.

### Layout Limitations
Older homes often have small rooms, poor orientation, and disconnected living spaces. If the layout fundamentally doesn't work, rebuilding gives you a clean slate.

### Energy Efficiency
New builds can incorporate modern insulation, solar design principles, and energy-efficient systems from the ground up, resulting in lower running costs for decades to come.

### Long-Term Value
A new build typically adds more value to your property than a renovation of equivalent cost, especially in growth suburbs.

## The ARC Approach

We don't push one option over the other. During our initial consultation, we assess your property honestly and provide transparent advice on which option delivers the best outcome for your goals and budget.

**Not sure which path is right for you?** [Book a free consultation](/contact) and let's assess your options together.`,
    category: "Home Improvement",
    author: "ARC Builders Team",
    date: "2025-10-28",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    tags: ["renovation", "rebuild", "home improvement", "property value"],
  },
  {
    id: "3",
    title: "Understanding the Building Process: What to Expect When Building with ARC",
    slug: "building-process-what-to-expect",
    excerpt:
      "A step-by-step walkthrough of the entire building process, from initial consultation to final handover, so you know exactly what to expect.",
    content: `Building a home can feel overwhelming, but it doesn't have to be. At ARC Builders, we guide you through every step with clear communication and no surprises. Here's what to expect.

## Step 1: Initial Consultation (Week 1-2)

Everything starts with a conversation. We meet at your site or our office to discuss:
- Your vision and lifestyle requirements
- Budget expectations and financing
- Site conditions and feasibility
- Timeline and key milestones

This consultation is completely free and obligation-free.

## Step 2: Design & Planning (Weeks 3-10)

Once you decide to proceed, our design team develops detailed plans:
- Architectural drawings and 3D renders
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

## Step 4: Construction (Weeks 13-40+)

With approvals in hand and the contract signed, construction begins:
- **Foundation and slab** — the base of your home
- **Frame and roof** — the structure takes shape
- **Lock-up** — windows, doors, and external cladding
- **Fit-out** — plumbing, electrical, plastering
- **Finishes** — painting, flooring, cabinetry
- **Landscaping** — driveways, paths, outdoor areas

Throughout construction, you receive regular photo updates and site meetings.

## Step 5: Handover (Final Week)

Before handover, we conduct:
- A comprehensive quality inspection
- A full walkthrough with you
- Any minor adjustments or touch-ups
- Complete documentation and warranty handover

Your new home is ready to move in.

## Why Process Matters

A clear, well-managed process is the difference between a stressful build and an enjoyable one. At ARC, we've refined our process over 10+ years to ensure every client has confidence from start to finish.

**Ready to start your building journey?** [Get in touch](/contact) today.`,
    category: "Building Process",
    author: "ARC Builders Team",
    date: "2025-09-12",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    tags: ["building process", "new home", "construction", "timeline"],
  },
  {
    id: "4",
    title: "5 Kitchen Design Trends Dominating Queensland Homes in 2025",
    slug: "kitchen-design-trends-2025",
    excerpt:
      "From natural stone to integrated appliances, discover the top kitchen design trends shaping Queensland homes this year.",
    content: `The kitchen remains the heart of the home, and 2025 is seeing some exciting design shifts. Whether you're building new or renovating, here are the trends our clients are loving.

## 1. Natural Stone Everything

Forget manufactured stone — natural marble, granite, and quartzite are back in a big way. Calacatta marble with dramatic veining is the standout choice, used for benchtops, splashbacks, and even feature walls.

**Tip**: Natural stone requires sealing and maintenance, but the visual impact is unmatched.

## 2. Dark and Moody Palettes

While white kitchens aren't going anywhere, there's a strong shift towards deeper tones:
- Charcoal and black cabinetry
- Dark timber veneers
- Brass and gold hardware
- Emerald green accents

The key is balancing dark tones with adequate lighting and lighter benchtop surfaces.

## 3. Integrated and Concealed Appliances

The "appliance garage" trend is going mainstream. Homeowners want clean, uncluttered sightlines with:
- Panel-integrated fridges and dishwashers
- Concealed rangehoods behind cabinetry
- Hidden appliance cupboards with roller doors
- Induction cooktops that sit flush with benchtops

## 4. Butler's Pantries (Now Standard)

What was once a luxury feature is now expected in most custom homes. A well-designed butler's pantry provides:
- Additional benchtop and storage space
- A place to hide mess during entertaining
- Room for a second sink, dishwasher, and microwave
- Dry goods storage and wine storage

## 5. Statement Lighting

Kitchens are getting more intentional with lighting:
- Oversized pendant lights over islands
- LED strip lighting under cabinetry and in joinery
- Warm colour temperatures (2700K–3000K)
- Dimmer controls for mood flex

## Building Your Dream Kitchen

At ARC Builders, we work with you to select finishes and design features that match your lifestyle. Our transparent quoting means you know exactly what each element costs — no surprises when the kitchen is being installed.

**Planning a kitchen renovation or new build?** [Let's talk design](/contact).`,
    category: "Design Trends",
    author: "ARC Builders Team",
    date: "2025-08-05",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    tags: ["kitchen design", "trends", "renovation", "interior design"],
  },
  {
    id: "5",
    title: "Granny Flats in Queensland: Rules, Costs, and Everything You Need to Know",
    slug: "granny-flats-queensland-guide",
    excerpt:
      "Thinking about adding a granny flat to your property? Here's a complete guide to regulations, costs, and design options in Queensland.",
    content: `Granny flats (also known as secondary dwellings) are one of the smartest ways to add value and functionality to your property. Whether it's for aging parents, rental income, or a home office, here's everything you need to know.

## Queensland Regulations

### What's Allowed
In most Queensland council areas, you can build a secondary dwelling on your property provided:
- Your lot is large enough to meet minimum lot size requirements
- The dwelling doesn't exceed the maximum floor area (usually 80 sqm)
- Adequate private open space is maintained
- Car parking requirements are met
- The dwelling is not on a separate title (no subdivision)

### Council Approval
Most granny flats require a development application through your local council. Some councils offer fast-track approvals for compliant designs.

## Costs

A quality granny flat in Queensland typically costs:
- **1-bedroom (45-55 sqm)**: $120,000 – $180,000
- **2-bedroom (60-80 sqm)**: $180,000 – $280,000
- **Premium finishes**: Add 20-30%

These costs include council fees, site works, construction, and connections to utilities.

## Rental Returns

A well-designed granny flat can generate $300–$500+ per week in rental income, depending on location and finish quality. In many Brisbane suburbs, you can achieve a return on investment within 5-8 years.

## Design Considerations

### Orientation
North-facing living areas maximise natural light and reduce energy costs.

### Privacy
Thoughtful placement, screening, and landscaping ensure privacy for both dwellings.

### Access
Consider separate driveways or pathways for independent access.

### Future-Proofing
If the flat is for aging parents, incorporate universal design principles: wider doorways, step-free access, and accessible bathrooms.

## The ARC Difference

We specialise in granny flats that don't feel like afterthoughts. Our designs are architecturally considered, quality-built, and priced transparently.

**Want to explore your granny flat options?** [Book a consultation](/contact) and we'll assess your property's potential.`,
    category: "Granny Flats",
    author: "ARC Builders Team",
    date: "2025-07-18",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
    tags: ["granny flats", "secondary dwelling", "queensland", "rental income"],
  },
  {
    id: "6",
    title: "Why Transparent Pricing Matters: The Hidden Costs Most Builders Won't Tell You",
    slug: "transparent-pricing-hidden-costs",
    excerpt:
      "Most building quotes look great on paper, but hide costs in allowances and provisional sums. Here's how to protect yourself.",
    content: `If you've ever received a building quote that seemed too good to be true, it probably was. The building industry has a transparency problem, and it costs homeowners thousands of dollars every year.

## The Problem with "Allowances"

Many builders use allowances and provisional sums (PS items) to keep their headline price low. An allowance is essentially a placeholder — "we've allocated $5,000 for your kitchen tapware." But when you actually select your tapware, it costs $8,000. That $3,000 difference? That's a variation you have to pay.

Common areas where allowances hide true costs:
- Kitchen appliances and fixtures
- Bathroom tiles and fittings
- Flooring materials
- Electrical and lighting
- Landscaping
- Driveways

## How Variations Add Up

It's not uncommon for homeowners to face $50,000–$100,000+ in variations on a standard build. By the time you realise the true cost, you're already committed and have limited negotiating power.

## The ARC Approach to Pricing

We do things differently:

### 1. Fully Specified Quotes
Every item in your quote is specified — brand, model, colour, and price. No allowances, no provisional sums.

### 2. Selection Before Signing
We help you select all your finishes and materials BEFORE you sign the contract. This means the price you agree to is the price you pay.

### 3. Fixed Price Contracts
Once the contract is signed, the price is fixed. The only variations that occur are ones YOU request.

### 4. Open Book Policy
You can see exactly where every dollar goes. We don't hide margins in material costs or subcontractor quotes.

## How to Protect Yourself

When comparing quotes from different builders:
1. Count the number of allowances and PS items
2. Ask for specific product selections, not dollar amounts
3. Request a fixed-price contract
4. Ask about the builder's average variation percentage
5. Check reviews for mentions of cost blowouts

## The Bottom Line

The cheapest quote is rarely the cheapest build. A transparent, fully specified quote from a reputable builder will almost always deliver better value than a low-ball quote full of allowances.

**Want a truly transparent quote?** [Contact ARC Builders](/contact) for an honest, no-surprises approach to pricing.`,
    category: "Industry Insights",
    author: "ARC Builders Team",
    date: "2025-06-22",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    tags: ["pricing", "transparency", "building industry", "contracts"],
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
