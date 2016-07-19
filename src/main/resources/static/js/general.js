$(document).ready(function() {
	$('.button-collapse').sideNav();
	
	var data = {};
	data["isbn"] = "0123456789";
	data["title"] = "TestTitre";
	data["authors"] = ["TestAuteur"];	
	data["publishDate"] = "2015-05-02";

	$.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        url: "addNewBook",
        data: JSON.stringify(data),
        success : function(data) {
		},
		error: function(jqXHR, textStatus, errorThrown) {
	    }
		
});
	
	
//	console.log("test");
//    $.ajax({ 
//	     type: "GET",
//	     dataType: "json",
//	     url: "https://www.googleapis.com/books/v1/volumes?q=isbn:9781781101063",
//	         success: function(data){      
//	        
//	        	var book = data.items[0].volumeInfo;
//	        	var dataPost = {};
//	        	dataPost["isbn"] = book.industryIdentifiers[0].identifier;
//	        	dataPost["title"] = book.title;
//	        	dataPost["authors"] = book.authors[0];	
//				dataPost["publishedDate"] = book.publishedDate;
//				
//				
//				
//				
//				
//				
//	         }
//    
//    
//    
//	     });
	
});