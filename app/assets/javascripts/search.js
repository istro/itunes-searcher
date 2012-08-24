$(function() {

  $('.search').click(function(event){
    $.ajax({
      url: "http://itunes.apple.com/search",
      dataType: "jsonp",
      crossDomain: true,
      data: {
        term: $(".search_term").val(),
        limit: 25
      },
      success: console.log("success!"),
      error: function(){
        console.log("oops")
      }
    })
    event.preventDefault();
  });

});