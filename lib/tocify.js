const debug = require('debug')('lib:tocify');
const cheerio = require('cheerio');
const {
    escape,
    trim,
    unescape
} = require('lodash');

const PREFIX = '_';
const SEPARATOR = '-';

module.exports = str => {
    const $ = cheerio.load(str);
    const headerById = {};
    $('h1,h2,h3,h4,h5,h6').each(function () {
        const $header = $(this);
        const text = trim(unescape(escape($header.text())));
        let id = `${PREFIX}${text.replace(/["'&<>\s()/\\]+/g, SEPARATOR)}`;
        while (headerById[id]) {
            id = `${PREFIX}${id}`;
        }
        const level = $header.prop('tagName').replace(/h/i, '');
        debug(`id: ${id}, level: ${level}`);
        $header.append(`<a class="anchor" data-level="${level}" id=${id} href="#${id}"></a>`);
        headerById[id] = true;
        
    });
    return $.html();
};