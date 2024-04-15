function generateNumbers() {
  const minNumber = 1;
  const maxNumber = 36;
  const totalNumbers = 7;
  
  let selectedNumbers = [];

  while (selectedNumbers.length < totalNumbers) {
      let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      
      if (!selectedNumbers.includes(randomNumber)) {
          selectedNumbers.push(randomNumber);
      }
  }

  animateReels(selectedNumbers);
}

function animateReels(numbers) {
  const reels = document.querySelectorAll('.reel');
  reels.forEach((reel, index) => {
      setTimeout(() => {
          reel.style.transform = `translateY(-500px)`;
          setTimeout(() => {
              reel.textContent = numbers[index];
              reel.style.transform = `translateY(0)`;
          }, 1500);
      }, index * 200);
  });
}
