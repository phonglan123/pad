var adsBlockDb = [

'https://phonglan123.github.io/pad/ | https://i.ytimg.com/vi/ER126fHr-Oc/maxresdefault.jpg | Quảng cáo PADAD - Xem free',
'https://github.com/phonglan123/pad/blob/main/README.md#đăng-kí-quảng-cáo | https://static.wixstatic.com/media/f9ad87_a7614660741d40c68f1bc8133a5caa33~mv2.gif | Đăng kí đặt quảng cáo hoàn toàn miễn phí'

];

var adsVideoDb = [

'https://phonglan123.github.io/pad/ | https://a.uguu.se/voFkxbQL.mp4 | Quảng cáo PADAD - Xem free'

];

adsBlockDb.forEach(entry => padAdsDb.push({
    l: entry.split(' | ')[0],
    i: entry.split(' | ')[1],
    t: entry.split(' | ')[2]
}));

adsVideoDb.forEach(entry => padAdsVideoDb.push({
    l: entry.split(' | ')[0],
    v: entry.split(' | ')[1],
    t: entry.split(' | ')[2]
}));

shuffle(padAdsDb);
shuffle(padAdsVideoDb);
