//版權警示
window.onload = function() {
  alert("此網站所用圖示、內容均來自明日方舟官方網站，版權所有方為其版权属于 Arknights/上海鹰角网络科技有限公司，此網站僅作整理與展示，無針對圖示、內容做任何修改，請勿用於商業用途。");
}

// 顯示或隱藏按鈕
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// 滾動至頂部
function scrollToTop() {
  document.body.scrollTop = 0; // 针对 Safari
  document.documentElement.scrollTop = 0; // 针对 Chrome、Firefox、IE 和 Opera
}

// 職業導引按鈕
var professionDropdownContent = document.querySelector(".profession-dropdown-content");

function showProfessionDropdownContent() {
  professionDropdownContent.style.display = "block";
}

function hideProfessionDropdownContent() {
  professionDropdownContent.style.display = "none";
}

// 先鋒幹員導引按鈕
var pioneeroperatorDropdownContent = document.querySelector(".pioneer-operator-dropdown-content");

function pioneertoggleOperatorDropdown() {
  pioneeroperatorDropdownContent.style.display = pioneeroperatorDropdownContent.style.display === "block" ? "none" : "block";
}
// 近衛幹員導引按鈕
var konoeoperatorDropdownContent = document.querySelector(".konoe-operator-dropdown-content");

function konoetoggleOperatorDropdown() {
  konoeoperatorDropdownContent.style.display = konoeoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//狙擊幹員導引按鈕
var snipeoperatorDropdownContent = document.querySelector(".snipe-operator-dropdown-content");

function snipetoggleOperatorDropdown() {
  snipeoperatorDropdownContent.style.display = snipeoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//重裝幹員導引按鈕
var reinstalloperatorDropdownContent = document.querySelector(".reinstall-operator-dropdown-content");

function reinstalltoggleOperatorDropdown() {
  reinstalloperatorDropdownContent.style.display = reinstalloperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//醫療幹員導引按鈕
var medicaloperatorDropdownContent = document.querySelector(".medical-operator-dropdown-content");

function medicaltoggleOperatorDropdown() {
  medicaloperatorDropdownContent.style.display = medicaloperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//輔助幹員導引按鈕
var auxiliaryoperatorDropdownContent = document.querySelector(".auxiliary-operator-dropdown-content");

function auxiliarytoggleOperatorDropdown() {
  auxiliaryoperatorDropdownContent.style.display = auxiliaryoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//術士幹員導引按鈕
var warlockoperatorDropdownContent = document.querySelector(".warlock-operator-dropdown-content");

function warlocktoggleOperatorDropdown() {
  warlockoperatorDropdownContent.style.display = warlockoperatorDropdownContent.style.display === "block" ? "none" : "block";
}
//特種幹員導引按鈕
var specialoperatorDropdownContent = document.querySelector(".special-operator-dropdown-content");

function specialtoggleOperatorDropdown() {
  specialoperatorDropdownContent.style.display = specialoperatorDropdownContent.style.display === "block" ? "none" : "block";
}




//先鋒
//繆爾賽思
document.getElementById('button-繆爾賽思-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-繆爾賽思-精零');
  imageA.src = '圖/幹員/繆爾賽思/精二.png';
});

document.getElementById('button-繆爾賽思-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-繆爾賽思-精零');
  imageA.src = '圖/幹員/繆爾賽思/精零.png';
});
//伊內絲
document.getElementById('button-伊內絲-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-伊內絲-精零');
  imageA.src = '圖/幹員/伊內絲/精二.png';
});

document.getElementById('button-伊內絲-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-伊內絲-精零');
  imageA.src = '圖/幹員/伊內絲/精零.png';
});
//伺夜
document.getElementById('button-伺夜-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-伺夜-精零');
  imageA.src = '圖/幹員/伺夜/精二.png';
});

document.getElementById('button-伺夜-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-伺夜-精零');
  imageA.src = '圖/幹員/伺夜/精零.png';
});
//焰尾
document.getElementById('button-焰尾-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰尾-精零');
  imageA.src = '圖/幹員/焰尾/精二.png';
});

document.getElementById('button-焰尾-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰尾-精零');
  imageA.src = '圖/幹員/焰尾/精零.png';
});

document.getElementById('button-焰尾-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰尾-精零');
  imageA.src = '圖/幹員/焰尾/小健將.png';
});
//琴柳
document.getElementById('button-琴柳-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-琴柳-精零');
  imageA.src = '圖/幹員/琴柳/精二.png';
});

document.getElementById('button-琴柳-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-琴柳-精零');
  imageA.src = '圖/幹員/琴柳/精零.png';
});

document.getElementById('button-琴柳-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-琴柳-精零');
  imageA.src = '圖/幹員/琴柳/識芳.png';
});

//近衛
//聖約送葬人
document.getElementById('button-聖約送葬人-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-聖約送葬人-精零');
  imageC.src = '圖/幹員/聖約送葬人/精二.png';
});

