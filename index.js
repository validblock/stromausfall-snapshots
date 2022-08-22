const Pageres = require('pageres');
const fs = require('fs');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const localeDate = currentDate.toLocaleDateString('fr-CA');
const filePath = `${__dirname}/${currentYear}`;
const fileSuffix = '.png';

const normalizedFileName = () => {
    let count = 1;

    while (count < 10) {
        const fileName = `${localeDate} (${count})`;

        if (fs.existsSync(`${filePath}/${fileName}${fileSuffix}`)) {
            count ++;
        } else {
            return fileName;
        }
    }
}

(async () => {
    const path = `${__dirname}/${(new Date()).getFullYear()}`;

    await new Pageres({
        delay: 20,
        hide: ['.welcome', '.menu', '.feature', '#bottombuttons'],
        darkMode: true,
        filename: normalizedFileName(),
        cookies: ['welcomeViewed=1']
    })
        .src('https://xn--strungsauskunft-9sb.de/stromausfall', ['1024x1280'])
        .dest(filePath)
        .run();

    console.log('Finished!');
})();

