function getFirstSelector(string){
  return document.querySelector(string);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild(){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i= 0; i < list.length; i++) {
    list[i].innerHTML = (i+1).toString()
  }
}