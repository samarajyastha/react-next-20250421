const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/products",
    label: "Products",
  },
  {
    route: "/cart",
    label: "Cart",
  },
  {
    route: "/news",
    label: "News",
    subMenu: [
      {
        route: "/politics",
        label: "Politics",
      },
      {
        route: "/sports",
        label: "Sports",
      },
      {
        route: "/education",
        label: "Education",
      },
    ],
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export default navLinks;
