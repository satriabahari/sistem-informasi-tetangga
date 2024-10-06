export interface NeighborhoodFundProps {
  id: number;
  recipient_name: string;
  address: string;
  aid_type: string;
  aid_amount: number;
  distribution_date: Date;
  notes?: string;
  isShow?: boolean;
}
