import { config } from 'dotenv';
config();

const {
  DEFAULT_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  JWT_SECRET,
  MAILER_GMAIL,
  MAILER_PASSWORD
} = process.env;

export {
  DEFAULT_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  JWT_SECRET,
  MAILER_GMAIL,
  MAILER_PASSWORD
}