This application is developed based on the Linked Data Reactor framework. Linked Data Reactor (LD-Reactor or LD-R) is a framework to develop reactive and reusable User Interface components for Linked Data applications based on ReactJS, Flux, Fluxible and Semantic-UI. 

Most of the configuration is done in the /configs files. In the code itself, besides other minor customizations, admin validation of database changes were added. 

The diff with the LD-R can be viewed [here](https://github.com/ali1k/ld-r/compare/master...charlie42:master) 

To start development, follow the [README of LD-R](https://github.com/ali1k/ld-r). Configurations file are already there, except configs/server.js that contains the database credentials. Copy the content of the configs/server.sample.js into the configs/server.js file and fill in the credentials.