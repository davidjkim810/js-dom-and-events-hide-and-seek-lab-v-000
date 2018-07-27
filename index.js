const getFirstSelector = function(selector){
  return document.querySelector(selector)
}

const nestedTarget = function (){
  return document.getElementById('nested').querySelector('div.target')
}


const increaseRankBy = function(n){
  let list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n)
  }
}
const deepestChild = function(){
 return document.querySelectorAll('div#grand-node div')[document.querySelectorAll('div#grand-node div').length - 1]

}
