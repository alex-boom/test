import HP from './helpers';

(function ($) {

  // When DOM is ready
  $(function () {
    example(HP.random(10, 20));
  });

  /**
   * Just an example function
   *   DELETE IT
   * @param  {Number} n - random number between 10 and 20
   */
  function example(n) {
    console.log(`Hello in ES6... I am ${n} - random number between 10 and 20`);
  }

  window.onload = function(){
    document.getElementById('add').onclick = startDiscus;
      }

     function startDiscus(){
      
      var text = document.getElementById('txt').value;
      var comm = document.createElement('p');
      var newText = document.createTextNode(text);
      
      comm.appendChild(newText);
      
      document.getElementById('discus').appendChild(comm);
      return true;
  }

}(jQuery));