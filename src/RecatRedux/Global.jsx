import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    Qty: 0,
    totalPrice: 0,
    item: []
}


export const Global = createSlice({
  name: 'counter',
  initialState,
    reducers: {
        increment: (state) => {
            state.count += 1 
        },
        addToCart: (state, { payload }) => {
            
            const check = state.item.find((el) => el.id === payload.id)
            // const check2 = state.item.findIndex((el)=> el.id === payload.id)
            if (check) {
                check.qty += 1
            } else {
                state.item = [ ...state.item, {...payload, qty: 1} ]
            }
            state.Qty += 1
            state.totalPrice = payload.price * state.Qty
        },
        removeItemFromCart: (state, { payload }) => {
            const check = state.item.findIndex((el) => el.id === payload.id)
            if (state.item[check].qty > 1) {
                state.item[check].qty -= 1
            } else {
                state.item = state.item.filter((el)=> el.id !== payload.id)
            }
            state.Qty -= 1
            state.totalPrice -= payload.price
        }
    }
});

export const {increment,addToCart,removeItemFromCart} = Global.actions

export default Global.reducer