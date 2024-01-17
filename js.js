function searchGoogle(){
    var quary = document.getElementById('search-input').value;
    window.Location.href = 'https://www.google.com/search?q=' + encodeURIComponent(quary);
    var selamta  ;

   if (quary.trim()=== ""){
    alert("Please Search query");

   }else {
    alert("Search results for: " + quary)
   }




}