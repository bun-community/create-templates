import { Route } from "@stricjs/kit";

// Response "Hello" on every request to "/home"
export default new Route("/home")
    .handle(() => new Response("Hello"));
