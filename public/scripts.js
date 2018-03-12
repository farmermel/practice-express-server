const plantButton = $('button');
const mainPage = $('.landing');
const rosePage = $('.rose-page');

const handleClick = (e) => {
  const response = fetch('/plant');
  window.location.href = window.location + 'plant';
}

plantButton.on('click', () => {
  try {
    handleClick();
  } catch (error) {
    console.log(error)
  }
})