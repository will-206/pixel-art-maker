(function() {
  // drag draw
  // more buttons
  // make selected color/palette border blink
  // more palettes
  // turn on animation
  // paint bucket
  'use strict';

  //generate divs
  const screen = document.getElementById('screen');
  const screenWidth = 16;
  const screenHeight = 16;

  function generateDivs(height, width) {
    // var e = document.get
    for (let i = 1; i <= height; i++) {
      let row = document.createElement('section');
      row.className = "row ";
      row.id = "row" + i;
      for (let j = 1; j <= width; j++) {
        var pixel = document.createElement('div');
        pixel.className = "pixel " + j;
        // pixel.textContent= i + " " + j;
        row.appendChild(pixel);
      }
      screen.appendChild(row);
    }
  }
  generateDivs(screenHeight,screenWidth);


  // Add listeners to the screen
  screen.addEventListener('click', (event) => {
    if (event.target.id === 'screen' || event.target.parentNode.id === 'screen') {
      console.log("Nope, clicked " + event.target.id);
      return;
    }
    console.log("clicked " + event.target.parentNode.id + " " + event.target.className );
    event.target.className = currentColor;
  });
  // Click and drag


  // var mouseDown = false;
  // screen.addEventListener('mousedown', (event) => {
  //   console.log("mousedown");
  //   mouseDown = true;
  // });
  // screen.addEventListener('mouseup', (event) => {
  //   console.log("mouseup");
  //   mouseDown = false;
  // });
  //
  // if(mouseDown){
  //   console.log("entered func");
  //   screen.addEventListener('mouseenter', (event) => {
  //     if (event.target.id === 'screen' || event.target.parentNode.id === 'screen') {
  //       return;
  //     }
  //     console.log("moused over " + event.target.parentNode.id + " " + event.target.className );
  //     event.target.className = currentColor;
  //   });
  // };

  // screen.addEventListener('mouseenter', (event) => {
  //   if (event.target.id === 'screen' || event.target.parentNode.id === 'screen') {
  //     return;
  //   }
  //   console.log("moused over " + event.target.parentNode.id + " " + event.target.className );
  //   event.target.className = currentColor;
  // });
  // screen.addEventListener('mouseenter', (event) => {
  //   console.log("Entered " + " button");
  // });
  //
  //
  let currentColor;
  const palette1 = document.getElementById('palette1');

  // Add listeners to the palette
  palette1.addEventListener('click', (event) => {

    //clear screen
    if (event.target.id === 'clear') {
      const node = document.getElementById('screen');
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
      generateDivs(screenHeight, screenWidth);
      return;
    } else if (event.target === palette1) {
      console.log('clicked palette1');
      return;
    } else {
    //select color
    console.log("clicked " + event.target.className);
    currentColor = event.target.className;
    }
  });
  let on = true;
  const onOffButton = document.getElementById('onOffButton');

  onOffButton.addEventListener('click', (event) => {
    if (on) {
    event.target.className = 'onOffLeft';
    document.getElementById('batteryLight').className = 'batteryLightOff';
    document.getElementById('offScreen').className = 'offScreen';
    const node = document.getElementById('screen');
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
    generateDivs(screenHeight, screenWidth);
    on = false;
    } else {
      event.target.className = 'onOffRight';
      document.getElementById('batteryLight').className = 'batteryLightOn';
      document.getElementById('offScreen').className = '';
      on = true;
    }
  });
})();
