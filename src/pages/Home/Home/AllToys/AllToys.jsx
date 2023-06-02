import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import "./category.css";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const categories = [
    "All",
    "Science Experiment Kits",
    "Measurement and Observation Kits",
    "DIY Science Project"
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredToys = selectedCategory === "All" ? toys : toys.filter((toy) => toy.category === selectedCategory);

  return (
    <div className="m-5">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-orange-700">All of Our Toys</h3>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Quality Products for Endless Fun</h4>
          <p className="text-gray-700 m-5">
            At our tech toy shop, we are committed to offering high-quality products that ensure endless fun and entertainment. We carefully select each toy based on its innovation, durability, and educational value. Our goal is to provide you and your family with toys that spark imagination and creativity while offering a safe and enjoyable playtime experience.
          </p>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={selectedCategory === category ? "category active" : "category"}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredToys.map((toy) => (
            <ToyCard key={toy.id} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
