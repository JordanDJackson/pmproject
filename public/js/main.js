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
        window.location.href = '/users/home'
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
$('#sortlowfirst').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/lowfirst',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})

// end testing grounds
$('#sorthighfirst').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/highfirst',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})


$('#sorta2z').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/atoz',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})
$('#sortz2a').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/ztoa',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})

$('#searchbyco').keyup(function(e) {
    var input = $("#searchbyco").val();
    if (e.which == 13) {
        $.ajax({
          type: 'GET',
          url: '/users/home/' + input,
          success: function (response) {
            window.location.href = '/users/home/' + input
          },
          error: function (err) {
            console.log(err)
          }
        })
        return false;
    }

});
// sep sprints and h4d buttons
$('#sortboth').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/both',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})
$('#sortsprints').on('click', function () {

  $.ajax({
    type: 'GET',
    url: '/sorts/sprints',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})
$('#sorth4d').on('click', function () {
  $.ajax({
    type: 'GET',
    url: '/sorts/h4d',
    success: function (response) {
      window.location.href = '/users/home'
    },
    error: function (err) {
      console.log(err)
    }
  })
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$('#searchbyco').on('focus', function () {
  $('input').tooltip('hide');
})







// END OF JQUERY
})
