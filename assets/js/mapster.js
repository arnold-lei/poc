
(function(window, google){
  var Mapster = (function(){
    function Mapster(elements, options){
      this.gMap = new google.maps.Map(elements, options);
    }
    Mapster.prototype = {
      zoom: function(level){
        if(level){
          this.gMap.setZoom(level);
        }else {
          return this.gMap.getZoom();
        }
      },
      addListener: function(event, callback){
        this.gMap.addListener(event, callback);      
      }
    };
    return Mapster;
  }());

  Mapster.create = function(elements, options){
    return new Mapster(elements, options);
  };

  window.Mapster = Mapster;

}(window, google));