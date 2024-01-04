
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className=" absolute right-0  text-white font-semibold p-1 badge badge-secondary font-semibold text-sm">$ {price}</div>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;