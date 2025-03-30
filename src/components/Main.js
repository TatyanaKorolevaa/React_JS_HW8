import { useSelector } from "react-redux";
import MainMenu from "./MainMenu";

function Main() {

    const menuVisible = useSelector(state => state.shop.menu.visible);

    return (
        <section className="main_logo">
            <img className="hidden" src="./img/Man.webp" alt="Фотография человека в куртке" />
            <div className="main_banner">
                <h2 className="main_logo_header1">THE BRAND</h2>
                <h3 className="main_logo_header2">OF&nbsp;LUXERIOUS <span className="main_logo_span">FASHION</span></h3>
            </div>
            {menuVisible ? <MainMenu /> : <></>}
        </section>
    );
}

export default Main;