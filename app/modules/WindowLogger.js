import $ from 'jquery';

export function log(content) {
    console.log(content);
    $('#content').append("<h4 class = 'bg-info'>" + content + "</h4>");
}

export function logTitle(content) {
    console.log(content);
    $('#content').append("<h1 class = 'bg-primary'>" + content + "</h1>");
}