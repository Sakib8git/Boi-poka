import { Link, NavLink } from "react-router";

const Book = ({ SinBook }) => {
  const {
    image,
    bookName,
    totalPages,
    yearOfPublishing,
    author,
    category,
    bookId,
    rating,
    tags,
  } = SinBook;

  return (
    <NavLink to={`/bookdetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 h-[450px] shadow-sm border p-5">
          <figure className="p-4 bg-gray-100 w-2/3 mx-auto rounded-lg">
            <img className="h-[166px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className=" ">
              <h2 className="card-title text-2xl  ">
                {bookName}
                <div className="badge badge-secondary ">{yearOfPublishing}</div>
              </h2>
            </div>

            <h2>{author}</h2>
            <div className="border-t-1 border-dotted text-gray-300 my-2"></div>
            <div className="flex justify-between items-center">
              <p className="flex-5">
                {" "}
                Pages: <span className="font-semibold">{totalPages}</span>
              </p>
              <p className="flex-1">{rating} ⭐</p>
            </div>
            <div className="card-actions  ">
              {tags.map((tag) => (
                <div className="badge badge-outline">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;

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
