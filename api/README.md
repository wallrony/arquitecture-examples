# API Layer

Why do we need an API layer if we can make the HTTP requests directly of our UI components or services?

It's because:

- Facilitates the conversion of the response data from the HTTP request to a better model used in our top layers;
- Controls the responsability to deal with HTTP requests, avoiding to use a lot of diferent actions and libraries in the top layers.

## How to Execute?

To execute the application, first you need to follow the main [README.md](../README.md) to execute the fake backend.

To execute this application, you just need to follow the steps below:

- Execute `npm install` or `yarn` to install all needed packages;
- Then execute `npx ts-node index.ts` or `yarn ts-node index.ts` to run the application;
