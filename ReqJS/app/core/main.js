requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery'
    }
});

require(['jquery', 'core/module1/init_module', 'core/module2/init_module'], function ($) {
    console.log('main init..!');

    $('#test1').append('<h1>REQ TEST1</h1>');
});