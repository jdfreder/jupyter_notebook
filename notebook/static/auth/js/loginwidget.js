// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

"use strict";

var utils = require('base/js/utils');
var $ = require('jquery');

var LoginWidget = function (selector, options) {
    options = options || {};
    this.base_url = options.base_url || utils.get_body_data("baseUrl");
    this.selector = selector;
    if (this.selector !== undefined) {
        this.element = $(selector);
        this.bind_events();
    }
};


LoginWidget.prototype.bind_events = function () {
    var that = this;
    this.element.find("button#logout").click(function () {
        window.location = utils.url_join_encode(
            that.base_url,
            "logout"
        );
    });
    this.element.find("button#login").click(function () {
        window.location = utils.url_join_encode(
            that.base_url,
            "login"
        );
    });
};

exports.LoginWidget = LoginWidget;
