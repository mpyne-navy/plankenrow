# Overview

plankenrow is a demonstration [Node.js](https://nodejs.org/) application
intended to serve as a platform for experimentation with physical readiness and
fitness management using processes suspiciously similar to U.S. Navy processes.

# Building

You need:

* Node.js, something that supports ES6 syntax (`const`, arrow functions, etc.).
  I use Node 12.x.
* I've been using [Yarn](https://yarnpkg.com/) to manage the packages.json but I
  believe [npm](https://www.npmjs.com/) works also.

With those available, you run (from the directory holding this repository):

    $ yarn install

This installs any missing Node.js packages you may be missing and their dependencies.

# Running

Use the following command after you've successfully built the module (still
from the directory holding this repository):

    $ yarn run start

This starts the Node.js server with this application on port 3000.

From there point your web browser to http://localhost:3000/ to see what's
there.

# Major Dependencies

A running application uses these major dependencies:

* [U.S. Web Design Standards](https://github.com/uswds/uswds)
* [Express.js](https://expressjs.com/)
