import { useState } from 'react';


const MyToyRow = ({ myToy }) => {
    const { picture, name, price, brand, quantity, description, category, summary, Seller, seller_email } = myToy;
    const [isDeleteHovered, setIsDeleteHovered] = useState(false);
    const [isEditHovered, setIsEditHovered] = useState(false);

    const handleDeleteHover = () => {
        setIsDeleteHovered(!isDeleteHovered);
    };

   const handleDelete=id=>{

    const proceed= confirm('Are you really want to DELETE?');
    if(proceed){
        fetch('')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

   }


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {picture && <img src={picture} alt="My toy Component" />}
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
                    {/* <p>{description}</p> */}
                </div>
            </td>
            <td>
                <div className="flex text-center">
                    <div className="p-3 text-center">
                        <button className="btn btn-sm btn-circle btn-warning" data-tip="Delete" onMouseEnter={handleDeleteHover} onMouseLeave={handleDeleteHover}  onClick={ handleDelete}>
                            <img src="https://cdn-icons-png.flaticon.com/512/399/399274.png?w=740&t=st=1685622220~exp=1685622820~hmac=5594f69811603c4ac1937784c5161d573b3f8a6eab80a9dac400f896ff69b155" alt="" />
                            {isDeleteHovered && <span className="tooltip-text">Delete</span>}
                        </button>
                    </div>
                    <div className="p-3 text-center">
                        <button className="btn btn-sm btn-circle btn-warning" data-tip="Delete" onMouseEnter={handleDeleteHover} onMouseLeave={handleDeleteHover}>
                            <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png?w=740&t=st=1685622334~exp=1685622934~hmac=bd16a4bda463383a7533650800ff5525b70f8daa2914985caa6c35601d62c00d" alt="" />
                            {isDeleteHovered && <span className="tooltip-text">Edit</span>}
                        </button>
                    </div>
                </div>
            </td>

        </tr>
    );
};

export default MyToyRow;
