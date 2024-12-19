export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  featured?: boolean;
  postedAt?: string;
}