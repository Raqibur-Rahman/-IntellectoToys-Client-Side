import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from 'sweetalert2';


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `https://intellecto-toys-server.vercel.app/myToys?seller_email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete the item?");
        if (proceed) {
            fetch(`https://intellecto-toys-server.vercel.app/toys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        alert('Item has been deleted!');
                    }
                    setMyToys(prevToys => prevToys.filter(myToy => myToy._id !== id));
                })
        }
    }

    

    const handleEdit = (id) => {
        const updatedPrice = prompt("Enter the updated price:");
        const updatedQuantity = prompt("Enter the updated available quantity:");
        const updatedDescription = prompt("Enter the updated detail description:");

        const updatedToy = {
            price: updatedPrice,
            quantity: updatedQuantity,
            description: updatedDescription,
        };

        fetch(`https://intellecto-toys-server.vercel.app/toys/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedToy),
        })
            .then(() => {
                setMyToys(prevToys => {
                    const updatedToys = prevToys.map(myToy => {
                        if (myToy._id === id) {
                            return { ...myToy, ...updatedToy };
                        }
                        return myToy;
                    });
                    return updatedToys;
                });

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.error("Error updating toy:", error);
            });
    };


    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Your Toy</h3>
            <h3 className="text-xl font-semibold text-center">Number of Your Toy : {myToys.length}</h3>

            <div className="flex justify-center items-center p-1">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Detail description</th>
                                <th>Actions</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys.map(myToy =>
                                <MyToyRow
                                    key={myToy._id}
                                    myToy={myToy}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;
