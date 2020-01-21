/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    document.querySelector('p').color='blue';
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>

      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const ntb =document.querySelector('#nav-tabs');
  const ctp =document.querySelector('#nav-tabs .tp-car');
  const rtp =document.querySelector('#nav-tabs .tp-rental');
  const res =document.querySelector('#nav-tabs .tp-result');
  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {

    const car = VIRTUO.getCar();
    const begin = document.querySelector('#rental .js-begin').value;
    const end = document.querySelector('#rental .js-end').value;
    const distance = document.querySelector('#rental .js-distance').value;
    const option = document.querySelector('#rental .js-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);
    //res.enable();
    //('.nav-tabs a[href="#' + tab + '"]').tab('show');
    render(actors);
    return;
  });
})();
