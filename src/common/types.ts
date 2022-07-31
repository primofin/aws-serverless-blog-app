export type User = {
  id: string;
  username: string;
  given_name?: string;
  family_name?: string;
  gender?: string;
  email: string;
  address?: string;
  phone_number?: string;
  website?: string;
  locale?: string;
  picture?: string;
  ocuppation?: string;
  bioIntro?: string;
};

export type AuthState = {
  isLoading: boolean | null;
  isLoggedIn: boolean;
  user?: User;
  error?: unknown;
};

/**
 * Post
 */
export type Post = {
  id: string;
  title: string;
  content?: string;
  author: User;
};

export type PostState = {
  isLoading: boolean | null;
  posts: Post[];
  error?: unknown;
};
