const navigation = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "What We Do",
    path: "/services",
    children: [
      {
        id: 21,
        label: "Social Media",
        path: "/services/social-media",
      },
      {
        id: 22,
        label: "Web Design / Development",
        path: "/services/web-development",
      },
      {
        id: 23,
        label: "SEO",
        path: "/services/seo",
      },
      {
        id: 24,
        label: "Digital Marketing",
        path: "/services/digital-marketing",
      },
      {
        id: 25,
        label: "Branding",
        path: "/services/branding",
      },
      {
        id: 26,
        label: "Performance Marketing",
        path: "/services/performance-marketing",
      },
      {
        id: 27,
        label: "Packaging",
        path: "/services/packaging",
      },
      {
        id: 28,
        label: "Gifting Solutions",
        path: "/services/gifting-solutions",
      },
      {
        id: 29,
        label: "Print Solutions",
        path: "/services/print-solutions",
      },
      {
        id: 30,
        label: "Photography",
        path: "/services/photography",
      },
      {
        id: 31,
        label: "Public Relations (PR)",
        path: "/services/pr",
      },
    ],
  },
  {
    id: 3,
    label: "About Us",
    path: "/about",
  },
  {
    id: 4,
    label: "Work With Us",
    path: "/careers",
  },
  {
    id: 5,
    label: "Our Clients",
    path: "/clients",
  },
  {
    id: 6,
    label: "Contact Us",
    path: "/contact",
  },
  {
    id: 7,
    label: "Blogs",
    path: "/blogs",
  },
];

export default navigation;