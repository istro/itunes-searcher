$(function(){

  var parseResponse = function(response) {
    list_of_results = "";
    results = response["results"];
    for(i=0; i < results.length; i++) {
      var name = "<li><div>"+results[i]["trackName"]+"</div></li>";
      console.log(name);
      list_of_results += name
    };
    $("#search_results").html(list_of_results);
    loadSoundManager();
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

var loadSoundManager = function() {
  soundManager = new SoundManager();

  window.SoundManager = SoundManager; // constructor
  window.soundManager = soundManager; // public API, flash callbacks etc.

  soundManager.setup({
    url: '/swf/',
    flashVersion: 9,
    useFlashBlock: false, 
    onready: function() {}
  });
}

});