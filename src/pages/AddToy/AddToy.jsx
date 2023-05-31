import { useContext } from 'react';
import './AddToy.css';
import { AuthContext } from '../../providers/AuthProvider';
const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleToyUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const description = form.description.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const summary = form.summary.value;
        const seller = form.seller.value;
        const seller_email = form.sellerEmail.value;
        const picture = form.picture.value;

        const toyDetails={
            name:name,
            price,
            rating,
            brand,
            description,
            category,
            quantity,
            summary,
            seller,
            seller_email,
            picture
        }

    
        console.log(toyDetails);

        fetch('http://localhost:5000/addtoy',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toyDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('serverside ',data);
        })
    }
   

    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold ">Add a Toy</h1>
                        <p>Have a toy you want to share with others? You can easily add your toy to our platform! Whether it is a collectible, vintage item, or simply a toy you no longer need, you can upload its details and let others discover and enjoy it. Provide a brief description, specify the condition, set a price, and include some eye-catching photos to make your toy stand out. By adding your toy, you will connect with potential buyers who are looking for exactly what you have to offer. Start sharing the joy of your toy today!</p>
                        <p className="py-6">
                            Fill in the toy details below to add a new toy to upload.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 wide-section">
                        <div className="card-body">
                            <form onSubmit={handleToyUpload}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Toy Name"
                                        className="input input-bordered w-full"

                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="picture"
                                        placeholder="Toy Image URL"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        placeholder="Toy Price"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="rating"
                                        placeholder="Toy Rating"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="brand"
                                        placeholder="Toy Brand"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="Toy Description"
                                        className="textarea textarea-bordered w-full"
                                    ></textarea>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        placeholder="Toy Category"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        placeholder="Toy Quantity"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Summary</span>
                                    </label>
                                    <textarea
                                        name="summary"
                                        placeholder="Toy Summary"
                                        className="textarea textarea-bordered w-full"
                                    ></textarea>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="seller"
                                        placeholder="Toy Seller"
                                        className="input input-bordered w-full"
                                        defaultValue={user?.displayName}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="sellerEmail"
                                        placeholder="seller@example.com"
                                        className="input input-bordered w-full"
                                        defaultValue={user?.email}
                                    />
                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type="submit">
                                        Upload Toy
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;
