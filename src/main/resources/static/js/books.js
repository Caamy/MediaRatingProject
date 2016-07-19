$(document).ready(function() {
	
	// Affichage du formulaire en fonction du switch
	$("#bookSwitch").on("click", function(){
		if($(this).prop('checked') == false){
			var addingChoice = '<div class="row">' 
            + '<div class="input-field col s10">' 
            + '<i class="material-icons prefix">search</i>' 
            + '<input id="isbn" type="text" class="validate"/>'
            + '<label for="isbn">Isbn</label></div>'
            + '<a id="okIsbn" class="waves-effect waves-light btn">OK</a></div>'
            $("#addingBookChoice").html(addingChoice);
            
		} else {
			var addingChoice = '<div class="row">' 
	            + '<div class="input-field col s2">' 
	            + '<input id="isbn" type="text" class="validate"/>'
	            + '<label for="isbn">Isbn</label></div>'
	            + '<div class="input-field col s4">' 
	            + '<input id="title" type="text" class="validate"/>'
	            + '<label for="title">Title</label></div>'
	            + '<div class="input-field col s4">' 
	            + '<input id="authors" type="text" class="validate"/>'
	            + '<label for="authors">Authors</label></div>'
	            + '<div class="input-field col s2">' 
	            + '<input id="publishedDate" type="text" class="validate"/>'
	            + '<label for="publishedDate">Published date</label></div></div>'
	            + '<a id="okCustom" class="waves-effect waves-light btn">OK</a>'
			$("#addingBookChoice").html(addingChoice);
		}

	});
	
	
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