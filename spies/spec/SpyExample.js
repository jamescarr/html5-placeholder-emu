describe("Searcher", function(){
  var callback = function(){};
  beforeEach(function(){
    spiedJquery = spyOn(jQuery, 'post');
    config = new Configuration();
    searcher = new Searcher(config);
  })
  it("should make a post request for the search term", function(){
    searcher.search('beer', callback);
    
    expect(spiedJquery, 'post').toHaveBeenCalledWith('/search', {term:'beer'}, callback);
  })
  it("should retrieve results from search service", function(){
    var theResults = [];
    
    searcher.search('beer', function(results){
      theResults = results;
    });

    jQuery.post.mostRecentCall.args[2]([1,2,3]);  

    expect(theResults).toEqual([1,2,3])
  })

  it("should get search url via configuration", function(){
    spyOn(config, 'serviceUrl').andReturn('/ubersearch')
    
    searcher.search('beer', callback);
    
    expect(spiedJquery, 'post').toHaveBeenCalledWith('/ubersearch', {term:'beer'}, callback);
    
    
  })
  
  
  
})

