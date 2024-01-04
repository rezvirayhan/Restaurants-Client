import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItme from "../../Shared/MenuItem/MenuItme";
const MenuCatagory = ({ itmes, title, coverImg }) => {
    return (
        <div className="pt-12">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-4 gap-8 mt-12 p-4 ">
                {
                    itmes.map(item => <MenuItme
                        key={item._id}
                        item={item}
                    ></MenuItme>)
                }
            </div>
            <Link to='/order'>
                <button className="ml-12 btn btn-outline border-0 border-b-4 mt-4 bg-gray-900 text-white">Order Now</button>
            </Link>
        </div >
    );
};

export default MenuCatagory;