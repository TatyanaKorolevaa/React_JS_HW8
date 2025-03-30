import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            img: "./img/card1.webp",
            alt: "Карточка товара 1",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00,
            size: "L"
        },
        {
            id: 2,
            img: "./img/card2.webp",
            alt: "Карточка товара 2",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00,
            size: "XL"
        },
        {
            id: 3,
            img: "./img/card3.webp",
            alt: "Карточка товара 3",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00,
            size: "XL"
        },
        {
            id: 4,
            img: "./img/card4.webp",
            alt: "Карточка товара 4",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00,
            size: "M"
        },
        {
            id: 5,
            img: "./img/card5.webp",
            alt: "Карточка товара 5",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00, 
            size: "XXL"
        },
        {
            id: 6,
            img: "./img/card6.webp",
            alt: "Карточка товара 6",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00,
            size: "L"
        },
    ],
    basket: {
        count: 0,
        totalCost: 0,
        items: []
    },
    menu: { visible: false },
    sizes: [ "ALL", "M" , "L" , "XL" , "XXL" , "XXXL" ],
    currentSize: "ALL",
};

const getTotalCost = (items) => { 
    let totalCost = 0;
    items.forEach(item => {
        totalCost = totalCost + item.price * item.count;
    });
    return totalCost;
};

const slice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        add: (state, action) => {
            state.basket.count++;
            let isInBasket = state.basket.items.filter(item => item.id == action.payload).length > 0;
            if (isInBasket) {
                // Данный продукт уже есть в корзине
                let oldCount = state.basket.items.filter(item => item.id == action.payload)[0].count;
                state.basket.items.filter(item => item.id == action.payload)[0].count = oldCount + 1;
            } else {
                // Данного продукта в корзине еще нет
                state.basket.items = [...state.basket.items, state.products.filter(item => item.id == action.payload)[0]];
                state.basket.items.filter(item => item.id == action.payload)[0].count = 1;
            }
            state.basket.totalCost = getTotalCost(state.basket.items);
        },
        remove: (state, action) => {
            let oldCount = state.basket.items.filter(item => item.id == action.payload)[0].count;
            state.basket.count = state.basket.count - oldCount;
            state.basket.items = state.basket.items.filter((item) => item.id != action.payload);
            state.basket.totalCost = getTotalCost(state.basket.items);
        },
        increment: (state, action) => {
            state.basket.count++;
            let oldCount = state.basket.items.filter(item => item.id == action.payload)[0].count;
            state.basket.items.filter(item => item.id == action.payload)[0].count = oldCount + 1;
            state.basket.totalCost = getTotalCost(state.basket.items);
        },
        decrement: (state, action) => {
            state.basket.count--;
            let oldCount = state.basket.items.filter(item => item.id == action.payload)[0].count;
            if (oldCount > 1) {
                state.basket.items.filter(item => item.id == action.payload)[0].count = oldCount - 1;
            } else {
                state.basket.items = state.basket.items.filter((item) => item.id != action.payload);
            }
            state.basket.totalCost = getTotalCost(state.basket.items);
        },
        switchMenuVisible: (state) => {
            state.menu.visible = !state.menu.visible;
        },
        sizeChange: (state, action) => {
            state.currentSize = action.payload;
        }
    }
});

export const { add, remove, increment, decrement, switchMenuVisible, sizeChange } = slice.actions;
export default slice.reducer; 