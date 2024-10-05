require("dotenv").config();
const fs = require("fs");
const rfs = require("rotating-file-stream").createStream;
const path = require("path");

const logDirectry = path.join(__dirname, "../production_logs");
fs.existsSync(logDirectry) || fs.mkdirSync(logDirectry);

const accessLogStream = rfs("access.log", {
  interval: "1d",
  path: logDirectry,
});

//console.log(process.env.SOCIALHUB_GOOGLE_CALLBACK_URL);
//console.log(process.env.PORT);
const production = {
  name: "production",
  asset_path: process.env.SOCIALHUB_ASSET_PATH,
  db: process.env.SOCIALHUB_DB,
  session_cookie_key: process.env.SOCIALHUB_SESSION_COOKIE_KEY,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SOCIALHUB_GMAIL_USERNAME,
      pass: process.env.SOCIALHUB_GMAIL_PASSWORD,
    },
  },
  google_clientID: process.env.SOCIALHUB_GOOGLE_CLIENT_ID,
  google_clientSecret: process.env.SOCIALHUB_GOOGLE_CLIENT_SECRET,
  google_callbackURL: process.env.SOCIALHUB_GOOGLE_CALLBACK_URL,
  jwt_secret: process.env.SOCIALHUB_JWT_SECRET,
  mongoose_url: process.env.SOCIALHUB_MONGOO_URL,
  port: process.env.PORT,
  morgan: {
    mode: "combined",

    options: { stream: accessLogStream },
  },
};

module.exports = production;
