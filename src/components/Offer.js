import OfferItem from "./OfferItem";

function Offer() {
  return (
    <section className="offer">
      <OfferItem className={"offer_for_women_background"} header2={"30% OFF"} header3={"FOR WOMEN"} />
      <OfferItem className={"offer_for_men_background"} header2={"HOT DEAL"} header3={"FOR MEN"} />
      <OfferItem className={"offer_for_kids_background"} header2={"NEW ARRIVALS"} header3={"FOR KIDS"} />
      <OfferItem className={"offer_accesories_background"} header2={"LUXIROUS & TRENDY"} header3={"ACCESORIES"} />
    </section>
  );
}

export default Offer;