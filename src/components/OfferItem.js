function OfferItem({ className, header2, header3 }) {
    return (
        <div className={ className }>
            <div className="filler">
                <h2 className="offer_header4">{header2}</h2>
                <h3 className="offer_header3">{header3}</h3>
            </div>
        </div>
    );
}

export default OfferItem;