if (process.env.NODE_ENV === "local") {
  require("dotenv").config({ path: ".env.local" });
}
