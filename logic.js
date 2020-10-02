var searchterm = "superbowl";
var numberofresults = "";
var startDate = "2010";
var endDate = "2015";
var filter = "page=0&facet=true&begin_date="+startDate+"0101&end_date="+endDate+"0101";
var api = "AA3e1PjKzfmiQmnT8emVMNoiAx1DUAIL"; 
var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchterm+"&fq="+filter+"&api-key="+api;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});