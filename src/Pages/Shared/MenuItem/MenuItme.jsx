
const MenuItme = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}!
                        <div className="badge badge-secondary">Popular</div>
                    </h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline mt-2 bg-gray-800 text-white">$ {price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItme;