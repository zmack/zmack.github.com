function goats(flickr_object) {
  var photos = $('#photos');
  $.each(flickr_object.photos.photo, function(index, photo) {
    if ( index % 50 == 0 ) {
      photos.append('<img src="http://andascarygoat.com/images/scarygoat-index_03.jpg" width="75" height="75" title="Artistry" />');
    }
    var url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg";
    photos.append('<img src="' + url + '" title="' + photo.title + '" />');
  });
}
