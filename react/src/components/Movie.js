import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, rank, movieNm, openDt }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ fontSize: '14px', marginBottom: '3px' }}>
        <Link to={`/movie/${id}`}>
          [RANK{rank}] {movieNm}
        </Link>
      </div>
      <div style={{ fontSize: '12px', opacity: '0.3' }}>{openDt}</div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
};

export default Movie;
