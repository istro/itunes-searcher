$(function(){

  var parseResponse = function(response) {
    results = response["results"]
    for(i=0; results.length; i++) {
      var name = "<li>"+results[i]["trackName"]+"</li>";
      console.log(name);
      $("#search_results").prepend(name)
    }
    console.log(results.length)
    console.log('all your base are belong to us')
  };

  $('.search').click(function(event){
    var url = "http://itunes.apple.com/search"
    $.ajax(url, {
      dataType: "jsonp",
      crossDomain: true,
      data: {
        media: "music", 
        term: $(".search_term").val(),
        limit: 25
      },
      jsonpCallback: "parseResponse",
      success: parseResponse
    })
    event.preventDefault();
  });

  $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  })

  $('#myTab a:first').tab('show');
  
});