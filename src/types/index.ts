export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  features: string[];
  href: string;
  color: 'primary' | 'accent';
}