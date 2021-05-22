var $;

window.addEventListener('load', function () {
  $ = document.querySelectorAll.bind(document);

  $('#btn-open-menu')[0].addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.remove('translate-x-full')
  });
  
  $('#btn-close-menu')[0].addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.add('translate-x-full')
  });

  if (location.pathname != '/') return;

  if (screen.width > 640) {
    $('.website-list img').forEach(img => img.src = img.dataset['desktop']);
  } else {
    $('.website-list img').forEach(img => img.src = img.dataset['mobile']);
  }

  $('.website-list > div').forEach(div => div.addEventListener('click', function (event) {
    source = event.target;
    
    while (['svg', 'use'].includes(source.tagName.toLowerCase()))
      source = source.parentNode;
    
    if (source.tagName.toLowerCase() != 'button') return;

    imgElement = this.querySelector('img');
    imgElement.src = imgElement.dataset[source.dataset['resolution']];

    [...source.parentNode.children].forEach(btn => {
      if (btn !== source) {
        btn.classList.remove('bg-purple-800', 'text-gray-200');
        return;
      }

      source.classList.add('bg-purple-800', 'text-gray-200');
    })
   
  }))

})