document.getElementById('button-聖約送葬人-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-聖約送葬人-精零');
  imageC.src = '圖/幹員/聖約送葬人/精零.png';
});
//仇白
document.getElementById('button-仇白-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-仇白-精零');
  imageC.src = '圖/幹員/仇白/精二.png';
});

document.getElementById('button-仇白-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-仇白-精零');
  imageC.src = '圖/幹員/仇白/精零.png';
});
//重岳
document.getElementById('button-重岳-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-重岳-精零');
  imageC.src = '圖/幹員/重岳/精二.png';
});

document.getElementById('button-重岳-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-重岳-精零');
  imageC.src = '圖/幹員/重岳/精零.png';
});
//瑪恩納
document.getElementById('button-瑪恩納-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-瑪恩納-精零');
  imageC.src = '圖/幹員/瑪恩納/精二.png';
});

document.getElementById('button-瑪恩納-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-瑪恩納-精零');
  imageC.src = '圖/幹員/瑪恩納/精零.png';
});
//百煉嘉維爾
document.getElementById('button-百煉嘉維爾-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-百煉嘉維爾-精零');
  imageC.src = '圖/幹員/百煉嘉維爾/精二.png';
});

document.getElementById('button-百煉嘉維爾-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-百煉嘉維爾-精零');
  imageC.src = '圖/幹員/百煉嘉維爾/精零.png';
});
//艾麗妮
document.getElementById('button-艾麗妮-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-艾麗妮-精零');
  imageC.src = '圖/幹員/艾麗妮/精二.png';
});

document.getElementById('button-艾麗妮-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-艾麗妮-精零');
  imageC.src = '圖/幹員/艾麗妮/精零.png';
});

document.getElementById('button-艾麗妮-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-艾麗妮-精零');
  imageA.src = '圖/幹員/艾麗妮/飛羽.png';
});
//耀騎士臨光
document.getElementById('button-耀騎士臨光-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-耀騎士臨光-精零');
  imageC.src = '圖/幹員/耀騎士臨光/精二.png';
});

document.getElementById('button-耀騎士臨光-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-耀騎士臨光-精零');
  imageC.src = '圖/幹員/耀騎士臨光/精零.png';
});

document.getElementById('button-耀騎士臨光-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-耀騎士臨光-精零');
  imageA.src = '圖/幹員/耀騎士臨光/復現榮光.png';
});
//帕拉斯
document.getElementById('button-帕拉斯-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-帕拉斯-精零');
  imageC.src = '圖/幹員/帕拉斯/精二.png';
});

document.getElementById('button-帕拉斯-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-帕拉斯-精零');
  imageC.src = '圖/幹員/帕拉斯/精零.png';
});

document.getElementById('button-帕拉斯-造型一').addEventListener('click', function() {
  var imageA = document.getElementById('image-帕拉斯-精零');
  imageA.src = '圖/幹員/帕拉斯/傳承.png';
});

document.getElementById('button-帕拉斯-造型二').addEventListener('click', function() {
  var imageA = document.getElementById('image-帕拉斯-精零');
  imageA.src = '圖/幹員/帕拉斯/山川的釀造.png';
});
//山
document.getElementById('button-山-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-山-精零');
  imageC.src = '圖/幹員/山/精二.png';
});

document.getElementById('button-山-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-山-精零');
  imageC.src = '圖/幹員/山/精零.png';
});

document.getElementById('button-山-造型一').addEventListener('click', function() {
  var imageA = document.getElementById('image-山-精零');
  imageA.src = '圖/幹員/山/烏雲.png';
});

document.getElementById('button-山-造型二').addEventListener('click', function() {
  var imageA = document.getElementById('image-山-精零');
  imageA.src = '圖/幹員/山/讀者.png';
});





//狙擊
//鴻雪
document.getElementById('button-鴻雪-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/精二.png';
});

document.getElementById('button-鴻雪-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/精零.png';
});

document.getElementById('button-鴻雪-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-鴻雪-精零');
  imageA.src = '圖/幹員/鴻雪/字句中的雪原.png';
});
//菲亞梅塔
document.getElementById('button-菲亞梅塔-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-菲亞梅塔-精零');
  imageA.src = '圖/幹員/菲亞梅塔/精二.png';
});

document.getElementById('button-菲亞梅塔-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-菲亞梅塔-精零');
  imageA.src = '圖/幹員/菲亞梅塔/精零.png';
});
//遠牙
document.getElementById('button-遠牙-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-遠牙-精零');
  imageA.src = '圖/幹員/遠牙/精二.png';
});

document.getElementById('button-遠牙-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-遠牙-精零');
  imageA.src = '圖/幹員/遠牙/精零.png';
});

document.getElementById('button-遠牙-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-遠牙-精零');
  imageA.src = '圖/幹員/遠牙/捉風.png';
});
//假日威龍陳
document.getElementById('button-假日威龍陳-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-假日威龍陳-精零');
  imageA.src = '圖/幹員/假日威龍陳/精二.png';
});

document.getElementById('button-假日威龍陳-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-假日威龍陳-精零');
  imageA.src = '圖/幹員/假日威龍陳/精零.png';
});

