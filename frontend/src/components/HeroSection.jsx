const HeroSection = () => {
  const productCategories = [
    {
      id: 1,
      name: 'Converse Shoes',
    },
    {
      id: 2,
      name: 'Men Shoes',
    },
    {
      id: 3,
      name: 'Sneakers',
    },
    {
      id: 4,
      name: 'Corporate Shoes',
    },
    {
      id: 5,
      name: 'Dance Shoes',
    },
    {
      id: 6,
      name: 'Popular Shoes',
    },
  ];
  return (
    <div className="heroSection">
      <div className="hero-container">
        <h1>My Products</h1>
        <div className="products-categories">
          {productCategories.map((category) => (
            <p key={category.id} className="product-category">
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
