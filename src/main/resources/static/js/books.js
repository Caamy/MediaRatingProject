$(document).ready(function() {
	
	// Collapse books
	$("#booksCollapse").addClass("collapsible-header active");
	$(".collapsible").collapsible({accordion: false});
	
	// Affichage du formulaire en fonction du switch
	displaySwitchOption();
	
	// Chercher dans l'API google
	$("#okIsbn").click(function(){
		getDataFromGoogleAPI($("#isbn").val());
	});

});

/**
 * Affiche en fonction du switch les informations pour la recherche de l'isbn
 * ou la création d'un livre à partir de 0
 */
function displaySwitchOption(){
	$("#bookSwitch").on("click", function(){
		if($(this).prop('checked') == false){
			var addingChoice = '<div class="row">' 
            + '<div class="input-field col s10">' 
            + '<i class="material-icons prefix">search</i>' 
            + '<input id="isbn" type="text" class="validate"/>'
            + '<label for="isbn">Isbn</label></div>'
            + '<a id="okIsbn" class="waves-effect waves-light btn">OK</a></div>';
            $("#addingBookChoice").html(addingChoice);
            
            $("#okIsbn").click(function(){
        		getDataFromGoogleAPI($("#isbn").val());
        	});
            
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
	            + '<div class="input-field col s12"><textarea id="description" class="materialize-textarea">'
	            + '</textarea><label for="description">Description</label></div>'
	            + '<a id="okCustom" class="waves-effect waves-light btn">OK</a>';
			$("#addingBookChoice").html(addingChoice);
		}
	});	
}

/**
 * Recherche dans l'API google les informations du livre renseigné par son isbn
 * @param isbn
 */
function getDataFromGoogleAPI(isbn){
	if(isbn != "") {
		var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
		var request = $.ajax({ 
		     type: "GET",
		     dataType: "json",
		     url: url,
		     success: function(data){      	 
		    	 if(data.totalItems != 0){ // Si le livre existe
					displayDataFromAPIintoModal(data);
		    	 } else {
		    		 var tag = '<div class="chip">'
		    			    + 'This book doesn\'t exist. Switch to "By hand" to it manually'
		    			    + '<i class="material-icons">close</i></div>';
		    				$("#isbn").after(tag);
		    	 }
		     }
		});
		//
	} else {
		var tag = '<div class="chip">'
	    + 'Isbn cannot be empty. Please type a number in.'
	    + '<i class="material-icons">close</i></div>';
		$("#isbn").after(tag);
	}
};

/**
 * Display the modal with the information regarding the book
 * @param data
 */
function displayDataFromAPIintoModal(data){
	var book = data.items[0].volumeInfo;

	$("#modalTitle").html(book.title);
	console.log(book.title);
	var content = "<img id='imgBook' src='" + book.imageLinks.thumbnail + "' />"
		+ "<p class='pModal'><b> Authors :</b> " + book.authors + "</p>"
		+ "<p class='pModal'><b> Isbn : </b>" + book.industryIdentifiers[0].identifier + "</p>"
		+ "<p class='pModal'><b> Page count :</b> " + book.pageCount + "</p>"
		+ "<p class='pModal'><b> Description : </b>" + book.description + "</p>";
	
	$("#modalContent").html(content);
	$('#modal1').openModal();   
	
	$("#savingBooks").click(function(){
    	var dataPost = {};
    	dataPost["isbn"] = book.industryIdentifiers[0].identifier;
    	dataPost["title"] = book.title;
    	dataPost["authors"] = book.authors;	
		dataPost["publishedDate"] = book.publishedDate;
		dataPost["description"] = book.description;
		saveBookToDB(dataPost);
	});
	
	$("#cancelSaving").click(function(){
		//location.reload();
	});
}

/**
 * Save the researched book or the created entry onto the DB
 * @param data
 */
function saveBookToDB(dataPost){
	console.log(dataPost);
	var requestSaving = $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        url: "/books/addNewBook",
        data: JSON.stringify(dataPost),
        success : function(dataPost) {
        	location.reload();
        	$('#modal1').closeModal(); 
		},
		error: function(jqXHR, textStatus, errorThrown) {
	    }
	});
	
	
}