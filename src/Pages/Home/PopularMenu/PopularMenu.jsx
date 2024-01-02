import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItme from "../../Shared/MenuItem/MenuItme";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItmes = data.filter(item => item.category === 'popular')
                setMenu(popularItmes)
            })
    }, [])
    return (
        <section>
            <SectionTitle subHedding={"Check it Out"} hedding={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 ">
                {
                    menu.map(item => <MenuItme
                        key={item._id}
                        item={item}
                    ></MenuItme>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;