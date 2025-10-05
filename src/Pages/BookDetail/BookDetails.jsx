import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const getId = parseInt(id);
  const detailsBook = useLoaderData();
  const singleDetailsBook = detailsBook.find((book) => book.bookId === getId);
  console.log(singleDetailsBook);

  const { image, bookName } = singleDetailsBook;

  return (
    <div className="flex">
      <div>
        <h1>Img</h1>
      </div>

      <h1>{bookName}</h1>
    </div>
  );
};

export default BookDetails;

// author: "Paula Hawkins";
// bookId: 9;
// bookName: "The Girl on the Train";
// category: "Mystery";
// image: "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg";
// publisher: "Riverhead Books";
// rating: 4.2;
// review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.";
// tags: (2)[("Suspense", "Psychological")];
// totalPages: 316;
// yearOfPublishing: 2015;
