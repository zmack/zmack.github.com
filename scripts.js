function goats(flickr_object) {
  var urls = {
    web: "http://andascarygoat.com",
    twitter: "http://twitter.com/monsieur_pickle",
    flickr: "http://flickr.com/monsieur_pickle",
    github: "http://github.com/zmack",
    lastfm: "http://last.fm/user/zmack",
    delicious: "http://delicious.com/zmack"
  }

  function goatImg() {
    for ( service in urls ) {
      var div = $('<div class="goat"><a class="' + service +'" href="' + urls[service] + '">&nbsp;</a></div>');
      delete urls[service];
      return div;
    }
  }
  var photos = $('#photos');
  var photo;
  $.each(flickr_object.photos.photo, function(index, photo) {
    if ( index % 50 == 0 ) {
      photo = goatImg();
      photos.append(photo);
    }
    var url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg";
    photo = $('<img width="75" height="75" src="' + url + '" title="' + photo.title + '" />');

    photo.hide();
    photos.append(photo);
  });

  $('img').load( function() {
    $(this).fadeIn('slow');
  });
}
