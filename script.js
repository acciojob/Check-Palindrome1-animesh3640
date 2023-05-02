// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // loop through half of the string and compare characters
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome
