// SetTime out
// setTimeout(() => {
//   console.log('Good Morning, Tusar');
// }, 3500)


// Prompt
// const userInp = window.prompt('Enter your number', '');
// const number = parseFloat(userInp);
// const result = `${number + 200}`;
// alert(result)

// Confirm 
const userCheck = confirm('Are you this website link?');
if (userCheck) {
  console.log(location.href);
} else {
  alert('Dure Gia Mor! (DGM)');
}