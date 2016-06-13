// (function(window, google){

//   var Mapster = (function() {
//     function Mapster(element, opts){
//       this.gMap = new google.maps.Map(element, opts);
//     }
//     Mapster.prototype = {

//     };
//     return Mapster;
//   })();

//   Mapster.create = function(element, opts) {
//     return new Mapster(element, opts);
//   };

//   window.Mapster = Mapster;

// })(window, google);

(function(window, google){
  var Mapster = (function(){
    function Mapster(elements, options){
      this.gMap = new google.maps.Map(elements, options);
    }
    Mapster.prototype{

    };
    return Mapster;
  }());

  Mapster.create = function(elements, options){
    return new Mapster(elements, options);
  };

  window.Mapster = Mapster;
}(window, google))