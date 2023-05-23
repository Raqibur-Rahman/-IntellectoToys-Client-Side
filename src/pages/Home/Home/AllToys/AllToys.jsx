import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
// import ToyCard from "./ToyCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    return (
        <div className="m-5">
            <div className="text-center ">
                <h3 className="text-3xl font-bold text-orange-700">All of Our Toys</h3>
                <div className="mt-8">
                    <h4 className="text-xl font-bold">Quality Products for Endless Fun</h4>
                    <p className="text-gray-700 m-5">
                        At our tech toy shop, we are committed to offering high-quality products that ensure endless fun and entertainment. We carefully select each toy based on its innovation, durability, and educational value. Our goal is to provide you and your family with toys that spark imagination and creativity while offering a safe and enjoyable playtime experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                
                    {
                        toys.map(toy => <ToyCard key={toy.id} toy={toy} />)
                    }



                </div>

            </div>

        </div>
    );
};

export default AllToys;