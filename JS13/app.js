for (let x = 1; x <= 50; x++) {
  let number = x;
  let color = '';

  if (x % 2 == 0 ) {
    color = 'green'; 
  } else {
    color = 'red'; 
  }

  document.write('<span style="color: ' + color + '">' + number + '</span> '  );
}

