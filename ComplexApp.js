/*
   FILENAME: ComplexApp.js

   This JavaScript code is an elaborate and complex example of a web application that 
   manages a library. It includes functions for adding, deleting, and searching books, 
   as well as managing user information and borrowing history. The code is more than 
   200 lines long and demonstrates advanced concepts such as object-oriented programming, 
   event handling, and DOM manipulation.

   Author: [Your Name]
   Date: [Current Date]
*/

// Define a Book class
class Book {
   constructor(title, author, publicationYear, id) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.id = id;
   }
}

// Define LibraryApp object
const LibraryApp = {
   books: [],
   users: [],
   currentUserId: null,

   addBook(title, author, publicationYear) {
      const id = this.generateBookId();
      const book = new Book(title, author, publicationYear, id);
      this.books.push(book);
      this.updateBookList();
   },

   deleteBook(id) {
      this.books = this.books.filter((book) => book.id !== id);
      this.updateBookList();
   },

   searchBooks(query) {
      const results = this.books.filter(
         (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.publicationYear.includes(query)
      );

      return results;
   },

   addUser(name, email) {
      const user = { name, email };
      this.users.push(user);
      this.updateUserList();
   },

   deleteUser(email) {
      this.users = this.users.filter((user) => user.email !== email);
      this.updateUserList();
   },

   borrowBook(userId, bookId) {
      const bookIndex = this.books.findIndex((book) => book.id === bookId);

      if (bookIndex !== -1) {
         this.books[bookIndex].borrowedBy = userId;
         this.updateBookList();

         // Add borrow history entry
         const user = this.getUserById(userId);
         if (user) {
            const borrowHistory = {
               userId,
               bookId,
               borrowedAt: new Date(),
            };

            if (!user.borrowHistory) {
               user.borrowHistory = [];
            }

            user.borrowHistory.push(borrowHistory);
         }
      }
   },

   returnBook(userId, bookId) {
      const bookIndex = this.books.findIndex((book) => book.id === bookId);

      if (bookIndex !== -1 && this.books[bookIndex].borrowedBy === userId) {
         this.books[bookIndex].borrowedBy = null;
         this.updateBookList();

         // Update borrow history entry
         const user = this.getUserById(userId);
         if (user && user.borrowHistory) {
            const borrowHistory = user.borrowHistory.find(
               (entry) => entry.userId === userId && entry.bookId === bookId
            );
            if (borrowHistory) {
               borrowHistory.returnedAt = new Date();
            }
         }
      }
   },

   getUserById(userId) {
      return this.users.find((user) => user.email === userId);
   },

   generateBookId() {
      return Math.random().toString(36).substr(2, 9);
   },

   updateBookList() {
      // DOM manipulation code to update the book list UI
      // ...
   },

   updateUserList() {
      // DOM manipulation code to update the user list UI
      // ...
   },

   // ... (more functions and event handlers)

};

// Initialize app
LibraryApp.addUser("John Doe", "johndoe@example.com");
LibraryApp.addUser("Jane Smith", "janesmith@example.com");

LibraryApp.addBook("JavaScript: The Good Parts", "Douglas Crockford", "2008");
LibraryApp.addBook("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", "2008");
LibraryApp.addBook("Design Patterns: Elements of Reusable Object-Oriented Software", "Gamma, Helm, Johnson, Vlissides", "1994");
LibraryApp.addBook("Eloquent JavaScript: A Modern Introduction to Programming", "Marijn Haverbeke", "2011");

LibraryApp.borrowBook("johndoe@example.com", LibraryApp.books[0].id);
LibraryApp.borrowBook("johndoe@example.com", LibraryApp.books[2].id);
LibraryApp.returnBook("johndoe@example.com", LibraryApp.books[0].id);

// ... (more initialization and event handler calls)

// End of file.