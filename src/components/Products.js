import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "./ProductsItem";
import { add } from "../reducers/slice";
import ProductsItemButton from "./ProductsItemButton";
import ProductsBackground from "./ProductsBackground";


function Products() {

    const products = useSelector(state => state.shop.products);
    const currentSize = useSelector(state => state.shop.currentSize);
    const dispatch = useDispatch();
    return (
        <ProductsBackground>
            {products.filter(item => item.size == currentSize || currentSize == "ALL").map(item =>
                <ProductsItem {...item} key={item.id}>
                    <ProductsItemButton
                        id={item.id}
                        action={(e) => dispatch(add(e.target.value))}
                        src={"./img/Basket.webp"}
                        alt={"Значок добавления в корзину"}
                        title={"Add to Card"} />
                </ProductsItem>
            )}
        </ProductsBackground>
    );
}

export default Products;