package medias.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import medias.entity.Books;

@Transactional
public interface BooksDAO extends CrudRepository<Books, String>{

}
