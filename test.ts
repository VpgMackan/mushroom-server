import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

console.log(jwt.sign({ info: "test" }, "asdgyfuwhg78qiu3rfg7sz8udicxhjbyetwaiubsjzhgvgjtUxftYXDfHXdrNYDFHFYmXFTXY"));
