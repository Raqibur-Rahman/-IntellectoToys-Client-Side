import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('../../../../../public/toys.json')
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  const selectedToy = toys.find(toy => toy.id == id);
  console.log(selectedToy);

  if (!selectedToy) {
    return <div>Error: Toy not found</div>;
  }

  return (
    <div>
      <div className="items-center ml-24 mb-16">
        <h2 className="text-3xl font-bold text-orange-700 text-center">{selectedToy.name}</h2>
        {selectedToy.picture && <img src={selectedToy.picture} alt={selectedToy.name} />}
        {selectedToy.price && <p className="p-1"><span className="font-bold">Price:</span> {selectedToy.price}</p>}
        {selectedToy.rating && <p className="p-1"><span className="font-bold">Rating:</span> {selectedToy.rating}</p>}
        {selectedToy.brand && <p className="p-1"><span className="font-bold">Brand:</span> {selectedToy.brand}</p>}
        {selectedToy.description && <p className="p-1"><span className="font-bold">Description:</span> {selectedToy.description}</p>}
        {selectedToy.category && <p className="p-1"><span className="font-bold">Category:</span> {selectedToy.category}</p>}
        {selectedToy.summary && (
          <div>
            <h3 className="p-1"><span className="font-bold">Summary:</span></h3>
            <ul>
              {selectedToy.summary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToyDetails;
