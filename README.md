# federated-next-monorepo

Setup with Next 14 (page routing) + Module Federation + npm workspaces + scss.

## Dependencies explained
### @module-federation/nextjs-mf
Core module in order to make module federation work with next

### cross-env
Module federation needs env variables. If you want to do this through terminal this is done differently between unix 
and win instance. cross-env solves this problem by giving the same config for all os.

### rimraf
The unix command rm -rf for node in a cross-platform implementation.

### sass
Why not? 

### webpack
Also this package is needed to work with module federation