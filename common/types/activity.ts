export interface ActivityProps {
  id: number;
  name: string;
  description: string;
  image: string;
  date: Date;
  time?: string;
  location: string;
  status: string;
  isShow?: boolean;
}
