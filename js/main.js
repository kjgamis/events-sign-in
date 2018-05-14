var signInButton = document.querySelector('button');
var closeButton  = document.querySelector('.close');
var modal        = document.querySelector('.modal');
var submitButton = document.querySelector('.submit');
var inputUser    = document.querySelector('#user');
var inputPass    = document.querySelector('#pass');

function showModal () {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

signInButton.addEventListener('click', showModal);

closeButton.addEventListener('click', hideModal);

submitButton.addEventListener('click', function() {
  inputUser.classList = 'error';
  inputPass.classList = 'error';
});

inputUser.addEventListener('click', function() {
  inputUser.classList = '';
});

inputPass.addEventListener('click', function() {
  inputPass.classList = '';
});

modal.addEventListener('click', function() {
  modal.style.display = 'none';
});
