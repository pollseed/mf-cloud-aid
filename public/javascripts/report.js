(function() {
  "use strict";

  function costInput() {
    $.ajax({
      url: 'report/cost',
      data: {
        cost: document.getElementById('cost-input').value
      },
    }).done((data, status, xhr) => {
      console.log(status);
      let result = document.getElementById('cost-result');
      result.innerHTML = `sum: ${data.sum}`;
    }).fail((data, status, error) => {
      console.log(status);
    }); 
  }

  function load() {
    let cost = document.getElementById('cost-input');
    cost.addEventListener('blur', costInput, false);
  }
  document.addEventListener('DOMContentLoaded', load, false); 
}());
