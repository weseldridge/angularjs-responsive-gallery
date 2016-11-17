# Angular Responsive Image Gallery

This project is a simple gallery application utilizing the [AngularJs](http://angularjs.org/) framework. A bulk of the code was addpated from simpulton's [angular-album](https://github.com/simpulton/angular-album).

As a skeleton for this application we are using [angular-seed](https://github.com/angular/angular-seed). 

_Note: This project is just getting started. There is still a good bit of work to do. Stay tuned!_

## How to get started

Clone the repository and start playing...

### About angular-seed

Angular-seed provides a great environment outside that of a yoman/grunt workflow. It is easy to get started with. Check out their [documentation](https://github.com/angular/angular-seed) for a better insite.

A few requirements for working with angular-seed:

* [node.js](http://nodejs.org/) for working in the developer enviroment and running test.
* [Jasmine](http://pivotal.github.io/jasmine/) and [Karam](http://karma-runner.github.io/0.10/index.html) for running test

### Running the app during development

You have a few option here:

* Service the repository on your own webserver
* After installing node then run `node scripts/web-server.js`

If you choose the last option, navigate your browser to `http://localhost:<port>/app/index.html`. The default port is `8000`.


### Adding and removing images

As of now, image information is stored in a json file (`/app/images.json`). Each image object has the following structure.

  {
    "category" : "category name",
    "image" : "path/to/image.png",
    "thumbnail" : "path/to/thumbnail.png",
    "description" : "Image description"
  }

## Todo Notes

* Better responsiveness
* Write unit test
* Restyle default gallery
* Add lazy-loading of thumbnail
* Add touch features

## Contact

For more information on this project check out [http://rebelliouslabs.com](http://rebelliouslabs.com).
