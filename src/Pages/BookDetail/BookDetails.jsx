import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const getId = parseInt(id);
  const detailsBook = useLoaderData();
  const singleDetailsBook = detailsBook.find((book) => book.bookId === getId);
  console.log(singleDetailsBook);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = singleDetailsBook;

  return (
    <div className="flex my-5 gap-9">
      <div>
        <figure>
          <img
            className="h-[650px] shadow-2xl rounded-2xl"
            src={image}
            alt={bookName}
          />
        </figure>
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-5xl">{bookName}</h1>
        <h2 className="font-semibold text-xl my-3">{author}</h2>
        <div className="border-t-1 border-dotted text-gray-300 my-2"></div>
        <h2 className="font-semibold text-xl">{category}</h2>
        <div className="border-t-1 border-dotted text-gray-300 my-2"></div>
        <p className="text-justify">
          <span className="font-semibold">Review: </span>
          {review}
        </p>
        <div className="">
          <p className="my-9 flex gap-10 items-center">
            <span className="font-semibold">Tag</span>
            <p className="flex gap-6">
              {tags.map((tag) => (
                <div className="text-green-600 "># {tag}</div>
              ))}
            </p>
          </p>
        </div>
        <div className="border-t-1 border-dotted text-gray-300 my-2"></div>
        <div className="space-y-4">
          <div className="flex gap-24">
            <p className="flex-1">Number of Pages:</p>
            <p className="flex-3 font-semibold">
              <span>{totalPages}</span>
            </p>
          </div>
          <div className="flex gap-24">
            <p className="flex-1">Publisher:</p>
            <p className="flex-3 font-semibold">
              <span>{publisher}</span>
            </p>
          </div>
          <div className="flex gap-24">
            <p className="flex-1">Year:</p>
            <p className="flex-3 font-semibold">
              <span>{yearOfPublishing}</span>
            </p>
          </div>
          <div className="flex gap-24">
            <p className="flex-1">Rating:</p>
            <p className="flex-3 font-semibold">
              <span>{rating}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button className="btn">Read</button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
      </div>
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
