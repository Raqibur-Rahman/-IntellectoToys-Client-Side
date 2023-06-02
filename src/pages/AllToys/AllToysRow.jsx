import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {


    const { picture, name, price, brand, quantity, Seller, rating } = toy;
    console.log(name, price, brand, quantity, Seller, rating);

    return (

        <tr>

            <td className=" text-center" >
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{brand}</div>
                    </div>
                </div>
            </td>
            <td className=" text-center">
                {price}
            </td>
            <td className=" text-center">{rating}</td>
            <td className=" text-center">{quantity}</td>
            <td className=" text-center">{Seller}</td>
            <th className=" text-center">
                <div className="card-actions">
                    <Link to={`/toys/${toy._id}`}>
                        <button className="btn btn-primary">View details</button>
                    </Link>
                </div>
            </th>
        </tr>



    );
};

export default AllToysRow;