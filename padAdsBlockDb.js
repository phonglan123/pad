var adsBlockDb = [
        'https://phonglan123.github.io/pad/ | https://i.ytimg.com/vi/ER126fHr-Oc/maxresdefault.jpg | Quảng cáo PADAD - Xem free',
        'https://github.com/phonglan123/pad/blob/main/README.md#đăng-kí-quảng-cáo | https://static.wixstatic.com/media/f9ad87_a7614660741d40c68f1bc8133a5caa33~mv2.gif | Đăng kí đặt quảng cáo hoàn toàn miễn phí',
        'https://desnetvietnam.blogspot.com/2019/11/ebook-bi-quyet-bien-nguoi-la-thanh.html | https://mrtranduong.com/wp-content/uploads/2019/10/EBOOK.jpg | Ebook "Bí Quyết Biến Người Lạ Thành Người Quen"',
        'https://desnetvietnam.blogspot.com/p/pha-mang-la-gi.html | https://1.bp.blogspot.com/-XRIRHcToKeg/XU7SpOcdy0I/AAAAAAAAJ_U/WH69xd2XMuAUkzP7VHtVSrexpqgGtxyKQCLcBGAs/s1600/ios12-no-internet-connection-icon_2x.png | Phá Mạng - Desnet!!!!"',
        'https://desnetvietnam.blogspot.com/p/ang-ky-nhan-bo-9-ky-nang-mem.html | https://1.bp.blogspot.com/-OU40F7bj4YA/XhcrxCWMSjI/AAAAAAAAKlU/rzNryu9tBYEgV4sY9NGJ5CMDyod_pqGxACLcBGAsYHQ/s1600/b%25E1%25BB%2599-9-k%25E1%25BB%25B9-n%25C4%2583ng-m%25E1%25BB%2581m.png | Đăng ký nhận BỘ 9 KỸ NĂNG MỀM'
    ],
    adsVideoDb = [
        'https://phonglan123.github.io/pad/ | https://www.w3schools.com/html/movie.mp4 | Quảng cáo PADAD - Xem free'
    ],
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
}, 
    getGGSheetAdsVideo = data => {
  var cells = [];
  data.feed.entry.forEach(entry => cells.push(entry.content['$t']))
  for (var i = 1; i < cells.length / 5; i++)
    multipleAdd_adsVideo(parseInt(cells[i * 5 + 4]), cells[i * 5 + 2] + " | " + cells[i * 5 + 3] + " | " + cells[i * 5 + 1])
};
addScript('https://spreadsheets.google.com/feeds/cells/1BsMi7V01jgJBKTOQA9wR2tJ8A5yqDhFe12bHpGtGmLA/1/public/values?alt=json-in-script&callback=getGGSheetAdsBlock')
addScript('https://spreadsheets.google.com/feeds/cells/1g9JDEJGxpwI9_GuNbRVUtSWztNYK__0OhbhbWtDuttM/1/public/values?alt=json-in-script&callback=getGGSheetAdsVideo')
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
padAdsDb = padAdsDb.sort(() => Math.random() - 0.5);
padAdsVideoDb = padAdsVideoDb.sort(() => Math.random() - 0.5);
