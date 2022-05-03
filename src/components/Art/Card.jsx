export default function ArtCard({ art }) {
  return (
    <div>
      <img
        src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
        alt={'Artworks'}
      />
      <p>{art.title}</p>
      <p>{art.artist_title}</p>
    </div>
  );
}
