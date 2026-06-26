import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Book } from '../../types/libro';

interface BookCardProps {
  book: Book;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ fontSize: '0.8rem', color: '#c47a3a', marginBottom: '0.5rem' }}>
    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
  </div>
);

const BookCard = ({ book }: BookCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 40 + 5));

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const placeholderUrl = 'https://placehold.co/300x400/1a1614/f5f0e8?text=' + encodeURIComponent(book.title.slice(0, 10));

  return (
    <Card className="book-card">
      {book.featured && (
        <span className="featured-badge">Destacado</span>
      )}
      <Card.Img
        variant="top"
        src={book.cover}
        alt={book.title}
        className="card-img-top"
        onError={(e) => {
          (e.target as HTMLImageElement).src = placeholderUrl;
        }}
      />
      <Card.Body className="d-flex flex-column">
        <span className="genre-badge">{book.genre}</span>
        <StarRating rating={book.rating} />
        <Card.Title className="card-title">{book.title}</Card.Title>
        <p className="author">{book.author}</p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="price"></span>
            <button
              className={'like-btn' + (liked ? ' liked' : '')}
              onClick={handleLike}
              aria-label={liked ? 'Quitar me gusta' : 'Me gusta'}
            >
              {liked ? '❤️' : '🤍'} {likes}
            </button>
          </div>
          <Link to={'/libros/' + book.id} style={{ textDecoration: 'none' }}>
            <Button
              style={{
                width: '100%',
                background: '#1a1614',
                border: 'none',
                borderRadius: 0,
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.6rem',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#8b4513')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1a1614')}
            >
              Ver mas
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
