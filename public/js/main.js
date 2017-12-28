$(document).ready(function () {
  $('.delete-article').on('click', function (e) {
    $target = $(e.target)
    const id = $target.attr('data-id')
    $.ajax({
      type: 'DELETE',
      url: '/articles/' + id,
      success: function (response) {
        alert('Deleting Article')
        window.location.href = '/'
      },
      error: function (err) {
        console.log(err)
      }
    })
  })
  // for popper js
  $(function () {
    $('[data-toggle="popover"]').popover({html:true});
  })
  $('.calcdelete').on('click', function (e) {
    $target = $(e.target)
    const id = $target.attr('data-id')
    var answer = confirm("Are you sure you want to delete this entry?");
    if(answer) {
    $.ajax({
      type: 'DELETE',
      url: '/calcs/' + id,
      success: function (response) {
        window.location.href = '/'
      },
      error: function (err) {
        console.log(err)
      }
    })
  } else {
    alert("Delete Cancelled!");
  }
  })
  /*
  $( "#downloadFile" ).click(function() {
    alert( "Handler for .click() called." );
  });
*/
// sorter ajax testing grounds

$('#sortlowfirst').on('click', function (/*e*/) {
  $target = $(e.target)
  const id = $target.attr('data-id')
  $.ajax({
    type: 'POST',
    url: '/sorts/lowfirst',
    success: function (response) {
      alert('Sort Preference Updated')
      window.location.href = '/'
    },
    error: function (err) {
      console.log(err)
    }
  })
})

// end testing grounds













})
