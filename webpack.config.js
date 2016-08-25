'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

var path = require("path");

//Мульти компиляция - используется для, например, компиляции разных версий сборок для разных языков или разных браузеров/версий браузеров
//  работает как если бы было определенно несколько настроечных файлов webpack и каждая бы запускалась отдельно (но мульти - работает гораздо эффективнее) 
//module.exports = [{...}, {...}, {...}];

module.exports = {
    context: path.resolve(__dirname, "frontend"),

    entry: {
        home: "./home",
        about: "./about",
        common: "./common" //на самом деле не явл. точкой входа, а исп. для, например, 
        //загрузки библиотек которые используются во всех настоящих entry point
        //поскольку его имя совпадает с тем, что указанно в плагине CommonsChunkPlugin, то
        //этот скрипт и общие чанки, которые надет плагин, будут объединенны в один файл - common-build.js

        //Так же можно указать список скриптов, которые должны попадать в common-build.js
        //common: ["./common", "./common2"] //Экспортирован будет только последний - common2
    },

    output: {
        path: path.join(__dirname, "public", "js"),
        publicPath: "/js/",
        filename: "[name]-build.js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(), //Делает так, что если при билде были ошибки, то в папке сборке будет пусто 
        //(вместо того что бы там были скрипты с ошибками-нерабочие)

        new webpack.DefinePlugin({ //позволяет определить переменные, которые можно использоваться в скриптах проекта
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),

        new webpack.optimize.CommonsChunkPlugin({

            name: "common"
            //minChunks:2 //Указывает минимальное количество entrypoint при котором общий код может уже бытьь вынесен в общий файл
            //chunks:['about','home'] //указывается из каких модулей необходимо извлекать общий код в отдельный файл
        })//,
        //плагин можно использовать несколько раз (для разных групп entry point)    
        //new webpack.optimize.CommonsChunkPlugin({         
        //name: "common2"
        //minChunks:2 //Указывает минимальное количество entrypoint при котором общий код может уже бытьь вынесен в общий файл
        //chunks:['shop','order'] //указывается из каких модулей необходимо извлекать общий код в отдельный файл
        //})
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [
                        'es2015-loose' //loose for IE8
                    ],
                    plugins: [
                        "transform-runtime", //Не понятно работает ли????    установка: npm install --save babel-runtime   AND   npm install babel-plugin-transform-runtime --save-dev
                        "add-module-exports",
                        "transform-es3-member-expression-literals", //for IE8
                        "transform-es3-property-literals" //for IE8

                    ]
                }
            }
        ]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}