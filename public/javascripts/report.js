(function() {
  "use strict";

  function costInput() {
    $.ajax({
      url: 'report/cost',
      data: {
        cost: document.getElementById('cost-input').value
      },
    }).done((data, status, xhr) => {
      console.log('success');
    }).fail((data, status, error) => {
      console.log('fail');
    }); 
  }

  function load() {
    let cost = document.getElementById('cost-input');
    cost.addEventListener('blur', costInput, false);
  }
  document.addEventListener('DOMContentLoaded', load, false); 
}());
