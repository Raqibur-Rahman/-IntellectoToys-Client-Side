import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./spinner.css";
import "./category.css";

const ToyDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [toys, setToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setIsLoading(false);
      });
  }, []);

  const selectedToy = toys.find(toy => toy._id == id);
  console.log(selectedToy);

  if (isLoading) {
    return (
      <div className="spinner "></div> // Render the spinner when loading
    );
  }

  if (!selectedToy) {
    return <div>No toy found</div>;
  }

  return (
    <div>
      <div className="items-center ml-24 mb-16">
        <h2 className="text-3xl font-bold text-orange-700 text-center">{selectedToy.name}</h2>
        {selectedToy.picture && <img src={selectedToy.picture} alt={selectedToy.name} />}
        {selectedToy.price && <p className="p-1"><span className="font-bold">Price:</span> {selectedToy.price}</p>}
        {selectedToy.quantity && <p className="p-1"><span className="font-bold">Available Quantity:</span> {selectedToy.quantity}</p>}
        {selectedToy.rating && <p className="p-1"><span className="font-bold">Rating:</span> {selectedToy.rating}</p>}
        {selectedToy.brand && <p className="p-1"><span className="font-bold">Brand:</span> {selectedToy.brand}</p>}
        {selectedToy.description && <p className="p-1"><span className="font-bold">Description:</span> {selectedToy.description}</p>}
        {selectedToy.category && <p className="p-1"><span className="font-bold">Category:</span> {selectedToy.category}</p>}
        {selectedToy.summary && <p className="p-1"><span className="font-bold">Summary:</span> {selectedToy.summary}</p>}
      </div>
    </div>
  );
};

export default ToyDetails;




