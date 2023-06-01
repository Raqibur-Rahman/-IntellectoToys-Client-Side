import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/myToys?seller_email=${user?.email}`;
    // console.log(user);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Your Toy</h3>
            <h3 className="text-xl font-semibold">Number of Your Toy : {myToys.length}</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr className="text-center">
                               
                                <th>Name</th>
                                <th>Price</th>
                                <th>Available Quantity </th>
                                <th>Detail description</th>
                                <th>Actions</th>
                                <th>Favorite Color</th>
                                <th></th>

                                {/* "Seller": "Raqibur Rahman",
        "seller_email": "raqibur.a@gmail.com" */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myToys.map(myToy =>
                                    <MyToyRow
                                        key={myToy._id}
                                        myToy={myToy}
                                    ></MyToyRow>)
                            }





                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyToy;