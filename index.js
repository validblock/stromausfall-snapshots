const Pageres = require('pageres');

(async () => {
    await new Pageres({
        delay: 20,
        hide: ['.welcome', '.menu', '.feature', '#bottombuttons'],
        darkMode: true,
        filename: '<%= date %>'
    })
        .src('https://xn--strungsauskunft-9sb.de/stromausfall', ['1024x1280'])
        .dest(`${__dirname}/${(new Date()).getFullYear()}`)
        .run();

    console.log('Finished!');
})();
