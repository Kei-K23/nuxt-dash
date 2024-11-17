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
  rating: number;
  orderDateTime: string;
  productionDate: string;
  totalQuantity: number;
  orderQuantity: number;
  status: string;
  orderLocation: string;
  category: string;
  sku: string;
  productDescription: string;
  orderedCustomerName: string;
  availableColors: string[];
  supplier: string;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
};

export type Contact = {
  username: string;
  profileImage: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};
export type Member = {
  username: string;
  profileImage: string;
  email: string;
  position: string;
};
