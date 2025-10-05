import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ dataBooks }) => {
  //   console.log(dataBooks);

  return (
    <div>
      <h1 className="font-bold text-4xl mb-4 text-center">Books</h1>
      <Suspense fallback={<p>Loading.......</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4 p-4">
            {dataBooks.map((SinBook) => (
          <Book key={SinBook.bookId} SinBook={SinBook}></Book>
        ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
