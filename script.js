function goPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('show-center'));

  const target = document.getElementById('page' + pageNumber);
  target.classList.add('show-center');
}

function noClick() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const begText = document.getElementById('begText');

  noBtn.style.display = 'none';
  yesBtn.style.margin = '0 auto';
  begText.innerText = 'ไม่เอาาาา มาเป็นให้หมาเดะเถอะนะ 🐶💖';
}
