import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ArtCard from '../../components/Art/Card';
import styles from '../../App.css';

export default function ArtList() {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function getArt() {
      const res = await fetch(
        'https://api.artic.edu/api/v1/artworks/search?fields=id,title,place_of_origin,dimensions,image_id,artist_title,material_titles&limit=40&page=1&q=cats'
      );
      const results = await res.json();
      setArtWorks(results.data);
      setLoading(false);
    }
    getArt();
  }, []);

  return (
    <>
      <h2>Art List</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.list}>
          {artWorks.map((art) => {
            return <ArtCard key={art.id} art={art} />;
          })}
        </div>
      )}
    </>
  );
}
