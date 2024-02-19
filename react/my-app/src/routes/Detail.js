import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230101'
      )
    ).json();

    const selectMovie = json.boxOfficeResult.dailyBoxOfficeList.filter(
      (item) => item.rnum === `${id}`
    );

    setMovie(selectMovie[0]);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie id={movie.rnum} rank={movie.rank} movieNm={movie.movieNm} openDt={movie.openDt} />
        </div>
      )}
    </div>
  );
};

export default Detail;
