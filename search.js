//获取元素，搜索框
let search_txt = document.querySelector('.search_txt')
const search_btn = document.querySelector('.search_btn')
let shiyi = document.querySelector('.shiyi')
//检验是否为农业
search_btn.addEventListener('click', function () {
  if (search_txt.value.includes('农业')) {
    shiyi.innerHTML = '欧尼'
  } else {
    console.error('搜索按钮元素未找到');
  }
})
//是，则显示内容