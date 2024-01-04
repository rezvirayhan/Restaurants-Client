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
        </div>
    );
};

export default MenuCatagory;