'use strict'

//module.exports = function(message) {
export default function (message) {
    //if (process.env.NODE_ENV == 'development') {
    if (NODE_ENV == 'development') {
        console.log(message);
    }

    let log = document.getElementById("log");
    log.appendChild(document.createTextNode(`${message}\n`));
};