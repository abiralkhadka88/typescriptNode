// const fs = require("fs");
// const path = require("path");

// const envFilePath = path.join(__dirname, ".ab");

// if (fs.existsSync(envFilePath)) {
//   const envFileContent = fs.readFileSync(envFilePath, "utf-8");
//   const envVariables = envFileContent.split("\n");

//   envVariables.forEach((envVar) => {
//     const [key, value] = envVar.split("=");
//     process.env[key.trim()] = value.trim();
//   });
// }

// console.log(process.env.NODE_ENV);

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DB_NAME);
