
function Searcher(config){
  this.config = config
}

Searcher.prototype.search = function(term, cb) {
  $.post(this.config.serviceUrl(), {term:term}, cb); 
};


function Configuration(){
  this.serviceUrl = function(){
    return '/search'
  }
}
