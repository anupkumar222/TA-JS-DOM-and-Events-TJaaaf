document.addEventListener('mousemove', function() {
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.backgroundColor = color;
  });
  
  let insert = document.getElementById('insert')
  
  window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.code</small>
  </div>
  `
  })