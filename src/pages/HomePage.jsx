import { Link } from "react-router-dom";
import DishCard from "../components/DishCard";

const dishes = [
  { name: "Greek Salad", price: "$12.99", image: "https://images.unsplash.com/photo- salad?auto=format&fit=crop&w=900&q=85".replace("photo- salad", "photo-1540189549336-e6e99c3679fe"), description: "Crisp greens, tomatoes, cucumber, olives and creamy feta with our house dressing.", tag: "Vegetarian favourite" },
  { name: "Lemon Herb Chicken", price: "$18.50", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85", description: "Tender grilled chicken, bright lemon, herbs and seasonal vegetables.", tag: "Chef's pick" },
  { name: "Berry Lemon Tart", price: "$8.25", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85", description: "A buttery citrus tart finished with fresh berries and a little sweetness.", tag: "Made in-house" }
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">CHICAGO · MEDITERRANEAN KITCHEN</p>
            <h1>Little Lemon</h1>
            <h2>A little zest.<br />A lot of flavour.</h2>
            <p>We bring the warmth of the Mediterranean to your table with fresh ingredients, bold flavours and food made to be shared.</p>
            <Link className="button button-yellow" to="/booking">Reserve a table <span aria-hidden="true">→</span></Link>
          </div>
          <img className="hero-image" src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=90" alt="A colourful Mediterranean meal with fresh vegetables" />
        </div>
      </section>

      <section className="specials section-wrap" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow">MADE FRESH, SERVED WITH LOVE</p><h2>This week's specials</h2></div>
          <Link className="button button-dark" to="/booking">Book your table</Link>
        </div>
        <div className="dish-grid">
          {dishes.map((dish) => <DishCard key={dish.name} {...dish} />)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner">
          <div><p className="eyebrow">OUR STORY</p><h2>Good food brings<br />people together.</h2><p>Little Lemon is a neighbourhood restaurant inspired by the flavours, colours and traditions of the Mediterranean. Our kitchen celebrates seasonal produce, simple cooking and generous hospitality.</p><Link to="/booking" className="text-link">Come dine with us →</Link></div>
          <div className="about-photos"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=85" alt="Warm, welcoming restaurant dining room" /><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85" alt="Fresh food being prepared on a grill" /></div>
        </div>
      </section>
      <section className="reservation-strip"><p className="eyebrow">YOUR TABLE IS WAITING</p><h2>Make room for something delicious.</h2><Link className="button button-yellow" to="/booking">Make a reservation</Link></section>
    </main>
  );
}