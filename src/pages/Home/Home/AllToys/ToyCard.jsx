
const ToyCard = ({toy}) => {

     const {name, price, picture}=toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 h-96 shadow-xl p-1">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyCard;