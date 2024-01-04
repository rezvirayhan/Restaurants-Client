import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import PizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCatagory from '../MenuCatagory/MenuCatagory';
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHedding={"Don't Miss"} hedding={"Today's Offer"}></SectionTitle>
            <MenuCatagory itmes={offered}></MenuCatagory>
            <MenuCatagory itmes={desserts} title={"Our Dessset"} coverImg={dessertImg}>
            </MenuCatagory>
            <MenuCatagory itmes={soup} title={"Our Soup"} coverImg={soupImg}>
            </MenuCatagory>
            <MenuCatagory itmes={salad} title={"Our Salad"} coverImg={saladImg}>
            </MenuCatagory>
            <MenuCatagory itmes={pizza} title={"Our Pizza"} coverImg={PizzaImg}>
            </MenuCatagory>
        </div>
    );
};
export default Menu;