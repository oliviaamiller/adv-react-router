import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtDetails() {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getArtDetail() {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      const result = await res.json();

      console.log(result);
      setArt(result);
      setLoading(false);
    }
    getArtDetail();
  }, []);

  return (
      <>
      {loading? (
          <p>loading...</p>
      ) : (
          <div>
              <p>{art.title}</p>
          </div>
      )
      }
      </>
  );
}
