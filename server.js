const db = require("./models/index");
require("dotenv").config();
const app = require("./index");

/**
 * @description add your db connection here
 */

// //connect to database
// (async () => {
//   await db.sequelize.sync();
//   console.log("Connected to MySQL");
// })();

const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`server running on port ${Port}`));
