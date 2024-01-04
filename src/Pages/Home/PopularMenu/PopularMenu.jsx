import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItme from "../../Shared/MenuItem/MenuItme";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle subHedding={"Check it Out"} hedding={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 ">
                {
                    popular.map(item => <MenuItme
                        key={item._id}
                        item={item}
                    ></MenuItme>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;