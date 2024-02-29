export default function ImageCard({ description, url: { regular, small }  }) {
  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
}
