require.config({
    paths: {
        'underscore': 'vendor/underscore',
        'backbone'  : 'vendor/backbone',
        'marionette': 'vender/backbone.marionette',
        'jquery'    : 'vender/jquery'
        //templates
    },
    shim: {
        underscore  : {
            exports : '_'
        },
        backbone    : {
            exports : 'Backbone',
            deps    : ['jquery','underscore']
        },
        marionette  : {
            exports : 'Backbone.Marionette',
            deps    : ['backbone']
        }
    },
    deps : ['jquery','underscore']
});

require([
    'app',
    'backbone',
    'routers/index',
    'controllers/index'

], function () {
    'use strict';

    app.start();
    new Router({
        controller: Controller
    });
    Backbone.history.start();
});