import type { DashboardCard } from "~/types";

export const NAVIGATION_ITEMS = [
  [
    {
      name: "Dashboard",
      link: "/",
      icon: "i-heroicons-rectangle-group",
    },
    {
      name: "Products",
      link: "/products",
      icon: "i-heroicons-squares-plus",
    },
    {
      name: "Inbox",
      link: "/inbox",
      icon: "i-heroicons-inbox",
    },
    {
      name: "Order Lists",
      link: "/order-lists",
      icon: "i-heroicons-list-bullet",
    },
    {
      name: "Product Stock",
      link: "/product-stock",
      icon: "i-heroicons-square-2-stack",
    },
  ],
  [
    {
      name: "Pricing",
      link: "/pricing",
      icon: "i-heroicons-currency-dollar",
    },
    {
      name: "Calender",
      link: "/calender",
      icon: "i-heroicons-calendar",
    },
    {
      name: "To-Do",
      link: "/todo",
      icon: "i-heroicons-document-check",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: "i-heroicons-identification",
    },
    {
      name: "Invoice",
      link: "/invoice",
      icon: "i-heroicons-document-currency-dollar",
    },
    {
      name: "Team",
      link: "/team",
      icon: "i-heroicons-users",
    },
    {
      name: "Table",
      link: "/table",
      icon: "i-heroicons-square-2-stack",
    },
  ],
  [
    {
      name: "Settings",
      link: "/settings",
      icon: "i-heroicons-cog-8-tooth",
    },
    {
      name: "Logout",
      link: "/logout",
      icon: "i-heroicons-power",
    },
  ],
];

export const DASHBOARD_CARDS_DATA: DashboardCard[] = [
  {
    name: "Total User",
    price: "40,689",
    icon: "i-heroicons-users",
    percentage: "8.5%",
    percentageText: "Up from yesterday",
    percentageIcon: "i-heroicons-arrow-trending-up",
    iconColor: "text-[#8280FF]",
    isUp: true,
  },
  {
    name: "Total Order",
    price: "10,293",
    icon: "i-heroicons-cube",
    percentage: "1.3%",
    percentageText: "Up from past week",
    percentageIcon: "i-heroicons-arrow-trending-up",
    iconColor: "text-[#FEC53D]",
    isUp: true,
  },
  {
    name: "Total Sales",
    price: "$89,000",
    icon: "i-heroicons-banknotes",
    percentage: "4.3%",
    percentageText: "Down from yesterday",
    percentageIcon: "i-heroicons-arrow-trending-down",
    iconColor: "text-[#4AD991]",
    isUp: false,
  },
  {
    name: "Total Pending",
    price: "$2,040",
    icon: "i-heroicons-clock",
    percentage: "1.1%",
    percentageText: "Up from yesterday",
    percentageIcon: "i-heroicons-arrow-trending-up",
    iconColor: "text-[#FF9066]",
    isUp: true,
  },
];
