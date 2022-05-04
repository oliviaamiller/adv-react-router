import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../App.css';

export default function ArtDetails() {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getArtDetail() {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      const result = await res.json();
     

      setArt(result.data);
      setLoading(false);
    }
    getArtDetail();
    console.log(art.material_titles);
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.detail}>
          <img
            className={styles.imgBig}
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt={'Artworks'}
          />
          <p className={styles.title}>{art.title}</p>
          <p className={styles.artist}>{art.artist_title}</p>
          <p>{art.date_display}, {art.place_of_origin}</p>
          <p>{art.artwork_type_title}</p>
        </div>
      )}
    </>
  );
}
