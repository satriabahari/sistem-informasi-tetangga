export interface PromotionProps {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  building_area: number;
  block: string;
  price: number;
  isShow?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
