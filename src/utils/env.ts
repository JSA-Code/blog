import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  GOOGLE_ID: str(),
  GOOGLE_SECRET: str(),
  GITHUB_ID: str(),
  GITHUB_SECRET: str(),
  NEXTAUTH_URL: str(),
  NEXTAUTH_SECRET: str(),
  DATABASE_URL: str(),
  FIREBASE_SECRET: str(),
  FIREBASE_SENDER: str(),
  FIREBASE_ID: str(),
});

export default env;
