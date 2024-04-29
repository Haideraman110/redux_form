import { configureStore } from "@reduxjs/toolkit";
import formslice from "../slices/formslice";

const store = configureStore({
    reducer: {
        formdata: formslice            //store have the access of formslice micro reducers

    }
})

export default store