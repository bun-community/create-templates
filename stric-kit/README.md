## Getting Started

This is the project bootstrapped for using `@stricjs/kit` with [ArrowJS](https://arrow-js.org).

- `index.ts`: Entry point of the project.
- `global.d.ts`: Global types of client and server
- `src/pages`: All pages to build.
- `src/routes`: All route handlers.
- `src/stric-pages.d.ts`: The global type definitions of the pages.
- `src/stric.config.json`: Default config for the project, will be merged with the config passed into `Stric.boot`

Start the app using:

```bash
# Run in development
bun run dev

# Run in production (for output minifying)
bun run prod
```

App will be available at [localhost:8080](http://localhost:3000).
