let nam = document.querySelector("#name");
let pass = document.querySelector('#password');
let btn = document.querySelector('#btn');
let passStatus = document.querySelector('#status>h3');

btn.addEventListener('click', function() {
  if(nam.value==='' && pass.value==='') {
    alert('Please fill details')
  }else if (pass.value.length > 0 && nam.value ==='') {
    alert('Please fill name details')
  }
  else if (pass.value.length > 8) {
    passStatus.innerHTML = 'Password is Strong!'
    passStatus.style.color = "green"
  }
  else {
    passStatus.innerHTML = 'Password is Weak!'
    passStatus.style.color = "red"
  }
})