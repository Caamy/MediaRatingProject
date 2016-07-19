package medias.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import medias.entity.Books;
import medias.repository.BooksDAO;

@Controller
public class BooksController {
		
	@Autowired
	BooksDAO bookRepo;
	
	@RequestMapping("/books")
	public String getAllBooksPage(){	
		return "books";
	}
	
	@RequestMapping("books/listBooks")
	@ResponseBody
	public List<Books> getAllBooks(){	
		return (List<Books>) bookRepo.findAll();
	}
	
	
	@ResponseBody
	@RequestMapping(value = "books/addNewBook", method= RequestMethod.POST)
	public String save(@RequestBody Books book){
		System.out.println(book);
		//bookRepo.save(book);
		return null;
	}
	
}
