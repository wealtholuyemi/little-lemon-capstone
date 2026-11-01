export default function DishCard({ image, name, price, description, tag }) {
  return (
    <article className="dish-card">
      <img src={image} alt={name} loading="lazy" />
      <div className="dish-content">
        <div className="dish-heading"><h3>{name}</h3><span>{price}</span></div>
        <p>{description}</p>
        <span className="dish-tag">{tag}</span>
      </div>
    </article>
  );
}