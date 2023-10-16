let modal = document.getElementById('salesRuleModal');

let btn = document.getElementById('salesRuleClick');

let span = document.getElementsByClassName('closeicon')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
