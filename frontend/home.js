//let welcome = require('./welcome');
import welcome from './welcome';


document.body.onload = function () {
    welcome("home");

    document.getElementById("btn1").onclick = function () {

        require.ensure([], function (require) { //в [] можно не указывать модули, поскольку webpack по внуьтреннему коду блока понимает что тут будет required
            let myasync = require('./myasync');
            //myasync.default();
            myasync();
        },
            "async_group" //Для того чтобы оба async модуля попали в один файл
        );

        //или AMD синтаксис
        /*require(["./myasync"], function(myasync) {
            myasync.default();
        });*/
    }

    document.getElementById("btn2").onclick = function () {

        require.ensure([], function (require) {
            let myasync2 = require('./myasync2');
            //myasync.default();
            myasync2();
        },
            "async_group"
        );
    }
}

exports.welcome = welcome;


