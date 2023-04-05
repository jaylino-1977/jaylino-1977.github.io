const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

const closedFace2 = document.querySelector('.closed2');
const openFace2 = document.querySelector('.open2');

const closedFace3 = document.querySelector('.closed3');
const openFace3 = document.querySelector('.open3');

// one
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});

// two
closedFace2.addEventListener('click', () => {
  if (openFace2.classList.contains('open2')) {
    openFace2.classList.add('active2');
    closedFace2.classList.remove('active2');
  }
});

openFace2.addEventListener('click', () => {
  if (closedFace2.classList.contains('closed2')) {
    closedFace2.classList.add('active2');
    openFace2.classList.remove('active2');
  }
});

// three
closedFace3.addEventListener('click', () => {
  if (openFace3.classList.contains('open3')) {
    openFace3.classList.add('active3');
    closedFace3.classList.remove('active3');
  }
});

openFace3.addEventListener('click', () => {
  if (closedFace3.classList.contains('closed3')) {
    closedFace3.classList.add('active3');
    openFace3.classList.remove('active3');
  }
});
//**************************************************************************/
let data = [
    {
      name: 'Juan',
      age: '45',
      active: '21'
    },
    {
      name: 'Tanya',
      age: '45',
      active: '21'
    },
    {
      name: 'Hector',
      age: '55',
      active: '19'
    },
    {
      name: 'Paul',
      age: '53',
      active: '15'
    },
    {
      name: 'David',
      age: '60',
      active: '10'
    },
    {
      name: 'Ray',
      age: '52',
      active: '5'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' +  ' and has been active for ' + item.active + ' years' + '</div>';
  });
  
  info.innerHTML = details.join('\n');

  //*********************************************************************/

  const circle = document.querySelector('#circle');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});

circle2.addEventListener('mouseenter', () => {
    if (!circle2.classList.contains('hover')) {
      circle2.classList.add('hover');
    }
  });
  
  circle2.addEventListener('mouseleave', () => {
    if (circle2.classList.contains('hover')) {
      circle2.classList.remove('hover');
    }
  });

circle3.addEventListener('mouseenter', () => {
  if (!circle3.classList.contains('hover')) {
    circle3.classList.add('hover');
  }
});

circle3.addEventListener('mouseleave', () => {
  if (circle3.classList.contains('hover')) {
    circle3.classList.remove('hover');
  }
});