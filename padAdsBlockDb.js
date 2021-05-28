var adsBlockDb = [],
    adsVideoDb = [],
    multipleAdd_adsBlock = (times, value) => {
        for (var i = 0; i < times; i++)
            adsBlockDb.push(value)
    },
    multipleAdd_adsVideo = (times, value) => {
        for (var i = 0; i < times; i++)
            adsVideoDb.push(value)
    },
    getGGSheetAdsBlock = data => {
        var cells = [];
        data.feed.entry.forEach(entry => cells.push(entry.content['$t']))
        for (var i = 1; i < cells.length / 5; i++)
            multipleAdd_adsBlock(parseInt(cells[i * 5 + 4]), cells[i * 5 + 2] + " | " + cells[i * 5 + 3] + " | " + cells[i * 5 + 1])
        adsBlockDb.forEach(entry => padAdsDb.push({
            l: entry.split(' | ')[0],
            i: entry.split(' | ')[1],
            t: entry.split(' | ')[2]
        }));
        padAdsDb = padAdsDb.sort(() => Math.random() - 0.5);

    },
    getGGSheetAdsVideo = data => {
        var cells = [];
        data.feed.entry.forEach(entry => cells.push(entry.content['$t']))
        for (var i = 1; i < cells.length / 5; i++)
            multipleAdd_adsVideo(parseInt(cells[i * 5 + 4]), cells[i * 5 + 2] + " | " + cells[i * 5 + 3] + " | " + cells[i * 5 + 1])
        adsVideoDb.forEach(entry => padAdsVideoDb.push({
            l: entry.split(' | ')[0],
            v: entry.split(' | ')[1],
            t: entry.split(' | ')[2]
        }));
        padAdsVideoDb = padAdsVideoDb.sort(() => Math.random() - 0.5);

    };

addScript('https://spreadsheets.google.com/feeds/cells/1BsMi7V01jgJBKTOQA9wR2tJ8A5yqDhFe12bHpGtGmLA/1/public/values?alt=json-in-script&callback=getGGSheetAdsBlock')
addScript('https://spreadsheets.google.com/feeds/cells/1g9JDEJGxpwI9_GuNbRVUtSWztNYK__0OhbhbWtDuttM/1/public/values?alt=json-in-script&callback=getGGSheetAdsVideo')
