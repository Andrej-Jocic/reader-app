import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Shelf from '../entities/Shelf';

const ShelfItem = ({ shelf }: { shelf: Shelf }) => {
  return (
    <li>
      <h1>{shelf.shelfName}</h1>
      {shelf.books.map((book) => (
        <p key={book.id}>
          <HiArrowNarrowRight color="#00c46a" />
          <Link to={`/book/${book.id}`}>
            {book.title}, {book.publishYear}
          </Link>
        </p>
      ))}
    </li>
  );
};

export default ShelfItem;
