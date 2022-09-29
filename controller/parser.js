const axios = require('axios');
const cheerio = require('cheerio');

const parse = async () => {
    const getHTML = async (url) => {
        const {data} = await axios.get(url)
        return cheerio.load(data)
    };
    let selector = await getHTML('https://jetup.digital/team');
    let workers = []
    selector('.text-block-item').each((i, element) => {
        let name = selector(element).find('h2.user-name').text();
        let text = selector(element).find('p.user-text').text().replace(/[\r\n]/gm, '');
        let position = selector(element).find('h3.position').text();
        workers.push({name, position, text})
    })
    await fetch('http://localhost:8000/api/worker', {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify(workers)
    })
};

module.exports = parse