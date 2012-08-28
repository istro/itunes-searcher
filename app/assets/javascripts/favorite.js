// $(function(){

//   var parseResponse = function(response) {
//     list_of_results = "";
//     results = response["results"];
//     for(i=0; i < results.length; i++) {
//       // soundManager.createSound(results[i]["trackId"], results[i]["previewUrl"]);
//       var song = '<div class="row"><li><div class="ui360"><a href="'+results[i]["previewUrl"]+'"></a></div><div class="name">'+results[i]["trackName"]+'</div></li></div>';
//       console.log(song);
//       list_of_results += song
//     };
//     $("#search_results").html(list_of_results);
//     console.log('results served');
//     threeSixtyPlayer = new ThreeSixtyPlayer();
//     soundManager.onready(threeSixtyPlayer.init);
//     console.log('all your base are belong to us')
//   };

//   $('.search').click(function(event){
//     var url = "http://itunes.apple.com/search"
//     $.ajax(url, {
//       dataType: "jsonp",
//       crossDomain: true,
//       data: {
//         media: "music", 
//         term: $(".search_term").val(),
//         limit: 25
//       },
//       jsonpCallback: "parseResponse",
//       success: parseResponse
//     })
//     event.preventDefault();
//   });

//   $('#myTab a').click(function (e) {
//     e.preventDefault();
//     $(this).tab('show');
//   })

//   $('#myTab a:first').tab('show');

// });