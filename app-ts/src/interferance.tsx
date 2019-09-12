export interface FormProps {
  first_name: string;
  last_name: string;
  age: number;
  agreetoterms?: boolean;
}

export interface FormState {
  submitted?: boolean;
  full_name: string;
  age: number;
}
