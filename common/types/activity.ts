export interface ActivityProps {
  id: number;
  name: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  status: string;
  image: string;
  isShow?: boolean;
  [propname: string]: React.ReactNode | string | undefined;
}
