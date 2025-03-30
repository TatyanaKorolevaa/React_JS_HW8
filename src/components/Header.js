import { useDispatch, useSelector } from "react-redux";
import { switchMenuVisible } from "../reducers/slice";
import { Link } from "react-router-dom";

function Header() {

    const basketCount = useSelector(state => state.shop.basket.count);
    const dispatch = useDispatch();

    const onMenuItemClick = () => {
        dispatch(switchMenuVisible());
    };

    return (
        <header className="header">
            <div className="left_header_group">
                <Link to={"/"}>
                    <img src="./img/Logo.webp" alt="Логотип сайта" />
                </Link>
                <button className="header_button">
                    <img src="./img/Find.webp" width="26" alt="Значок поиска" />
                </button>
            </div>
            <div className="right_header_group">
                <button className="header_button" id="mainmenubutton">
                    <img src="./img/Menu.webp" alt="Значок меню" onClick={onMenuItemClick} />
                </button>
                <button className="header_button hidden">
                    <img src="./img/Account.webp" alt="Значок входа в аккаунт" />
                </button>
                <div className="header_button hidden position_relative">
                    <div className="basket-count">{basketCount}</div>
                    <Link to={"/basket"}>
                        <img src="./img/Basket.webp" alt="Значок корзины" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;