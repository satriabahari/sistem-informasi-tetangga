export interface SocialAidProps {
  id: number;
  transaction_type: string;
  amount: number;
  transaction_date: Date;
  notes?: string;
  isShow?: boolean;
}
