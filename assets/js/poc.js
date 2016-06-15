(function(window, google, mapster){
  //firebase connection 
  var firebase = new Firebase("https://arnoldleitestrcb.firebaseio.com/");

  //map options
  var options = mapster.MAP_DEFAULT_OPTIONS;
  //Setting the map to the div 
  var element = document.getElementById('map');
  //creating the map object
  var map = mapster.create(element, options);

  var marker = map.addMarker({
    lat: 40,
    lng: -74,
    draggable: true,
    // icon: 'https://lh6.googleusercontent.com/jKl8Ad4rBl499hBXFNh2k8lODStxrA9aLXuGMkSMNlRYuNG6ejUJ7rZ6l5rIMd5gIXiaAg=w1416-h658',
    content: 'Farmers Market',  
  });
  



    // map._on('click', function(){console.log('click')});
    // // creates markers on click
    // map.addListener('click', function(e) {
    //   var image = 'https://lh6.googleusercontent.com/jKl8Ad4rBl499hBXFNh2k8lODStxrA9aLXuGMkSMNlRYuNG6ejUJ7rZ6l5rIMd5gIXiaAg=w1416-h658';
    //   var marker = new google.maps.Marker({
    //     position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    //     map: map,
    //     icon:'https://lh6.googleusercontent.com/jKl8Ad4rBl499hBXFNh2k8lODStxrA9aLXuGMkSMNlRYuNG6ejUJ7rZ6l5rIMd5gIXiaAg=w1416-h658',
    //   });
    //   marker.setMap(map);
    //   firebase.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
    // });

    //firebase code for when the user adds something to firebase
    // firebase.on("child_added", function(snapshot, prevChildKey) {
    // // Get latitude and longitude from the cloud.
    //   var newPosition = snapshot.val();

    //   // Create a google.maps.LatLng object for the position of the marker.
    //   // A LatLng object literal (as above) could be used, but the heatmap
    //   // in the next step requires a google.maps.LatLng object.
    //   var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);
    //   // Place a marker at that location.
    //   var marker = new google.maps.Marker({
    //     position: latLng,
    //     map: map
    //   });
    // });

}(window, google, window.Mapster));
