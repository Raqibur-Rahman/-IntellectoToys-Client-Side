import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToysInTable = () => {
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const url = `https://intellecto-toys-server.vercel.app/toys`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 20); // Limit the results to 20 items

    return (
        <div className="flex justify-center items-center ">
            <div>
                <h3 className="text-center text-3xl font-extrabold">All of Our Toys</h3>
                <p className="text-center text-3xl font-bold">
                    Total Number of Toys: {filteredToys.length}
                </p>
                <p className="text-center font-semibold pb-5">
                    Unleash your creativity and curiosity with our wide range of science and technology toys
                </p>
                <div className="overflow-x-auto">
                    <p className="flex justify-center items-center align-middle">
                        <p className="text-center">
                            <input
                                type="text"
                                placeholder="Search by toy name"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="mb-3 p-2 border border-gray-500 rounded-md
                                 text-gray-800 placeholder-gray-500"
                                style={{ maxWidth: '300px' }}
                            />
                        </p>
                    </p>
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Name and Brand</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Available Quantity</th>
                                <th>Seller</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredToys.map((toy) => (
                                <AllToysRow key={toy._id} toy={toy} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToysInTable;
