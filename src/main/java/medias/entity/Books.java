package medias.entity;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Books {

	@Id
	private String isbn;
	
	private String title;
	private String[] authors;
	private String publishDate;
	private float ratings;
	private String note;
	
	// Créér un constructeur par défaut pour le POST avec JQuery $.ajax
	public Books(){}
		
	public Books(String isbn, String title, String[] authors, String publishDate) {
		this.isbn = isbn;
		this.title = title;
		this.authors = authors;
		this.publishDate = publishDate;
		
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String[] getAuthors() {
		return authors;
	}

	public void setAuthors(String[] authors) {
		this.authors = authors;
	}

	public String getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}
	
	
	public float getRatings() {
		return ratings;
	}

	public void setRatings(float ratings) {
		this.ratings = ratings;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	@Override
	public String toString() {
		return "Books [isbn=" + isbn + ", title=" + title + ", authors=" + Arrays.toString(authors) + ", publishDate="
				+ publishDate + "]";
	}
	
	
}
