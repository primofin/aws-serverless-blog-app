export type User = {
  username: string;
  given_name?: string;
  family_name?: string;
  preferred_username?: string;
  gender?: string;
  email: string;
  address?: string;
  phone_number?: string;
  website?: string;
  locale?: string;
  picture?: string;
};

export type AuthState = {
  isLoading: boolean | null;
  isLoggedIn: boolean;
  user?: User;
  error?: unknown;
};
