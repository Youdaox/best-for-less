export type address = {
  street_name: string;
  street_number?: string;
  unit?: string;
  region?: string;
  city?: string;
  postal_code?: string;
}

export type QuoteRequest = {
  movingFrom: address;
  movingTo: address;
  movingDate: Date;
  moveType: string;
  name: string;
  email: string;
  message?: string;
}

export type Service = {
  title: string;
  href: string;
  description: string;
  icon?: string;
}