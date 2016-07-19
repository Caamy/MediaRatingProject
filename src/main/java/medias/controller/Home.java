package medias.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import medias.entity.Books;
import medias.repository.BooksDAO;

@Controller
public class Home {

	@Autowired
	BooksDAO bookRepo;
	
	@RequestMapping("/")
	public String getIndex(){
		return "home";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/addNewBook", method= RequestMethod.POST)
	public String save(@RequestBody Books book){
		System.out.println(book);
		//bookRepo.save(book);
		return null;
	}
	
}
