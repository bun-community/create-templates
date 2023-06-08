import { buchta } from "buchta-elysia-integration";
import Elysia from "elysia";

const app = new Elysia();

app.get("/hello", () => "Hello World!");
app.use(buchta);

// Why no .listen()?
// Buchta manages that for you :D
