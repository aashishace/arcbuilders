import { Project, Service, Testimonial, ProcessStep } from "./types";

/* â”€â”€ Projects â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const projects: Project[] = [
  {
    id: "1",
    title: "Verona Residence",
    slug: "14-verona-st-pallara",
    location: "Pallara, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build - luxury family home",
    description:
      "A beautifully crafted family residence in Pallara featuring modern architectural lines, premium finishes, and spacious open-plan living. Designed to embrace the Queensland lifestyle with seamless indoor-outdoor flow.",
    heroImage: "/projects/14-verona-st-pallara/gallery-01.webp",
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
    title: "Langford Residence",
    slug: "25-langford-st",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home - contemporary design & build",
    description:
      "A striking contemporary residence showcasing bold architectural design, high-end interiors, and expansive living spaces. Built with meticulous attention to detail and quality craftsmanship throughout.",
    heroImage: "/projects/25-langford-st/gallery-01.webp",
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
    title: "Herbert Residence",
    slug: "49-herbert-st",
    location: "Brisbane, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build - modern family home",
    description:
      "A sophisticated modern family home featuring clean architectural lines, premium material selections, and thoughtfully designed living spaces that maximise natural light and ventilation.",
    heroImage: "/projects/49-herbert-st/gallery-01.webp",
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
    title: "Brooklyn Residence",
    slug: "3-brooklyn-st-spring-mountain",
    location: "Spring Mountain, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home - new build",
    description:
      "A stunning custom home in the Spring Mountain estate featuring contemporary architecture, premium finishes, and generous living areas designed for modern family living in one of Brisbane's most sought-after growth corridors.",
    heroImage: "/projects/3-brooklyn-st-spring-mountain/gallery-01.webp",
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
    title: "Dart Residence",
    slug: "3-dart-ave-kingston",
    location: "Kingston, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build - family home",
    description:
      "A well-appointed family home in Kingston combining functional design with stylish contemporary finishes. Every space has been carefully planned to deliver comfort, practicality, and lasting quality.",
    heroImage: "/projects/3-dart-ave-kingston/gallery-01.webp",
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
    title: "Stanley Residence",
    slug: "3-stanley-st-mount-gravatt",
    location: "Mount Gravatt, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build - luxury home",
    description:
      "An impressive custom build in Mount Gravatt showcasing architectural excellence and superior craftsmanship. Featuring high ceilings, premium kitchen design, and beautifully appointed interiors throughout.",
    heroImage: "/projects/3-stanley-st-mount-gravatt/gallery-01.webp",
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
    title: "Ayesha Residence",
    slug: "35-ayesha-place-calamvale",
    location: "Calamvale, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Custom home - modern family build",
    description:
      "A modern family home in Calamvale designed with thoughtful attention to space, light, and lifestyle. Featuring contemporary interiors, quality finishes, and functional living areas perfect for family life.",
    heroImage: "/projects/35-ayesha-place-calamvale/gallery-01.webp",
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
    title: "Vineyard Residence",
    slug: "8-vineyard-drive-greenbank",
    location: "Greenbank, QLD",
    type: "custom-home",
    year: "2024",
    architect: "ARC Design Studio",
    scope: "Full design & build - acreage home",
    description:
      "A spacious acreage home in Greenbank set against lush surroundings. This build features expansive living areas, a chef-grade kitchen, and outdoor entertaining spaces that make the most of the tranquil semi-rural setting.",
    heroImage: "/projects/8-vineyard-drive-greenbank/gallery-01.webp",
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
    scope: "Full design & build - premium residence",
    description:
      "A premium custom residence showcasing ARC Builders' commitment to exceptional quality. This project features striking exterior design, luxurious interiors, and the finest material selections throughout.",
    heroImage: "/projects/hi-def-project/gallery-01.webp",
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

/* â”€â”€ Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Testimonials â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Raj & Anita Patel",
    role: "Vastu-Compliant Custom Home - Brisbane",
    quote:
      "ARC Builders understood exactly what we needed - a modern home that respects Vastu principles. From the north-east entrance to the kitchen placement, every detail was considered. Transparent pricing and beautiful craftsmanship.",
  },
  {
    id: "2",
    name: "Vikram & Sunita Mehta",
    role: "Multi-Generational Home - Sunnybank Hills",
    quote:
      "We wanted a home where our parents and kids could live together comfortably, with Vastu-compliant design and a proper puja room. ARC delivered beyond our expectations. They truly understand Indian-Australian family needs.",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    role: "Medical Centre - Brisbane South",
    quote:
      "Building a medical centre has strict requirements. ARC Builders navigated every regulation with expertise and delivered a facility our patients love. As an NRI, it was refreshing to work with a team that understood my vision.",
  },
  {
    id: "4",
    name: "Amit & Kavita Singh",
    role: "Duplex Investment - Logan",
    quote:
      "As NRI investors, we needed a builder we could trust with our investment. ARC's transparent fixed-price contracts and regular updates gave us complete peace of mind. The duplex quality exceeded our expectations.",
  },
];

/* â”€â”€ Process Steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
      "Our team develops detailed plans, provides upfront pricing, completes documentation, manages council approvals, and prepares for construction.",
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

/* â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const navLinks = [

  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* â”€â”€ Company info â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const companyInfo = {
  name: "ARC Builders",
  fullName: "Aesthetic Residential and Commercial Builders",
  phone: "0411 878 438",
  email: "info@arcbuilders.com.au",
  address: "25 Langford Street, Eight Mile Plains QLD",
  experience: "18+",
  tagline:
    "Custom Homes Designed for Modern Families - Trusted Builders in Brisbane, Logan & South East Queensland.",
  qbccLicence: "15090326",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};
