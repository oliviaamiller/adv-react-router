import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function ArtList() {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function getArt() {
      const res = await fetch('https://api.artic.edu/api/v1/artworks/search?fields=id,title,place_of_origin,dimensions,image_id,artist_title,material_titles&limit=40&page=1&q=cats');
      const { data } = await res.json();
      setArtWorks(data);
      setLoading(false);
    }
    getArt();
  }, []);


  return (
    <div>ArtList</div>
  )
}
