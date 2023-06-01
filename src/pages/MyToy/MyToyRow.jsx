const MyToyRow = ({ myToy }) => {
    const { picture, name, price, brand, quantity, description, category, summary, Seller, seller_email } = myToy;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="My toy Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{brand}</div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <div>
                    <p>Category: {category}</p>
                </div>
            </td>


            <td>
                <button className="btn btn-ghost btn-xs">details</button>
            </td>
        </tr>
    );
};

export default MyToyRow;
