import { configureStore } from "@reduxjs/toolkit";
import MealSlice from "./MealSlice/MealSlice";

const store = configureStore({
    reducer:{
        products: MealSlice
    }
})

export default store