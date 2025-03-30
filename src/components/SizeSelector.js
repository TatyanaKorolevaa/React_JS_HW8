import { useDispatch, useSelector } from "react-redux";
import { sizeChange } from "../reducers/slice";

function SizeSelector() {

    const sizes = useSelector(state => state.shop.sizes);
    const dispatch = useDispatch();

    return (
        <div style={{"display":"flex", "justifyContent":"center", "margin":"10px"}}>
            <label style={{ "marginRight":"10px"}}>Set your size:</label>
            <select onChange={e => dispatch(sizeChange(e.target.value))}>
                {sizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
        </div>
    );
}

export default SizeSelector;