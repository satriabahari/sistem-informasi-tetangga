export interface PromotionProps {
  title: string;
  description: string;
  image: string;
  category: string;
  imageProfile: string;
  name: string;
  date?: string;
  isShow?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
