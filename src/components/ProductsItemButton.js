function ProductsItemButton({ id, action, src, alt, title }) {
    return (
        <button
            className="add-to-card-button"
            value={id}
            onClick={action}>
            {src ? <img src={src} alt={alt} /> : <></>}
            {title}
        </button>
    );
}

export default ProductsItemButton;