document.getElementById('button-假日威龍陳-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-假日威龍陳-精零');
  imageA.src = '圖/幹員/假日威龍陳/萬重山.png';
});
//ASH
document.getElementById('button-ASH-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-ASH-精零');
  imageA.src = '圖/幹員/ASH/精二.png';
});

document.getElementById('button-ASH-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-ASH-精零');
  imageA.src = '圖/幹員/ASH/精零.png';
});

document.getElementById('button-ASH-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-ASH-精零');
  imageA.src = '圖/幹員/ASH/遊俠.png';
});
//空弦
document.getElementById('button-空弦-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-空弦-精零');
  imageA.src = '圖/幹員/空弦/精二.png';
});

document.getElementById('button-空弦-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-空弦-精零');
  imageA.src = '圖/幹員/空弦/精零.png';
});

document.getElementById('button-空弦-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-空弦-精零');
  imageA.src = '圖/幹員/空弦/宣傳策略.png';
});





//重裝
//斥罪
document.getElementById('button-斥罪-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-斥罪-精零');
  imageA.src = '圖/幹員/斥罪/精二.png';
});

document.getElementById('button-斥罪-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-斥罪-精零');
  imageA.src = '圖/幹員/斥罪/精零.png';
});
//號角
document.getElementById('button-號角-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/精二.png';
});

document.getElementById('button-號角-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/精零.png';
});

document.getElementById('button-號角-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-號角-精零');
  imageA.src = '圖/幹員/號角/化花.png';
});
//泥岩
document.getElementById('button-泥岩-精二').addEventListener('click', function() {
  var imageC = document.getElementById('image-泥岩-精零');
  imageC.src = '圖/幹員/泥岩/精二.png';
});

document.getElementById('button-泥岩-精零').addEventListener('click', function() {
  var imageC = document.getElementById('image-泥岩-精零');
  imageC.src = '圖/幹員/泥岩/精零.png';
});

document.getElementById('button-泥岩-造型一').addEventListener('click', function() {
  var imageA = document.getElementById('image-泥岩-精零');
  imageA.src = '圖/幹員/泥岩/靜謐午夜.png';
});

document.getElementById('button-泥岩-造型二').addEventListener('click', function() {
  var imageA = document.getElementById('image-泥岩-精零');
  imageA.src = '圖/幹員/泥岩/黑曜石.png';
});




//醫療
//焰影葦草
document.getElementById('button-焰影葦草-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰影葦草-精零');
  imageA.src = '圖/幹員/焰影葦草/精二.png';
});

document.getElementById('button-焰影葦草-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-焰影葦草-精零');
  imageA.src = '圖/幹員/焰影葦草/精零.png';
});
//流明
document.getElementById('button-流明-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/精二.png';
});

document.getElementById('button-流明-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/精零.png';
});

document.getElementById('button-流明-造型').addEventListener('click', function() {
  var imageA = document.getElementById('image-流明-精零');
  imageA.src = '圖/幹員/流明/燦海浮夢.png';
});




//輔助
//淬羽赫默
document.getElementById('button-淬羽赫默-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-淬羽赫默-精零');
  imageA.src = '圖/幹員/淬羽赫默/精二.png';
});

document.getElementById('button-淬羽赫默-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-淬羽赫默-精零');
  imageA.src = '圖/幹員/淬羽赫默/精零.png';
});
//白鐵
document.getElementById('button-白鐵-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-白鐵-精零');
  imageA.src = '圖/幹員/白鐵/精二.png';
});

document.getElementById('button-白鐵-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-白鐵-精零');
  imageA.src = '圖/幹員/白鐵/精零.png';
});



//術士
//霍爾海雅
document.getElementById('button-霍爾海雅-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-霍爾海雅-精零');
  imageA.src = '圖/幹員/霍爾海雅/精二.png';
});

document.getElementById('button-霍爾海雅-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-霍爾海雅-精零');
  imageA.src = '圖/幹員/霍爾海雅/精零.png';
});
//林
document.getElementById('button-林-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-林-精零');
  imageA.src = '圖/幹員/林/精二.png';
});

document.getElementById('button-林-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-林-精零');
  imageA.src = '圖/幹員/林/精零.png';
});




//特種
//麒麟X夜刀
document.getElementById('button-麒麟X夜刀-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-麒麟X夜刀-精零');
  imageA.src = '圖/幹員/麒麟X夜刀/精二.png';
});

document.getElementById('button-麒麟X夜刀-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-麒麟X夜刀-精零');
  imageA.src = '圖/幹員/麒麟X夜刀/精零.png';
});
//緘默德克薩斯
document.getElementById('button-緘默德克薩斯-精二').addEventListener('click', function() {
  var imageA = document.getElementById('image-緘默德克薩斯-精零');
  imageA.src = '圖/幹員/緘默德克薩斯/精二.png';
});

document.getElementById('button-緘默德克薩斯-精零').addEventListener('click', function() {
  var imageA = document.getElementById('image-緘默德克薩斯-精零');
  imageA.src = '圖/幹員/緘默德克薩斯/精零.png';
});
