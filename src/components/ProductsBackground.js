import SizeSelector from "./SizeSelector";

function ProductsBackground({ children }) {
    return (
        <section className="products">
            <h2 className="products_header3">Fetured Items</h2>
            <p className="products_subheader">Shop for items based on what we featured in this week</p>
            <SizeSelector />
            <div className="cards">{children}</div>
            <div className="products_button_container">
                <div className="browse_all_button">
                    <p className="browse_all_button_text">Browse All Product</p>
                </div>
            </div>
        </section>
    );
}

export default ProductsBackground;