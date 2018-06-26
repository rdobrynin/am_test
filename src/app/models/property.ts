export interface Property {
  name?: string;
  description?: string;
  pictures?: Array<string>;
  metadata?: {
    street_address?: string;
    city?: string;
    zip?: string;
    country?: string;
    country_code?: string;
  };
}
