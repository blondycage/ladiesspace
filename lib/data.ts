import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  HandHeart,
  MessageCircle,
  Sparkles,
  UsersRound
} from "lucide-react";

export const siteConfig = {
  name: "Ladies’ Space",
  location: "The Gambia",
  email: "hello@ladiesspace.gm",
  url: "https://ladiesspace.gm",
  description:
    "Ladies’ Space is a women-centred community organisation in The Gambia creating intentional experiences, meaningful connections and pathways to growth, visibility and opportunity."
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "Experiences", href: "#experiences" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" }
];

export const images = {
  hero: {
    src: "/images/unsplash-community-gathering.jpg",
    alt: "Women gathered outdoors in a warm community setting"
  },
  manifesto: {
    src: "/images/unsplash-workshop.jpg",
    alt: "Women gathered around a table during a hands-on workshop"
  },
  experiences: {
    src: "/images/unsplash-women-gathering.jpg",
    alt: "Women smiling and talking together outdoors"
  },
  impact: {
    src: "/images/unsplash-community-hands.jpg",
    alt: "A group placing their hands together as a sign of shared community support"
  },
  story: {
    src: "/images/unsplash-community-portrait.jpg",
    alt: "Portrait of a smiling woman in warm natural light"
  }
};

export const ecosystemPillars = [
  {
    title: "Community",
    description:
      "A welcoming network where women build meaningful relationships, feel seen and find support across different seasons of life.",
    image: "/images/unsplash-community-gathering.jpg",
    icon: UsersRound
  },
  {
    title: "Experiences",
    description:
      "Intentional gatherings designed with care, purpose and warmth, from intimate conversations to larger community moments.",
    image: "/images/unsplash-collaboration-table.jpg",
    icon: Sparkles
  },
  {
    title: "Learning & Development",
    description:
      "Practical spaces for women to gain knowledge, strengthen confidence and develop skills that support personal and professional growth.",
    image: "/images/unsplash-learning-session.jpg",
    icon: BookOpen
  },
  {
    title: "Expert Conversations",
    description:
      "Access to thoughtful voices, lived experience and specialist insight that help women make informed decisions and imagine wider possibilities.",
    image: "/images/unsplash-leadership-conversation.jpg",
    icon: MessageCircle
  },
  {
    title: "Visibility",
    description:
      "Platforms that help women’s work, ideas, leadership and stories be recognised with dignity and intention.",
    image: "/images/unsplash-community-portrait.jpg",
    icon: ArrowUpRight
  },
  {
    title: "Opportunities",
    description:
      "Curated pathways to grants, scholarships, roles, mentorship, collaborations and learning opportunities that expand access.",
    image: "/images/unsplash-opportunity-leadership.jpg",
    icon: BriefcaseBusiness
  },
  {
    title: "Community Impact",
    description:
      "Shared action that strengthens relationships, supports local needs and equips women to contribute meaningful change.",
    image: "/images/unsplash-community-hands.jpg",
    icon: HandHeart
  }
];

export const imageCredits = [
  {
    file: "unsplash-community-gathering.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1521510186458-bbbda7aef46b"
  },
  {
    file: "unsplash-community-hands.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1582213782179-e0d53f98f2ca"
  },
  {
    file: "unsplash-workshop.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1544928147-79a2dbc1f389"
  },
  {
    file: "unsplash-leadership-conversation.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1573165662973-4ab3cf3d3508"
  },
  {
    file: "unsplash-collaboration-table.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1553028826-f4804a6dba3b"
  },
  {
    file: "unsplash-learning-session.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1681949215173-fe0d15c790c1"
  },
  {
    file: "unsplash-community-portrait.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1530785602389-07594beb8b73"
  },
  {
    file: "unsplash-women-gathering.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1491438590914-bc09fcaaf77a"
  },
  {
    file: "unsplash-opportunity-leadership.jpg",
    source: "Unsplash",
    url: "https://unsplash.com/photos/1573496359142-b8d87734a5a2"
  }
];

export const experiences = [
  "Community gatherings",
  "Workshops",
  "Leadership conversations",
  "Skills development",
  "Wellness experiences",
  "Networking sessions",
  "Community impact initiatives"
];

export const opportunities = [
  {
    category: "Funding",
    title: "Grants and scholarships",
    description: "Placeholder category for future funding opportunities and education support."
  },
  {
    category: "Work",
    title: "Jobs and fellowships",
    description: "Placeholder category for roles, fellowships and career pathways."
  },
  {
    category: "Growth",
    title: "Mentorship and learning",
    description: "Placeholder category for guided learning, coaching and development."
  },
  {
    category: "Visibility",
    title: "Collaborations and features",
    description: "Placeholder category for business visibility, creative collaborations and showcases."
  }
];

export const impactAreas = [
  "Participant stories",
  "Programme outcomes",
  "Community initiatives",
  "Feedback and testimonials",
  "Values-aligned partnerships",
  "Visual documentation"
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: `mailto:${siteConfig.email}` }
];

export const placeholderStory = {
  quote: "A future community story will sit here, told with consent and care.",
  name: "Community member",
  role: "Placeholder profile",
  body:
    "This block is intentionally reserved for a real participant story. Replace it with approved copy, a consented portrait and accurate programme details when available."
};
