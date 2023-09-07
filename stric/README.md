# Stric
This is a simple 'Hi' application made with Stric.

To start the app, use:
```bash
bun .
```

This example does not use `@stricjs/utils`. If you need more utilities to get the job done, see the docs [here](https://stricjs.netlify.app).
For more examples of complex application like a chat app, see this [repo](https://github.com/bunsvr/examples).

# Project structures
There are some project structures you can set up.

```bash
index.ts # Export the main app (for mocking in tests)
src # Include source files
├── index.ts # Import all router groups and export the app
├── routes # Include all router groups
│   └── index.group.ts # Split this into smaller groups 
├── view # UI and rendering
│   └── index.html
└── public/ # Serve static files
    └── robots.txt
tests # Include unit testing files
└── main.test.ts
```
