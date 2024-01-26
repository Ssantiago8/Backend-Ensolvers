import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(8000);
    console.log("Server on port 8000");
  } catch (error) {
    console.log(error);
  }
}

main();
