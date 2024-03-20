import { configureStore } from "@reduxjs/toolkit";
import Global from "./Global";

export default configureStore({
    reducer: {
        counter: Global
    },
})