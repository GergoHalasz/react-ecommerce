import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { PersonSlice } from "./features/personSlice";

export const store=configureStore({
    reducer:{
        person:PersonSlice.reducer
    }
})

