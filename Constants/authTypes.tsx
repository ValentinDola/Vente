export type AuthContextData = {
  currentUser?: AuthData;
  loading: boolean;
  signup(): Promise<void>;
  signin(): Promise<void>;
  logout(): void;
  updateProfile(): Promise<void>;
};

export type AuthData = {
  displayName: string;
  email: string;
  password: string;
  tokenID: string;
  photoURL: string;
};
