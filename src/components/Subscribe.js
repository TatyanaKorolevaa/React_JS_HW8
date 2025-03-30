function Subscribe() {
    return (
        <section className="subscribe">
            <img className="subscribe-background" src="./img/Sea.webp" alt="Море на заднем плане" />
            <div className="subscribe-info">
                <img className="subscribe-info__image" src="./img/Intersect.webp" alt="Лицо" />
                <p className="subscribe-info_text">
                    &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
                    <span className="subscribe-info_text__italic">
                        a&nbsp;pulvinar purus condimentum
                    </span>
                    &raquo;
                </p>
            </div>
            <div className="subscribe-buttongroup">
                <h2 className="subscribe-buttongroup_h3">SUBSCRIBE</h2>
                <p className="subscribe-buttongroup_p">FOR OUR NEWLETTER AND PROMOTION</p>
                <form className="subscribe-buttongroup_form" action="#">
                    <input className="subscribe-buttongroup__input" type="email" name="email" id="email" placeholder="Enter Your Email" />
                    <button className="subscribe-buttongroup_button" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Subscribe;