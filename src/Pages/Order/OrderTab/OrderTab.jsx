import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ itmes }) => {
    return (
        <div className='grid md:grid-cols-3  gap-12 p-8'>
            {
                itmes.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;