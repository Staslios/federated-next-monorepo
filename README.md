# federated-next-monorepo
Setup with Next 14 (page routing) + Module Federation + npm workspaces + scss.

## Getting started
Clone project
``` bash
git clone https://github.com/Staslios/federated-next-monorepo.git
```
then install deps
``` bash
cd federated-next-monorepo
npm i 
```
at last start project in dev mode
``` bash
npm run dev-all
```
It will start the main/shell app on localhost:3000 and the providers on :3001 and :3002

## Dependencies explained
- **@module-federation/nextjs-mf**: core module module federation module for next
- **cross-env**: solves environment variables problem between win and unix machines
- **rimraf**: same as cross-env but for the command remove `rm -rf`.
- **sass**: I guess why not? 
- **webpack**: Even tho Next comes with webpack we need it to install in order to work with Module Federation
- **concurrently**: It is a better version of 'npm run something & npm run something'

## Observations
1. The root `./node_modules` includes all downloaded deps, those inside the workspaces include some build time configuration for Module Federation;
2. Same speech for `./package.json`, it include all configured deps;
3. CSS or SCSS is either global inside _app.js or as css module and will be injected into js. Styles cannot be imported on separate file from the component;
4. Due to Module Federation app router is off limits;
5. Apparently Module Federation exported components can be imported in any way (`es import`, `dynamic`, `lazy`, `window`) they can be used both ssr and csr.
6. If you opt for SSR with exposed components from Module Federation, when building the _shell_ the _providers_ have to be up and running;
7. Yes, `_app.js` is needed.
8. Yes, `_document.js` is needed.

## Roadmap
- Docker build with federated modules - WIP
- Docker multi-stage build
- Docker volumes for `node_modules` - WIP
- Next standalone build