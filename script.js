const hero = document.getElementById('hero');

// 背景图列表，放在 images/ 文件夹里
const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg'
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

// 初始显示
changeBackground();

// 每 5 秒轮换一次
setInterval(changeBackground, 5000);

// 团队图片左右滑动/翻页控制
document.addEventListener('DOMContentLoaded', function () {
  const poster = document.getElementById('teamPoster');
  const prev = document.querySelector('.poster-nav.prev');
  const next = document.querySelector('.poster-nav.next');

  if (poster) {
    function scrollPage(direction = 1) {
      // 滚动一屏（大约显示 4 张）；使用可见宽度来翻页
      const amount = poster.clientWidth;
      poster.scrollBy({ left: amount * direction, behavior: 'smooth' });
    }

    prev && prev.addEventListener('click', () => scrollPage(-1));
    next && next.addEventListener('click', () => scrollPage(1));

    // 支持左右键控制（同时保留案例左右键功能）
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') scrollPage(-1);
      if (e.key === 'ArrowRight') scrollPage(1);
    });
  }
});

// 案例走马灯控制
document.addEventListener('DOMContentLoaded', function () {
  // 新版：案例展示（左右布局）切换逻辑
  const casesData = [
    {
      img: 'images/case1.jpg',
      title: 'XADV 改装案例',
      desc: '11111',
      link: 'case1.html'
    },
    {
      img: 'images/case2.jpg',
      title: '杜卡迪改装案例',
      desc: '22222',
      link: 'case2.html'
    },
    {
      img: 'images/case3.jpg',
      title: '川崎改装案例',
      desc: '333333',
      link: 'case3.html'
    }
  ];

  let caseIdx = 0;

  const showcaseImage = document.getElementById('showcaseImage');
  const caseTitle = document.getElementById('caseTitle');
  const caseDesc = document.getElementById('caseDesc');
  const caseLink = document.getElementById('caseLink');
  const caseIndex = document.getElementById('caseIndex');
  const caseTotal = document.getElementById('caseTotal');

  if (!showcaseImage || !caseTitle) return;

  function renderCase() {
    const item = casesData[caseIdx];
    showcaseImage.style.backgroundImage = `url(${item.img})`;
    caseTitle.textContent = item.title;
    caseDesc.textContent = item.desc;
    caseLink.href = item.link;
    caseIndex.textContent = String(caseIdx + 1).padStart(2, '0');
    caseTotal.textContent = String(casesData.length).padStart(2, '0');
  }

  renderCase();

  function go(n) {
    caseIdx = (caseIdx + n + casesData.length) % casesData.length;
    renderCase();
  }

  document.querySelector('.cases-arrow.prev')?.addEventListener('click', () => go(-1));
  document.querySelector('.cases-arrow.next')?.addEventListener('click', () => go(1));

  // 键盘切换
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
});
