export interface User {
  firstName: string;
  lastName: string;
  age?: number;      // ? is used for aming the property optional
  address?: {
    street?: string,
    city?: string,
    province?: string
  };
}
