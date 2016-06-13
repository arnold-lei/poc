
(function(window, google){
  var Mapster = (function(){
    function Mapster(elements, options){
      this.gMap = new google.maps.Map(elements, options);
    }
    Mapster.prototype = {

    };
    return Mapster;
  }());

  Mapster.create = function(elements, options){
    return new Mapster(elements, options);
  };

  window.Mapster = Mapster;
  console.log('someshit mapster');

}(window, google));