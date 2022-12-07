"use strict";

$(function () {
    $.ajax("../data/blog.json").done(function(data) {
    var htmlString = "";
    data.forEach(function(post) {
        htmlString += "<article>";
        htmlString += "<h2>" + post.title + "</h2>";
        htmlString += "<h5>Posted on: " + post.date + "</h5>";
        htmlString += "<p>" + post.content + "</p>";
        htmlString += "<ul>";
        post.categories.forEach(function (category) {
            htmlString += "<li>" + category + "</li>"
            });
        htmlString += "</ul></article>";
        })
    })
});