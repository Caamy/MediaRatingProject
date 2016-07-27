package medias.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Books {

	@Id
	private String isbn;
	
	private String title;
	private String[] authors;
	private String publishedDate;

	@Lob
	@Column( length = 100000 )
	private String description;
	private float ratings;
	private String note;
	
	// Créér un constructeur par défaut pour le POST avec JQuery $.ajax
	public Books(){}
		
	public Books(String isbn, String title, String[] authors, String publishedDate) {
		this.isbn = isbn;
		this.title = title;
		this.authors = authors;
		this.publishedDate = publishedDate;
		
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
	
	public String getPublishedDate() {
		return publishedDate;
	}

	public void setPublishedDate(String publishedDate) {
		this.publishedDate = publishedDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
		return "Books [isbn=" + isbn + ", title=" + title + ", authors=" + Arrays.toString(authors) + ", publishedDate="
				+ publishedDate + ", description=" + description + ", ratings=" + ratings + ", note=" + note + "]";
	}

}
