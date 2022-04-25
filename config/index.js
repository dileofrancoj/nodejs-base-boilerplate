if (process.env.NODE_ENV === "production") {
    require("dotenv").config({ path: "production.env" });
  } else {
    require("dotenv").config({ path: "raspberry.env" });
  }