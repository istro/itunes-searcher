$(function(){

  var parseResponse = function(response) {
    list_of_results = "";
    results = response["results"];
    showResults()
  };

  var showResults = function() {
    for(i=0; i < results.length; i++) {
      var song = '<tr><td><div class="ui360" style="width: 30px"><a href="'+results[i]["previewUrl"]+'"></a></div></td><td>'+results[i]["trackName"]+'</td><td><span class="artwork"><img src="'+results[i]["artworkUrl60"]+'"></span>'+results[i]["collectionName"]+'</td><td>'+results[i]["artistName"]+'</td><td><div class="addfave" id="'+results[i]["trackId"]+'"><img src="images/star.svg"></div></td></tr></div>';
      console.log(song);
      list_of_results += song
    };
    $("#search_results").html(list_of_results);
    console.log('results served');
    threeSixtyPlayer = new ThreeSixtyPlayer();
    soundManager.onready(threeSixtyPlayer.init);
    console.log('all your base are belong to us')
  }

  $("#search_results").delegate(".addfave", "click", function(event){
    console.log(this.id);
    // add to user's faves by id
    for(i=0; i<results.length; i++) {
      if (results[i]["trackId"] == this.id) {
        console.log("got it!")
        var song = '<tr><td><div class="ui360" style="width: 30px"><a href="'+results[i]["previewUrl"]+'"></a></div></td><td>'+results[i]["trackName"]+'</td><td><span class="artwork"><img src="'+results[i]["artworkUrl60"]+'"></span>'+results[i]["collectionName"]+'</td><td>'+results[i]["artistName"]+'</td><td><div class="addfave" id="'+results[i]["trackId"]+'"><img src="images/star.svg"></div></td></tr></div>';
        $("#faves").append(song)
      }
    }
  });

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