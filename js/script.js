
function loadData() {

   /* var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $wikiHead = $('#wikipedia-header');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var $street = $('#street').val();
    var $city = $('#city').val();
    var combinedURL = '&location=' +$street +', '+$city;
    var size = 'size=600x300';
    var completeURL = 'http://maps.googleapis.com/maps/api/streetview?' + size + combinedURL;
$body.append(' <img class="bgimg" alt="google images" src = "' + completeURL + '" >' );
    
     // NYT Jquery
   
    var NYTurl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    NYTurl = NYTurl + '?api-key:"80a5fecd060b47749e7af9d117207794"';
    
    $.getJSON(NYTurl, function(data){
       var contents = data.response.docs;
        for(var i=0; i < contents.length; i++){
           
            var data = '<li><a href ="' + contents[i].web_url + '"> <p> '+contents[i].snippet+'</p> </li>';
            $nytElem.append(data);
            
        }
        
        
        
       
    }).error(function(e){
       $nytHeaderElem.text("Not able to Load the data");
        
    });
    

    // YOUR CODE GOES HERE!
    
    // NYT Jquery
    var clearTimeoutVariable = setTimeout(function(){
        $wikiElem.text("Not able to Load");
         $wikiHead.text("Not able to Load");
    }, 4000);
    var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $city + '&format=json&callback=wikiCallback';
   $.ajax({
       url: wikiURL,
       dataType:"jsonp",
       success : function(data){
           console.log(data);
           var content = data[3];
           var link = data[1];
           for(var i=0; i < content.length; i++){
           
            var data = '<li><a href ="' + content[i] + '"> <p> '+link[i]+'</p> </li>';
            $wikiElem.append(data);
            
        }
           clearTimeout(clearTimeoutVariable);
           
       }
       
       
       
   });*/
    
    var $overlay = $('#child');
    $overlay.show();
    

   return false;
};

$('#form-container').submit(loadData);
$('#searchtrack').submit(loadSearchTracks);

function loadSearchTracks() {
    
    var $name = $('#name').val();
    var $track = $('#track').val();
      var $overlay = $('#child');
     var $navHead = $('#nav-headers');
   
    
    var url = 'http://itunes.apple.com/search?term='+$name+'&limit=' +$track;
    console.log(url);
     var clearTimeoutVariable = setTimeout(function(){
        console.log("Error in loading");
    }, 4000);
    $.ajax({
       url: url,
       dataType:"jsonp",
       success : function(data){
            $overlay.hide();
           
           content = data.results;
           
            /*<li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>*/
              
               console.log(content)
           for(var i=0; i< content.length; i++){
               var temp = '<li role="presentation" class="active"><a href="#">'+content[i].artistName+'</a></li>'
               $navHead.append(temp);
               
           }
           clearTimeout(clearTimeoutVariable);   
            
        }
        
       
   });
    
    
     $('#nav-headers').on("click", "li", function (event) {
         
            var $nameA = $('#nameA');
            var $trackA = $('#trackA');
            var $dp = $('#displayDetails');
         
            var activeTab = $(this).text();
            console.log(activeTab);   
        var getDetails = 'http://itunes.apple.com/search?term='+activeTab+'&limit=1';
         $.ajax({
       url: getDetails,
       dataType:"jsonp",
       success : function(data){
            $overlay.hide();
           
            $dp.show();
           console.log(data)
           var con = data.results[0];
           var artist = con.artistName;
           var tra = con.trackCensoredName;
           
            $nameA.text(artist);
            $trackA.text(tra);
          
           
            /*<li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>*/
              
          
            
        }
        
       
   });
         
        });
    
   
    
    
    
    return false;
};























