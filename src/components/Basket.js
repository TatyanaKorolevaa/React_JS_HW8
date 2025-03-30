import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Main from './Main';
import ProductsItem from './ProductsItem';
import ProductsItemButton from './ProductsItemButton';
import { decrement, increment, remove } from '../reducers/slice';


function Basket() {

    const products = useSelector(state => state.shop.basket.items);
    const count = useSelector(state => state.shop.basket.count);
    const totalCost = useSelector(state => state.shop.basket.totalCost);
    const dispatch = useDispatch();



    return (
        <>
            <Header />
            <div className="main_logo">
                <h3 className="main_logo_span" style={{"margin":"10pt"}}>Cart contains {count} items worth ${totalCost}</h3>
            </div>
            <section className="main_logo">
                <div className="cards">
                    {products.map(item =>
                        <>
                            <ProductsItem {...item} key={item.id} isBasketItem={true}>
                                <ProductsItemButton
                                    id={item.id}
                                    action={(e) => dispatch(increment(e.target.value))}
                                    title={"+1"} />
                                <ProductsItemButton
                                    id={item.id}
                                    action={(e) => dispatch(decrement(e.target.value))}
                                    title={"-1"} />
                                <ProductsItemButton
                                    id={item.id}
                                    action={(e) => dispatch(remove(e.target.value))}
                                    title={"Delete"} />
                            </ProductsItem>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Basket;