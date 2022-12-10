export type AuthContextData = {
  currentUser?: AuthData;
  signup(): Promise<void>;
  signin(): Promise<void>;
  logout(): void;
  updateProfile(): Promise<void>;
  GoogleAuth(): Promise<void>;
};

export type AuthData = {
  displayName: string;
  email: string;
  password: string;
  tokenID: string;
  photoURL: string;
};
