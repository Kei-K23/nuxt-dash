export type DashboardCard = {
  name: string;
  price: string;
  icon: string;
  percentage: string;
  percentageText: string;
  percentageIcon: string;
  iconColor: string;
  isUp: boolean;
};

export type Product = {
  productName: string;
  productImage: string;
  price: number;
  orderDateTime: string;
  productionDate: string;
  totalQuantity: number;
  orderQuantity: number;
  status: string;
  orderLocation: string;
  category: string;
  sku: string;
  supplier: string;
};
