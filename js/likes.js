let heart = document.querySelector('.top-comment__like-btn');
let likesNumber = document.querySelector('.top-comment__like-count');
let heartRest = document.querySelector('.rest-comment__like-btn');
let likesNumberRest = document.querySelector('.rest-comment__like-count');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('added');
};


heartRest.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumberRest.textContent--;
  } else {
    likesNumberRest.textContent++;
  }
  heart.classList.toggle('added');
};