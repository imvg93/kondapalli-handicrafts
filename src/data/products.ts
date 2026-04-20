export type ProductCategory = "toys" | "figurines" | "decorative";

export type Product = {
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  price: string;
  priceValue: number;
  oldPrice?: string;
  discount?: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  category: ProductCategory;
  addedAt: number;
  badge?: { label: string; tone: "tertiary" | "secondary" };
  description: string;
  bullets: string[];
  dimensions: string;
  wood: string;
  relatedSlugs?: string[];
};

const IMG = {
  ambari:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvcQi63As23WB5UAbc9p2Q3wK_0vZsUxU9Hs_CBT52K-Z4PFUl9JNH8variwWWKIccu0OPPPDVGOTVWqqJ4r__uD2YqoCZVvoXkzk3M8s44bjM1QaXKSlKilpp3dD-SmOv939YYp4ygMxtDOE_o6AfM9QHk34KcU0JkNc_81N7TS5qjwYfgADJsrjuwu7TRQbniBeXMbqPQlCSSlVDKeCmPxHOP5nhmDMLrrUoUvF4QVmYMp965bQhxRX6TOuN5QU-2iknerCalo",
  doll: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgONQe_mgPtQvt1QvXdHGMeR9IPCSZnzHytOrtQrz06zkYvvY1WgSQ55ibokz59kmS9C6br0a2xjtIKdxYcH_LfdnQxRC6zbiTzdMfS4L-oskMaGDorDHJklPNXkUMNt9fDPmGFdwPCPxj7wJdfP0Tkhg5m-HnKIAPqfMv9g_WBJPv4GxxWSl2jITKJRYbRKtBzjI8B4oh7OJUdyqVCszyffPf6H1AL_6c0lJR-Le0X5D_DGeuWc4VBTuWM5-Ugv-a6_G5Sz8CkSs",
  dasavatara:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHXPzUQ3im_91q265IixcTR_0IcE9QbB9OahvXf9sWQ5qKsyHqcNE0Y64GAKPRQXo0WG92FV6yEM9CX25besI5LnilmrocdQMj6cDc1m7UK9DGD9AY01onfRHHVynamUcmHyjrVvhhqx36u8wtSmK-ZYH1sKytP17_Hx5HQQ5HcGL-9YXAHMNFnL2Elj3Kzvhs7BFnJ8u9HQCBnuvGJcBq4lp0fR69eEIAut8owYWxw__z0lld5uQhg5Z9kr1udOqf1ihoDgGBWOM",
  bullock:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC2turo3EEyutu9S-GhE_WEoiLIie0LgXtYXJdmUlzJfOg04Ts35t5XPygsN-Y0qM5N09bQw5YFyjbZn-jbK1Ifqcf9d8eBb_xcqvdAH6VxgNKxEhYumvBdeMEK83Tx45B8Xy0YcVSfUw527xxFRFpE_-d47pFltOmIqfFfApMMcddyS1Yh4vwao-zb9mZyT3MtVysPG8xgk0T6vWEzqmwamu2eLH1c9OjURN5CeLx__Rp_HwwJNngMMtaGbliHBa5u8zb74OdRtuk",
  peacock:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVU5aivqTt_3_iGKxlO06pe5oI3dLAb6-xI9mk9d4h5WGEdBS1J_oBhRAwnlLyp3ooplgIR8eyjBg-NPD_dY_dd9eTqDBWb41MCtpfU7sjVQL8vmMk-SkMWArjzURZIySrhjmmQr31K-31ggJXg82UKlLccAOYy5430AxJJSWMqSv9nlkyBn5GfO-Y0gQS89f9Z8oOT5nLS7DehK7fp44uxAmUI9bs2Ge3_G9pDUifqq5T5i9VxigouTd7QID59ev5O9X8f9l53I",
  palki:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPtvGj9PDcqUlFlDKS47_W66scZgmhdbqf_zUt7tafUuxlbQZy5HwITMbGQvDeo3FAp0s9KoRyNDjjRPhYemjXgYyXg37mpK0hcbyWU-z2Fpu6IqEmGc_afkHKUqk2EMYWzffoyf510z77IEg6Hy60raK55deFGeyu3EhvjqCD6E5uP46ayahXcx_D26SZnwtzpSu1L3I25iautTG889aJ1ypYpCtMqpXQrLOhTuB3dIKlk6DLvAQNLGxs1fBAZy8HWrOFMRadeI4",
  horses:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvKpbFOQosUAc1WRtrgRc2i8_dHyeU5vCdpqCNxOcJ-kXGqeB8ss2QocsHtvhh5pk6qw-sllqp2eeird14A6nPquO3oRVvQQlVbMbMpRavblg-1oShaMZEjPWFei07mPz5RJQH3RRgFd1I1VHhyCAZUgShG4pT8-NMD1KYSv3HFRPBoD853Djd26SYPdRdRnBdArzPDBxzkF04-adtZZe4_AGIVPSc3vb_m8YymOLldw9Mxyq2P3edT94JFJpNaHV_YGxR7mv2JKk",
  ganesha:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCsDGIpagGLY_AFhr5hkzi8pEubVmUK6J2aN_ayQM7L2lZfDiC55Y2PhindbIS1B3bslV9T_-NUwHKDBm3xllK6dxC62T4zurmTLioZWhCS6Kb0FXVeEgt8qJC0qAcomUUb0YcvF4mILbx3mIRlsJs71kJBIgab9GCmcjQAQSSORXVoFsMmNSTuVNFUT2bUiAa8KLQimnLHmE_4wwG-jyMZJFoHt2HO96dFDIlq0VHIujVAV9JMqQfhb7qwvG_TBjF9k1i7Rd7JN8c",
  royalAmbari:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXXgRvlyQjcz31E6IlusXNXDXI-csJZQVfaIKr_zSK95SkCnfcxxxBExmX9SQA3BbfZA7AjcOQHJFQkQFjhjKBKFUFoyDK5q9DC6BEe7L2lDtDGHFHk2dSIC-zd6VzqoksF_V5RZ-qTUlQS83WJPK0hsmud0hRZOQj8o8MUUUEEYTkp24n0bt5aKZ6-zJblZQmr9YAyEhtzey8nFWmV_48enN6DW-YoJDCA0uLXYRO5_DsjJvhXieKJg5npIgzotg4Rv0Jh-sqmgg",
  ambariDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAwtfDWVjnwxGI-wOnHAfz92XAz2AY7X3c8VqyOUbLICV2HolUAdVOstrhnihALFFtfiM1gByYiEN_9cTMxgv3szVtmRJaXw9mpev3ADGnGKj0oclF_LnccJ6JOJxQ0CnBqNdxiyeJPxGSo0o0-LaNc72h9OuwC_HLMM54n4azts8RyMfAOdTI0S9qG6J4KsQxoQk_Cbvn-WPJkrT8qgN2Ovp3yFCrKeWzM-Deioz8V4kJoiJiNWiYD0Qd_CIwoTskmQzCiI0FUG2U",
  ambariSide:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRP1mDYSITGoDlrCsBh0fj-zTuSvNPnm8Gusaj75UhG2ftDbmLKq-vwhXIovqcX1yERtzz7saqY-kXe89XNwv491I-uS4sw9BuCb78wEhkUMzdlEK7rnjegRcKrlB3UP-ZMPfCmmcbcXWB6lk_JP7s4ucsiIEiXPlf6-i5WafZJxt-UCtcrVaEL0ysG-LhR5w1QyaxekY9Yp7pC79NFPg3_4fv2SCIjZHULi2mNj8ajiBlb0TRNFRmcRGSkGedcBo0cdP3Lt-wBM",
  artisanHand:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDq9Y7GwlrJlbYNnGqHOwR1Kw1tl7NVvsZfHpScEMQvHMof5pXqmpHTwc-RYQaLAaW_Zjxh2h5ip2zYqqJ6qiWmfdq668g38EvClHXFGR6dFyVj2YwV2ePp2ukaj6e8mxcv_oPDBeJ9Dec2ICJjP84qPs7Fw9YNFNQxuNup33F4uYPOor5hjlsGlNu9WW1cTlbq4G4HlMnYhO9jVyPfcNfiBjzZ9wAf-ci4_FYDO7NGXTGTIi28eRZrA5wZv2L_3UFd_raNIU0D8i0",
  workshop:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDTWiVoUfoRjpT1XpntngQ_bE_DENAefBKi5OtgGZ-XHpjok7LCWDkh0j_cu7rtmNtBdIKGD3qxPPjXts6dizL6OczJX-7c0uXIXDGKtdXBXfr6d1WYfwNd7YaVNsuMEOuZHd3XKqGA6xcEG0uVY-aaZfDY_rJ9U6Gi778fCJ-pk3vT1qRefMHZomT-4uRYZ5l0lSY_52VgWlwHcIPS9RtnnEmk2KBsmbjsRr2paG1zNo8camWLGMVKWA4dms-eHQyuxJ95nSDotP4",
  dollAlt:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_o-8hnLnD_d1MKtpp2lSxLsI4fqYkfCSUdCHJtqqynXjLegxa5GrTkcjb9ufF864-jd8nsMXX5zcy_JvbZ-URi03doU_XD_73NtvgB_6rJWG6f543rg0VRgRgCwLcEd9IY-VchPdfUZXuIAL-AIk8VyB1v1CUPeZTaVmL5SheBaksUqJQ8Iehb06bAlewAr_HDVeJ1EM8BOhhYF_OMku1NqzEcKAHa7vObEv8TYSgQ5z-3xfwD7mZUxhqPkSDXsjZFKddZWDrvi4",
  bullockAlt:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1XqqzOw090BZlX42yMUpEZDvkhF-IQ26DC1wQmleNba8AK0VyWZBYDMTRVf9ixrpB9RstEq-zUVlXNnczN7uNwh6z1ERSXiRIdeFbvsn8x0Yt93d7xGv6i1HvouxFniXaWEXokNF9kccWYMo3P1aQu-3OZ6DqZdLSgKRgXGDhTRdvruuXNzpVx4bqsBMXg0zEDU7zEntIc436fu7yzzb9Z0I_LOxPJimSlfI9ePtFbHNf5DRrfUh_5vRKOfP8ZKCWP_Y7RNVYYZ4",
  ambariMini:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCWTDcxz7FpDguGg3BlAhfg3XE-NRrdi-fHXi1mygvMjUO42XYu9kvyujJwGHgxbRhITmpLoRXNsAbOVbNjP3oxmr3SZMRlgtIHpo8OrFOmsdLHPAH1_-2GGrpjhvqMxXcWXYbZ4OZ16PLryXb3FBsu3pF1t8SsBiLnPhwIfvYikL5hoKXOZgVYe1hcnTWnAunJuUgm-EgFkFvRpWp-GRTRR_2uS8NTJptZh0S4QbQT3LNHQkaEw2q2THH70l_SrzUkFQWcJJqbSBM",
  dasavataraAlt:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8OfPJof2iP2zg61Bo9Zz3bs7i8W5GEHFFwZ5RRPPLkk2yN5jj-8mbrn4hBa5Z9UXlSByHAZLc5tY2cplEXX9RjPVcSX38n5rCCRhta4FIBEgGTD7zRiXVSbZWvk7O-QxcRtbrfa60chtd64iL1YbnABRdI97BZwAXcYzWwmYM1CxbOgbwAEclA8Ui0ylxigRDgiC_ZmL4G0b1_xwn-zsFYSZ1CYD0p8SXi25swjLVHOnGjw64fRjyisYuOec0YD3DiCWcaG6YfBI",
};

