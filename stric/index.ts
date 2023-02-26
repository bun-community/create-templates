import Stric from "@stricjs/kit";

// This is a shorthand call, use all the options in ./src/stric.config.json
await Stric.boot();

// Log app mode
console.log("App is running in", Bun.env.NODE_ENV, "mode.");
