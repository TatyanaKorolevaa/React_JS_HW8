function ProductsItem({ img, alt, title, description, price, size, count, isBasketItem, children }) {

    return (
        <div className="card">
            <img className="card_image" src={img} alt={alt} />
            <div className="card_image__selected" >{children}</div>
            <h3 className="card_header">{title} / size: {size}</h3>
            <p className="card_text" >{description}</p>
            <p className="card_price">${price}</p>
            { isBasketItem ? <p className="card_price">{count} pcs.</p> : <></>}
        </div>
    );
}

export default ProductsItem;