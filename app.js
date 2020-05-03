// Define UI variables
const feetInput = document.getElementById('feet'),
      inchesInput = document.getElementById('inches'),
      cenimetersInput = document.getElementById('cm'),
      clearBtn = document.querySelector('.clearBtn'),
      calculateBtn = document.querySelector('.calculateBtn'),
      resultsArea = document.querySelector('.results'),
      loadingGif = document.getElementById('loading');

// Event handlers
clearBtn.addEventListener('click', function(e){
  feetInput.value = '';
  inchesInput.value = '';
  resultsArea.innerHTML = '';
  cenimetersInput.value = '';

  e.preventDefault();
});

calculateBtn.addEventListener('click', function(e){
  if (feetInput.value !== '' && inchesInput.value !== ''){
    loadingGif.src = 'images/loading.gif';
    setTimeout(calculateFeetToCm, 1500);

  } else if (cenimetersInput.value !== '' && feetInput.value === '' && inchesInput.value === ''){
    loadingGif.src = 'images/loading.gif';
    setTimeout(caclulateCmToFeet, 1500);

  }


  e.preventDefault();
});

// Calculate results
function calculateFeetToCm(){
  loadingGif.src = '';
  let ft = parseInt(feetInput.value);
  let inch = parseInt(inchesInput.value);
  let fttotal = ft * 30.48;
  let intotal = inch * 2.54;
  let result = fttotal += intotal;
   resultsArea.innerHTML = result.toFixed(2) + ' ' + 'cm';

};

function caclulateCmToFeet(){
  loadingGif.src = '';
  let cmToInches = parseInt(cenimetersInput.value) / 2.54;
  let cmToFeet = cmToInches / 12;
  let findInches = cmToInches - 12 * Math.floor(cmToFeet);
  resultsArea.innerHTML = Math.floor(cmToFeet) + ' feet and ' + findInches + ' inches';

}