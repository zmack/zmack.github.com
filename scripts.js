function goats(flickr_object) {
  console.log(flickr_object);
  var photos = $('#photos');
  $.each(flickr_object.photos.photo, function(index, photo) {
    var url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg";
    photos.append('<img src="' + url + '" title="' + photo.title + '" />');
  });
}
