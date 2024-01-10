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



// 獲取按鈕和圖片元素
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// 設定初始圖片路徑
let image1Path = '圖_test/f.png';
let image2Path = '圖_test/h.png';

// 按鈕A的點擊事件處理函式
buttonA.addEventListener('click', function() {
  // 切換圖片1為f.png
  image1.src = image1Path;
});

// 按鈕B的點擊事件處理函式
buttonB.addEventListener('click', function() {
  // 切換圖片1為g.png
  image1.src = '圖_test/g.png';
});

// 按鈕C的點擊事件處理函式
buttonC.addEventListener('click', function() {
  // 切換圖片2為h.png
  image2.src = image2Path;
});

// 按鈕D的點擊事件處理函式
buttonD.addEventListener('click', function() {
  // 切換圖片2為i.png
  image2.src = '圖_test/i.png';
});