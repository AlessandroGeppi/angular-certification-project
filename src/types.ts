export interface Job {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  isFavorite: boolean;
}

export interface JobDetails extends Job {
  location: string;
  industries: string;
  types: string;
  description: string;
  publishDate: string;
}
