function showPadAds(link, title, imageURL) {
	document.getElementById('padAdsBlock').innerHTML = '<iframe src="https://phonglan123.github.io/pad/" style="position: absolute; top: -1000; left: -1000"></iframe><div style="border: 1px solid #ccc; height: 70px; width: 305px; user-select: none; cursor: pointer; font: 15px Arial, sans-serif;" onclick="window.open(' + "'" + link + "'" + '); loadPadAds();"> <div style="margin-left: 5px; border: 1px solid #ccc; background: white; margin-top: -10px; width: 85px; text-align: center">Được tài trợ</div> <img src="' + imageURL + '" style="margin: 5px; height: 50px; width: 100px"/> <div style="width: 190px; margin-top: -57px; margin-left: 110px; text-align: justify; height: 37px; overflow: hidden;"><b>' + title + '</b></div><div style="width: 190px; overflow: hidden; margin-top: 0px; margin-left: 110px; white-space: nowrap;">' + new URL(link).hostname + '</div></div>';
}

function loadPadAds() {
	var getRandom = Math.floor(Math.random() * database.length);
    showPadAds(database[getRandom].l, database[getRandom].t, database[getRandom].i);
}

var database = [];
loadPadAds();
