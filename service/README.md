# Service Layer

Why do we need to have a service layer instead of using directly the API in the top layers?

It's because:

- It isolates the API layer of the top laters (so only the service layer can touch the API layer);
- Help the maintainability in the bottom layers (like API layer);
- Controls the responsability to execute all the API needed calls, avoiding to import an API file in many top layer files (like Context and UI)

## How to Execute?

To execute the application, first you need to follow the main [README.md](../README.md) to execute the fake backend.

To execute this application, you just need to follow the steps below:

- Execute `npm install` or `yarn` to install all needed packages;
- Then execute `npx ts-node index.ts` or `yarn ts-node index.ts` to run the application;
