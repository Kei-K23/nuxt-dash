import type { Contact, DashboardCard, Member, Product } from "~/types";

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
  ],
  [
    {
      name: "Settings",
      link: "/settings",
      icon: "i-heroicons-cog-8-tooth",
    },
    {
      name: "Logout",
      link: "/",
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

export const PRODUCTS_DATA: Product[] = [
  {
    productName: "Wireless Mouse",
    productImage: "/img/product_img.png",
    price: 25.99,
    rating: 4.5,
    orderDateTime: "2024-11-12T14:32:00Z",
    productionDate: "2024-09-15",
    totalQuantity: 100,
    orderQuantity: 5,
    status: "Shipped",
    orderLocation: "New York, USA",
    category: "Electronics",
    sku: "WM-2024-001",
    supplier: "Tech Supplies Inc.",
    productDescription:
      "A sleek and ergonomic wireless mouse with adjustable DPI and long battery life.",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Bluetooth Speaker",
    productImage: "/img/product_img.png",
    price: 45.5,
    rating: 4.5,
    orderDateTime: "2024-11-10T10:25:00Z",
    productionDate: "2024-08-10",
    totalQuantity: 50,
    orderQuantity: 3,
    status: "Delivered",
    orderLocation: "London, UK",
    category: "Electronics",
    sku: "BS-2024-010",
    supplier: "Sound Solutions Co.",
    productDescription:
      "Portable Bluetooth speaker with powerful sound and long-lasting battery.",
    orderedCustomerName: "Jane Smith",
    availableColors: ["#0000FF", "#FFD700", "#4B0082"],
  },
  {
    productName: "Gaming Keyboard",
    productImage: "/img/product_img.png",
    price: 65.99,
    rating: 4.5,
    orderDateTime: "2024-11-13T09:45:00Z",
    productionDate: "2024-10-05",
    totalQuantity: 200,
    orderQuantity: 10,
    status: "Processing",
    orderLocation: "Berlin, Germany",
    category: "Gaming",
    sku: "GK-2024-020",
    supplier: "Elite Tech Mart",
    productDescription:
      "RGB mechanical gaming keyboard with programmable keys and durable switches.",
    orderedCustomerName: "Max Mustermann",
    availableColors: ["#1E90FF", "#00FF00", "#FF4500"],
  },
  {
    productName: "LED Desk Lamp",
    productImage: "/img/product_img.png",
    price: 29.99,
    rating: 4.5,
    orderDateTime: "2024-11-09T12:00:00Z",
    productionDate: "2024-07-20",
    totalQuantity: 150,
    orderQuantity: 2,
    status: "Cancelled",
    orderLocation: "Paris, France",
    category: "Home & Office",
    sku: "LDL-2024-005",
    supplier: "Bright Lights Ltd.",
    productDescription:
      "Energy-efficient LED desk lamp with adjustable brightness levels.",
    orderedCustomerName: "Marie Dubois",
    availableColors: ["#FFFFE0", "#808080", "#DCDCDC"],
  },
  {
    productName: "Smartwatch",
    productImage: "/img/product_img.png",
    price: 199.99,
    rating: 4.5,
    orderDateTime: "2024-11-14T08:20:00Z",
    productionDate: "2024-09-01",
    totalQuantity: 80,
    orderQuantity: 4,
    status: "Shipped",
    orderLocation: "Tokyo, Japan",
    category: "Wearables",
    sku: "SW-2024-015",
    supplier: "Future Gadgets Co.",
    productDescription:
      "Feature-packed smartwatch with fitness tracking and notification alerts.",
    orderedCustomerName: "Hiroshi Tanaka",
    availableColors: ["#000000", "#FF4500", "#4682B4"],
  },
  {
    productName: "Noise-Cancelling Headphones",
    productImage: "/img/product_img.png",
    price: 120.75,
    rating: 4.5,
    orderDateTime: "2024-11-10T16:30:00Z",
    productionDate: "2024-06-18",
    totalQuantity: 300,
    orderQuantity: 12,
    status: "Pending",
    orderLocation: "Toronto, Canada",
    category: "Audio",
    sku: "NCH-2024-003",
    supplier: "SoundCore Inc.",
    productDescription:
      "Comfortable headphones with active noise cancellation and immersive sound.",
    orderedCustomerName: "Emma Brown",
    availableColors: ["#4B0082", "#000000", "#2E8B57"],
  },
  {
    productName: "Ergonomic Chair",
    productImage: "/img/product_img.png",
    price: 149.99,
    rating: 4.5,
    orderDateTime: "2024-11-11T13:15:00Z",
    productionDate: "2024-05-30",
    totalQuantity: 120,
    orderQuantity: 1,
    status: "Delivered",
    orderLocation: "Sydney, Australia",
    category: "Furniture",
    sku: "EC-2024-007",
    supplier: "Comfort Seating Co.",
    productDescription:
      "Ergonomic office chair with lumbar support and adjustable height settings.",
    orderedCustomerName: "James Wilson",
    availableColors: ["#696969", "#2F4F4F", "#778899"],
  },
  {
    productName: "Fitness Tracker",
    productImage: "/img/product_img.png",
    price: 59.99,
    rating: 4.5,
    orderDateTime: "2024-11-15T07:50:00Z",
    productionDate: "2024-03-25",
    totalQuantity: 220,
    orderQuantity: 6,
    status: "Processing",
    orderLocation: "Mumbai, India",
    category: "Health",
    sku: "FT-2024-012",
    supplier: "Active Gear Ltd.",
    productDescription:
      "Lightweight fitness tracker with heart rate monitor and step counter.",
    orderedCustomerName: "Arjun Mehta",
    availableColors: ["#FF4500", "#4682B4", "#32CD32"],
  },
  {
    productName: "4K Monitor",
    productImage: "/img/product_img.png",
    price: 299.99,
    rating: 4.5,
    orderDateTime: "2024-11-10T14:00:00Z",
    productionDate: "2024-04-10",
    totalQuantity: 60,
    orderQuantity: 8,
    status: "Shipped",
    orderLocation: "Dubai, UAE",
    category: "Electronics",
    sku: "4KM-2024-008",
    supplier: "Vision Displays Co.",
    productDescription:
      "Ultra-HD 4K monitor with HDR support and excellent color accuracy.",
    orderedCustomerName: "Ahmed Ali",
    availableColors: ["#000000", "#808080", "#FFFFFF"],
  },
  {
    productName: "Wireless Charger",
    productImage: "/img/product_img.png",
    price: 18.99,
    rating: 4.5,
    orderDateTime: "2024-11-12T19:40:00Z",
    productionDate: "2024-07-15",
    totalQuantity: 500,
    orderQuantity: 20,
    status: "Delivered",
    orderLocation: "Rome, Italy",
    category: "Accessories",
    sku: "WC-2024-009",
    supplier: "ChargeTech Inc.",
    productDescription:
      "Fast and compact wireless charger for all Qi-compatible devices.",
    orderedCustomerName: "Giovanni Russo",
    availableColors: ["#FFD700", "#DCDCDC", "#0000FF"],
  },
  {
    productName: "Portable Power Bank",
    productImage: "/img/product_img.png",
    price: 35.5,
    rating: 4.5,
    orderDateTime: "2024-11-11T22:30:00Z",
    productionDate: "2024-08-05",
    totalQuantity: 300,
    orderQuantity: 7,
    status: "Shipped",
    orderLocation: "San Francisco, USA",
    category: "Accessories",
    sku: "PB-2024-030",
    supplier: "EnergyHub Ltd.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Drone Camera",
    productImage: "/img/product_img.png",
    price: 499.99,
    rating: 4.5,
    orderDateTime: "2024-11-09T15:00:00Z",
    productionDate: "2024-05-20",
    totalQuantity: 25,
    orderQuantity: 1,
    status: "Cancelled",
    orderLocation: "Cape Town, South Africa",
    category: "Photography",
    sku: "DC-2024-011",
    supplier: "AeroView Inc.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Waterproof Smart Backpack",
    productImage: "/img/product_img.png",
    price: 75.99,
    rating: 4.5,
    orderDateTime: "2024-11-14T11:45:00Z",
    productionDate: "2024-09-12",
    totalQuantity: 400,
    orderQuantity: 15,
    status: "Pending",
    orderLocation: "Seoul, South Korea",
    category: "Travel",
    sku: "WB-2024-019",
    supplier: "Urban Gear Co.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Electric Scooter",
    productImage: "/img/product_img.png",
    price: 999.99,
    rating: 4.5,
    orderDateTime: "2024-11-13T17:10:00Z",
    productionDate: "2024-02-28",
    totalQuantity: 15,
    orderQuantity: 2,
    status: "Delivered",
    orderLocation: "Mexico City, Mexico",
    category: "Transportation",
    sku: "ES-2024-004",
    supplier: "EcoRiders Ltd.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Instant Coffee Maker",
    productImage: "/img/product_img.png",
    price: 89.99,
    rating: 4.5,
    orderDateTime: "2024-11-10T08:30:00Z",
    productionDate: "2024-01-10",
    totalQuantity: 100,
    orderQuantity: 3,
    status: "Shipped",
    orderLocation: "Buenos Aires, Argentina",
    category: "Kitchen",
    sku: "CM-2024-021",
    supplier: "BrewTech Co.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Robot Vacuum Cleaner",
    productImage: "/img/product_img.png",
    price: 349.99,
    rating: 4.5,
    orderDateTime: "2024-11-12T09:15:00Z",
    productionDate: "2024-03-15",
    totalQuantity: 80,
    orderQuantity: 1,
    status: "Processing",
    orderLocation: "Jakarta, Indonesia",
    category: "Home Appliances",
    sku: "RV-2024-002",
    supplier: "CleanLiving Solutions",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Electric Toothbrush",
    productImage: "/img/product_img.png",
    price: 49.99,
    rating: 4.5,
    orderDateTime: "2024-11-11T10:30:00Z",
    productionDate: "2024-04-20",
    totalQuantity: 250,
    orderQuantity: 9,
    status: "Shipped",
    orderLocation: "Moscow, Russia",
    category: "Health & Personal Care",
    sku: "ET-2024-014",
    supplier: "OralCare Tech",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Wireless Earbuds",
    productImage: "/img/product_img.png",
    price: 89.5,
    rating: 4.5,
    orderDateTime: "2024-11-10T18:45:00Z",
    productionDate: "2024-06-30",
    totalQuantity: 400,
    orderQuantity: 10,
    status: "Delivered",
    orderLocation: "Singapore",
    category: "Audio",
    sku: "WE-2024-016",
    supplier: "AudioXpress Ltd.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Smart Door Lock",
    productImage: "/img/product_img.png",
    price: 129.99,
    rating: 4.5,
    orderDateTime: "2024-11-12T13:00:00Z",
    productionDate: "2024-07-25",
    totalQuantity: 90,
    orderQuantity: 2,
    status: "Processing",
    orderLocation: "Riyadh, Saudi Arabia",
    category: "Security",
    sku: "SDL-2024-018",
    supplier: "SafeTech Inc.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Outdoor Tent",
    productImage: "/img/product_img.png",
    price: 150.0,
    rating: 4.5,
    orderDateTime: "2024-11-09T17:20:00Z",
    productionDate: "2024-05-10",
    totalQuantity: 300,
    orderQuantity: 5,
    status: "Shipped",
    orderLocation: "Los Angeles, USA",
    category: "Outdoor",
    sku: "OT-2024-022",
    supplier: "Adventure Gear Cos",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Electric Kettle",
    productImage: "/img/product_img.png",
    price: 25.99,
    rating: 4.5,
    orderDateTime: "2024-11-15T06:40:00Z",
    productionDate: "2024-01-15",
    totalQuantity: 200,
    orderQuantity: 4,
    status: "Delivered",
    orderLocation: "Beijing, China",
    category: "Kitchen",
    sku: "EK-2024-013",
    supplier: "HomeBrew Solutions",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Portable Blender",
    productImage: "/img/product_img.png",
    price: 45.75,
    rating: 4.5,
    orderDateTime: "2024-11-12T20:10:00Z",
    productionDate: "2024-08-08",
    totalQuantity: 500,
    orderQuantity: 10,
    status: "Pending",
    orderLocation: "Bangkok, Thailand",
    category: "Kitchen",
    sku: "PB-2024-017",
    supplier: "BlenderPro Co.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Wireless Router",
    productImage: "/img/product_img.png",
    price: 85.99,
    rating: 4.5,
    orderDateTime: "2024-11-11T11:20:00Z",
    productionDate: "2024-06-10",
    totalQuantity: 150,
    orderQuantity: 3,
    status: "Cancelled",
    orderLocation: "Warsaw, Poland",
    category: "Networking",
    sku: "WR-2024-029",
    supplier: "NetX Solutions",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Action Camera",
    productImage: "/img/product_img.png",
    price: 199.99,
    rating: 4.5,
    orderDateTime: "2024-11-09T16:55:00Z",
    productionDate: "2024-02-20",
    totalQuantity: 120,
    orderQuantity: 7,
    status: "Shipped",
    orderLocation: "Madrid, Spain",
    category: "Photography",
    sku: "AC-2024-006",
    supplier: "AdventureCam Ltd.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Electric Grill",
    productImage: "/img/product_img.png",
    price: 149.99,
    rating: 4.5,
    orderDateTime: "2024-11-13T10:30:00Z",
    productionDate: "2024-03-12",
    totalQuantity: 80,
    orderQuantity: 2,
    status: "Delivered",
    orderLocation: "Hanoi, Vietnam",
    category: "Kitchen",
    sku: "EG-2024-024",
    supplier: "GrillMaster Pro",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "VR Headset",
    productImage: "/img/product_img.png",
    price: 299.5,
    rating: 4.5,
    orderDateTime: "2024-11-15T09:20:00Z",
    productionDate: "2024-08-15",
    totalQuantity: 60,
    orderQuantity: 5,
    status: "Pending",
    orderLocation: "Kuala Lumpur, Malaysia",
    category: "Gaming",
    sku: "VRH-2024-026",
    supplier: "ImmersiveTech Co.",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Smart Thermostat",
    productImage: "/img/product_img.png",
    price: 129.99,
    rating: 4.5,
    orderDateTime: "2024-11-14T14:35:00Z",
    productionDate: "2024-04-05",
    totalQuantity: 75,
    orderQuantity: 1,
    status: "Shipped",
    orderLocation: "Vienna, Austria",
    category: "Home Automation",
    sku: "ST-2024-028",
    supplier: "SmartHome Tech",

    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Cordless Drill",
    productImage: "/img/product_img.png",
    price: 89.99,
    rating: 4.5,
    orderDateTime: "2024-11-12T10:25:00Z",
    productionDate: "2024-05-25",
    totalQuantity: 110,
    orderQuantity: 4,
    status: "Delivered",
    orderLocation: "Athens, Greece",
    category: "Tools",
    sku: "CD-2024-023",
    supplier: "Power Tools Co",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Digital Picture Frame",
    productImage: "/img/product_img.png",
    price: 65.5,
    rating: 4.5,
    orderDateTime: "2024-11-10T14:00:00Z",
    productionDate: "2024-07-18",
    totalQuantity: 200,
    orderQuantity: 3,
    status: "Processing",
    orderLocation: "Oslo, Norway",
    category: "Home Decor",
    sku: "DPF-2024-027",
    supplier: "Memories Digital Ltc",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
  {
    productName: "Digital Picture Frame Old edition",
    productImage: "/img/product_img.png",
    price: 65.5,
    rating: 4.5,
    orderDateTime: "2021-11-10T14:00:00Z",
    productionDate: "2021-07-18",
    totalQuantity: 200,
    orderQuantity: 3,
    status: "Processing",
    orderLocation: "Oslo, Norway",
    category: "Home Decor",
    sku: "DPF-2024-027",
    supplier: "Memories Digital Ltc",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni explicabo sed dolor asperiores reiciendis minus ad voluptatibus qui omnis saepe dolore voluptas eveniet, fugiat modi soluta quasi rerum totam tenetur dignissimos exercitationem, magnam quam culpa? Quo qui hic officiis provident dolores rem, est at maxime tempore commodi ipsam voluptatem sint?",
    orderedCustomerName: "John Doe",
    availableColors: ["#000000", "#FFFFFF", "#FF4500"],
  },
];

export const CUSTOMER_CONTACT: Contact[] = [
  {
    id: "customer-1",
    username: "johndoe",
    profileImage: "/img/customer1.png",
    email: "johndoe@example.com",
    phone: "+1-555-1234",
    address: {
      street: "123 Maple Street",
      city: "Springfield",
      state: "IL",
      zip: "62704",
    },
  },
  {
    id: "customer-2",
    username: "janedoe",
    profileImage: "/img/customer2.png",
    email: "janedoe@example.com",
    phone: "+1-555-5678",
    address: {
      street: "456 Oak Avenue",
      city: "Greenville",
      state: "CA",
      zip: "95947",
    },
  },
  {
    id: "customer-3",
    username: "mikesmith",
    profileImage: "/img/customer1.png",
    email: "mikesmith@example.com",
    phone: "+1-555-8765",
    address: {
      street: "789 Pine Lane",
      city: "Riverdale",
      state: "NY",
      zip: "10471",
    },
  },
  {
    id: "customer-4",
    username: "sarajones",
    profileImage: "/img/customer2.png",
    email: "sarajones@example.com",
    phone: "+1-555-3456",
    address: {
      street: "321 Birch Court",
      city: "Fairfield",
      state: "CT",
      zip: "06824",
    },
  },
  {
    id: "customer-5",
    username: "davidbrown",
    profileImage: "/img/customer1.png",
    email: "davidbrown@example.com",
    phone: "+1-555-9876",
    address: {
      street: "654 Cedar Drive",
      city: "Madison",
      state: "WI",
      zip: "53703",
    },
  },
  {
    id: "customer-6",
    username: "emilywhite",
    profileImage: "/img/customer2.png",
    email: "emilywhite@example.com",
    phone: "+1-555-4321",
    address: {
      street: "987 Elm Street",
      city: "Lincoln",
      state: "NE",
      zip: "68508",
    },
  },
  {
    id: "customer-7",
    username: "robertjohnson",
    profileImage: "/img/customer1.png",
    email: "robertjohnson@example.com",
    phone: "+1-555-6543",
    address: {
      street: "159 Spruce Avenue",
      city: "Boulder",
      state: "CO",
      zip: "80302",
    },
  },
  {
    id: "customer-8",
    username: "laurawilson",
    profileImage: "/img/customer2.png",
    email: "laurawilson@example.com",
    phone: "+1-555-7890",
    address: {
      street: "753 Aspen Boulevard",
      city: "Orlando",
      state: "FL",
      zip: "32801",
    },
  },
  {
    id: "customer-9",
    username: "peterclark",
    profileImage: "/img/customer1.png",
    email: "peterclark@example.com",
    phone: "+1-555-2468",
    address: {
      street: "951 Redwood Circle",
      city: "Portland",
      state: "OR",
      zip: "97205",
    },
  },
  {
    id: "customer-10",
    username: "nancyhall",
    profileImage: "/img/customer1.png",
    email: "nancyhall@example.com",
    phone: "+1-555-1357",
    address: {
      street: "258 Willow Way",
      city: "Seattle",
      state: "WA",
      zip: "98101",
    },
  },
];

export const TEAM_MEMBERS: Member[] = [
  {
    id: "member-1",
    username: "johndoe",
    profileImage: "/img/customer1.png",
    email: "johndoe@example.com",
    position: "CEO",
  },
  {
    id: "member-2",
    username: "janedoe",
    profileImage: "/img/customer2.png",
    email: "janedoe@example.com",
    position: "CTO",
  },
  {
    id: "member-3",
    username: "mikesmith",
    profileImage: "/img/customer1.png",
    email: "mikesmith@example.com",
    position: "COO",
  },
  {
    id: "member-4",
    username: "sarajones",
    profileImage: "/img/customer2.png",
    email: "sarajones@example.com",
    position: "Manager",
  },
  {
    id: "member-5",
    username: "davidbrown",
    profileImage: "/img/customer1.png",
    email: "davidbrown@example.com",
    position: "Manager",
  },
  {
    id: "member-6",
    username: "emilywhite",
    profileImage: "/img/customer2.png",
    email: "emilywhite@example.com",
    position: "Manager",
  },
  {
    id: "member-7",
    username: "robertjohnson",
    profileImage: "/img/customer1.png",
    email: "robertjohnson@example.com",
    position: "Admin",
  },
  {
    id: "member-8",
    username: "laurawilson",
    profileImage: "/img/customer2.png",
    email: "laurawilson@example.com",
    position: "Admin",
  },
  {
    id: "member-9",
    username: "peterclark",
    profileImage: "/img/customer1.png",
    email: "peterclark@example.com",
    position: "Admin",
  },
  {
    id: "member-10",
    username: "nancyhall",
    profileImage: "/img/customer1.png",
    email: "nancyhall@example.com",
    position: "Office workder",
  },
];
