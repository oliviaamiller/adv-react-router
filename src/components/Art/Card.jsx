import styles from '../../App.css';
import { Link } from 'react-router-dom';

export default function ArtCard({ art }) {
  return (
    <>
      <div className={styles.card}>
        <Link to={`/art/${art.id}`}>
          <img
            className={styles.img}
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt={'Artworks'}
          />
          <p className={styles.title}>{art.title}</p>
          <p className={styles.artist}>{art.artist_title}</p>
        </Link>
      </div>
    </>
  );
}
