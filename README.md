### Angular Component example

This is a very simple code to create an example of how to work with Angular 1.5 new component API.

The idea is create a way to share components between projects, the goal is:

1. A component should be stateless
2. A component should have their own styling

To achieve this, the repository use ES6 syntax through Babel and webpack and also [CSS Modules](https://github.com/css-modules/css-modules) to isolate the css rules for each component.


#### How to run the example

First install the dependencies

    $ npm install

Then build the project

		$ webpack -p

Then run the devserver

		$ webpack-dev-server

Open your browser in (localhost:8080)[http://localhost:8080]

#### Contribution

Issues and Pull request are welcome