export const WORKSHOP_IMAGE = IMG.workshop;

export const products: Product[] = [
  {
    slug: "royal-ambari-elephant",
    title: "Royal Ambari Elephant",
    tagline: "Collector's Edition",
    subtitle: "Hand-carved Poniki wood",
    price: "₹ 4,250",
    priceValue: 4250,
    oldPrice: "₹ 5,500",
    discount: "25% OFF",
    image: IMG.royalAmbari,
    gallery: [IMG.ambariDetail, IMG.ambariSide, IMG.artisanHand, IMG.ambari],
    rating: 4.9,
    reviews: 184,
    category: "figurines",
    addedAt: 2,
    badge: { label: "Bestseller", tone: "tertiary" },
    description:
      "Carved from the sacred Poniki wood, this Ambari Elephant is a masterpiece of the 400-year-old Nakashi technique. Every brushstroke tells a story of royalty, endurance, and the vibrant spirit of Andhra Pradesh.",
    bullets: [
      "Handmade by master artisans from the Kondapalli Toy Colony.",
      "Sustainable, lightweight Poniki wood (Gyrocarpus jacquinii).",
      'Dimensions: 12" × 8" × 5" (L × H × W).',
      "Eco-friendly vegetable dyes and natural binding pastes.",
    ],
    dimensions: '12" × 8" × 5"',
    wood: "Poniki (Gyrocarpus jacquinii)",
    relatedSlugs: ["dasavatara-set", "dancing-doll", "bullock-cart", "ambari-elephant"],
  },
  {
    slug: "ambari-elephant",
    title: "Ambari Elephant",
    tagline: "Heritage Classic",
    subtitle: "Hand-carved Poniki wood",
    price: "₹ 2,450",
    priceValue: 2450,
    image: IMG.ambari,
    gallery: [IMG.ambari, IMG.ambariSide, IMG.artisanHand],
    rating: 4.8,
    reviews: 112,
    category: "figurines",
    addedAt: 6,
    description:
      "A faithful rendition of the Vijayanagara royal elephant, carved in a single sitting from a block of Poniki wood and hand-painted in natural pigments.",
    bullets: [
      "Single-piece carving, signed by the artisan.",
      "Natural tamarind-seed primer.",
      'Dimensions: 8" × 6" × 4".',
      "Pet and child safe.",
    ],
    dimensions: '8" × 6" × 4"',
    wood: "Poniki",
    relatedSlugs: ["royal-ambari-elephant", "dancing-doll", "bullock-cart", "peacock"],
  },
  {
    slug: "dancing-doll",
    title: "Dancing Doll",
    tagline: "Tradition in Motion",
    subtitle: "Artisan painted finish",
    price: "₹ 1,800",
    priceValue: 1800,
    image: IMG.doll,
    gallery: [IMG.doll, IMG.dollAlt, IMG.artisanHand],
    rating: 4.7,
    reviews: 98,
    category: "toys",
    addedAt: 4,
    description:
      "A bobble-head doll sculpted in the classic Thalaiyatti style — a gentle tap sets her dancing. Painted with saffron and rose madder on a tamarind primer.",
    bullets: [
      "Natural bobble-head movement, no springs.",
      "Costume painted in six natural pigments.",
      'Dimensions: 5" × 3" × 3".',
      "Boxed in recycled handmade paper.",
    ],
    dimensions: '5" × 3" × 3"',
    wood: "Poniki",
    relatedSlugs: ["festival-horses", "bullock-cart", "blessing-ganesha", "ambari-elephant"],
  },
  {
    slug: "dasavatara-set",
    title: "Dasavatara Set",
    tagline: "10-Piece Mythology",
    subtitle: "Complete 10-piece collection",
    price: "₹ 8,500",
    priceValue: 8500,
    image: IMG.dasavatara,
    gallery: [IMG.dasavatara, IMG.dasavataraAlt, IMG.artisanHand],
    rating: 5.0,
    reviews: 64,
    category: "figurines",
    addedAt: 3,
    badge: { label: "Bestseller", tone: "tertiary" },
    description:
      "Ten incarnations of Vishnu, each carved by a different artisan in the colony — Matsya to Kalki, arranged in a processional.",
    bullets: [
      "Ten individually signed pieces.",
      "Presented in a walnut-finish display tray.",
      "Average piece height 4\".",
      "Eco-friendly vegetable dyes.",
    ],
    dimensions: '14" × 10" tray',
    wood: "Poniki",
    relatedSlugs: ["royal-ambari-elephant", "blessing-ganesha", "wedding-palki", "peacock"],
  },
  {
    slug: "bullock-cart",
    title: "Bullock Cart",
    tagline: "Village Classic",
    subtitle: "Classic village scene",
    price: "₹ 1,250",
    priceValue: 1250,
    image: IMG.bullock,
    gallery: [IMG.bullock, IMG.bullockAlt],
    rating: 4.6,
    reviews: 72,
    category: "toys",
    addedAt: 5,
    description:
      "A village tableau carved in miniature: two bullocks, a wheeled cart, and a farmer. The wheels turn.",
    bullets: [
      "Functional turning wheels.",
      "Hand-painted harness detail.",
      'Dimensions: 7" × 3" × 4".',
      "Ages 6+.",
    ],
    dimensions: '7" × 3" × 4"',
    wood: "Poniki",
    relatedSlugs: ["dancing-doll", "festival-horses", "village-potter", "ambari-elephant"],
  },
  {
    slug: "peacock",
    title: "Royal Peacock",
    tagline: "Auspicious Motif",
    subtitle: "Vibrant natural dyes",
    price: "₹ 3,100",
    priceValue: 3100,
    image: IMG.peacock,
    gallery: [IMG.peacock, IMG.artisanHand],
    rating: 4.8,
    reviews: 56,
    category: "decorative",
    addedAt: 2,
    description:
      "The royal peacock in full display — carved with fanned feathers and painted in cobalt, emerald and gold leaf.",
    bullets: [
      "Real gold-leaf accents.",
      "Free-standing base.",
      'Dimensions: 9" × 7" × 4".',
      "Dust with a dry brush.",
    ],
    dimensions: '9" × 7" × 4"',
    wood: "Poniki",
    relatedSlugs: ["wedding-palki", "blessing-ganesha", "royal-ambari-elephant", "garden-deer"],
  },
  {
    slug: "wedding-palki",
    title: "Wedding Palki",
    tagline: "Heirloom Detail",
    subtitle: "Intricate detailwork",
    price: "₹ 4,200",
    priceValue: 4200,
    image: IMG.palki,
    gallery: [IMG.palki, IMG.artisanHand],
    rating: 4.9,
    reviews: 41,
    category: "decorative",
    addedAt: 7,
    description:
      "A ceremonial palanquin, traditionally gifted at South Indian weddings. Four bearers, silk-painted canopy, bride figurine inside.",
    bullets: [
      "Four detachable bearers.",
      "Hand-painted silk canopy.",
      'Dimensions: 10" × 6" × 7".',
      "Gift-boxed.",
    ],
    dimensions: '10" × 6" × 7"',
    wood: "Poniki",
    relatedSlugs: ["dasavatara-set", "peacock", "royal-ambari-elephant", "blessing-ganesha"],
  },
  {
    slug: "festival-horses",
    title: "Festival Horses",
    tagline: "Festival Pair",
    subtitle: "Pair of painted ponies",
    price: "₹ 2,100",
    priceValue: 2100,
    image: IMG.horses,
    gallery: [IMG.horses, IMG.bullockAlt],
    rating: 4.7,
    reviews: 33,
    category: "toys",
    addedAt: 1,
    badge: { label: "New", tone: "secondary" },
    description:
      "Twin ceremonial horses, painted in festival regalia — traditionally displayed during Bommala Koluvu during Dasara.",
    bullets: [
      "Sold as a matched pair.",
      "Ceremonial patterning.",
      'Dimensions (each): 6" × 5" × 2".',
      "Collector-numbered.",
    ],
    dimensions: '6" × 5" × 2"',
    wood: "Poniki",
    relatedSlugs: ["dancing-doll", "bullock-cart", "garden-deer", "ambari-elephant"],
  },
  {
    slug: "blessing-ganesha",
    title: "Blessing Ganesha",
    tagline: "Auspicious Decor",
    subtitle: "Auspicious decor",
    price: "₹ 3,500",
    priceValue: 3500,
    image: IMG.ganesha,
    gallery: [IMG.ganesha, IMG.artisanHand],
    rating: 4.9,
    reviews: 88,
    category: "figurines",
    addedAt: 8,
    description:
      "Ganesha in the Padmasana seat — a small shrine-piece, painted with gold leaf accents on a vermilion body.",
    bullets: [
      "Padmasana pose.",
      "Gold-leaf highlights.",
      'Dimensions: 6" × 4" × 3".',
      "Ready to display.",
    ],
    dimensions: '6" × 4" × 3"',
    wood: "Poniki",
    relatedSlugs: ["dasavatara-set", "peacock", "wedding-palki", "krishna-flute"],
  },
  {
    slug: "krishna-flute",
    title: "Krishna with Flute",
    tagline: "Devotional",
    subtitle: "Slender flute stance",
    price: "₹ 2,900",
    priceValue: 2900,
    image: IMG.ambariDetail,
    gallery: [IMG.ambariDetail, IMG.artisanHand],
    rating: 4.8,
    reviews: 52,
    category: "figurines",
    addedAt: 9,
    description:
      "The young Krishna in his tribhanga stance, playing the flute — finely carved with layered pigment work.",
    bullets: [
      "Layered pigment work.",
      "Tribhanga stance.",
      'Dimensions: 7" × 3" × 3".',
      "Signed by the carver.",
    ],
    dimensions: '7" × 3" × 3"',
    wood: "Poniki",
    relatedSlugs: ["blessing-ganesha", "dasavatara-set", "royal-ambari-elephant", "village-potter"],
  },
  {
    slug: "village-potter",
    title: "Village Potter",
    tagline: "Rural Life",
    subtitle: "Working potter's wheel",
    price: "₹ 2,250",
    priceValue: 2250,
    image: IMG.bullockAlt,
    gallery: [IMG.bullockAlt, IMG.bullock],
    rating: 4.5,
    reviews: 24,
    category: "toys",
    addedAt: 10,
    description:
      "A potter at his wheel — the wheel actually spins, and the small clay pot lifts off. A loving miniature of village life.",
    bullets: [
      "Functioning spinning wheel.",
      "Removable clay pot.",
      'Dimensions: 5" × 5" × 4".',
      "Ages 6+.",
    ],
    dimensions: '5" × 5" × 4"',
    wood: "Poniki",
    relatedSlugs: ["bullock-cart", "dancing-doll", "festival-horses", "garden-deer"],
  },
  {
    slug: "garden-deer",
    title: "Garden Deer",
    tagline: "Quiet Ornament",
    subtitle: "Dappled natural dyes",
    price: "₹ 1,650",
    priceValue: 1650,
    image: IMG.horses,
    gallery: [IMG.horses],
    rating: 4.6,
    reviews: 19,
    category: "decorative",
    addedAt: 11,
    description:
      "A grazing deer rendered in muted earth tones — a quiet counterpoint to bolder pieces on a shelf.",
    bullets: [
      "Matte natural finish.",
      "Free-standing.",
      'Dimensions: 6" × 5" × 2".',
      "Dust with dry brush.",
    ],
    dimensions: '6" × 5" × 2"',
    wood: "Poniki",
    relatedSlugs: ["peacock", "festival-horses", "blessing-ganesha", "wedding-palki"],
  },
  {
    slug: "temple-chariot",
    title: "Temple Chariot",
    tagline: "Processional Ratha",
    subtitle: "Functional wheels",
    price: "₹ 5,400",
    priceValue: 5400,
    image: IMG.ambariMini,
    gallery: [IMG.ambariMini, IMG.artisanHand],
    rating: 4.9,
    reviews: 29,
    category: "decorative",
    addedAt: 12,
    badge: { label: "New", tone: "secondary" },
    description:
      "A processional temple ratha with four turning wheels, finialed towers, and a seated deity at the center.",
    bullets: [
      "Four working wheels.",
      "Removable deity figure.",
      'Dimensions: 11" × 7" × 10".',
      "Collector piece.",
    ],
    dimensions: '11" × 7" × 10"',
    wood: "Poniki",
    relatedSlugs: ["wedding-palki", "dasavatara-set", "royal-ambari-elephant", "peacock"],
  },
  {
    slug: "royal-drummer",
    title: "Royal Drummer",
    tagline: "Court Musician",
    subtitle: "Ceremonial dholak",
    price: "₹ 1,950",
    priceValue: 1950,
    image: IMG.dollAlt,
    gallery: [IMG.dollAlt, IMG.doll],
    rating: 4.5,
    reviews: 17,
    category: "toys",
    addedAt: 13,
    description:
      "The court drummer in full regalia — a supporting piece for a larger processional arrangement.",
    bullets: [
      "Hand-painted turban and dhoti.",
      "Pairs with Festival Horses.",
      'Dimensions: 5" × 3" × 3".',
      "Collector-numbered.",
    ],
    dimensions: '5" × 3" × 3"',
    wood: "Poniki",
    relatedSlugs: ["festival-horses", "dancing-doll", "temple-chariot", "wedding-palki"],
  },
  {
    slug: "divine-cow",
    title: "Divine Cow (Kamadhenu)",
    tagline: "Auspicious Gift",
    subtitle: "Garlanded cow with calf",
    price: "₹ 2,750",
    priceValue: 2750,
    image: IMG.peacock,
    gallery: [IMG.peacock, IMG.artisanHand],
    rating: 4.7,
    reviews: 22,
    category: "figurines",
    addedAt: 14,
    description:
      "Kamadhenu, the wish-fulfilling cow, with a suckling calf at her side — traditionally gifted on housewarmings.",
    bullets: [
      "Cow and calf as a pair.",
      "Hand-garlanded detail.",
      'Dimensions: 7" × 5" × 3".',
      "Gift-wrapped on request.",
    ],
    dimensions: '7" × 5" × 3"',
    wood: "Poniki",
    relatedSlugs: ["blessing-ganesha", "dasavatara-set", "peacock", "krishna-flute"],
  },
  {
    slug: "nakashi-mask",
    title: "Nakashi Wall Mask",
    tagline: "Wall Statement",
    subtitle: "Theatrical Yakshagana face",
    price: "₹ 3,850",
    priceValue: 3850,
    image: IMG.dasavataraAlt,
    gallery: [IMG.dasavataraAlt, IMG.artisanHand],
    rating: 4.8,
    reviews: 31,
    category: "decorative",
    addedAt: 15,
    description:
      "A theatrical Yakshagana face rendered as a wall mask, painted in the high-contrast Nakashi manner with mirror accents.",
    bullets: [
      "Ready-to-hang wall mount.",
      "Tiny mirror inlays.",
      'Dimensions: 10" × 8" × 2".',
      "A single signed edition per month.",
    ],
    dimensions: '10" × 8" × 2"',
    wood: "Poniki",
    relatedSlugs: ["peacock", "temple-chariot", "blessing-ganesha", "wedding-palki"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, limit = 4): Product[] {
  const slugs = product.relatedSlugs ?? [];
  const picked = slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => !!p && p.slug !== product.slug);
  if (picked.length >= limit) return picked.slice(0, limit);
  const fallback = products.filter(
    (p) => p.slug !== product.slug && !picked.includes(p),
  );
  return [...picked, ...fallback].slice(0, limit);
}
