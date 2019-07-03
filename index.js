function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let list = document.querySelector('#grand-node').querySelectorAll('div');

  return list[list.length -1]

  // while (list.childElementCount > 0) {
  //   let list = list.querySelector('div');
  // }
  // return list.innerText
}

function increaseRankBy(n) {
  const list = document
  .querySelectorAll('ul.ranked-list li');

  for (let li of list) {
    li.innerHTML = parseInt(li.innerHTML) + n
  }
}
