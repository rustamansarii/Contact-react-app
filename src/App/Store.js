import { configureStore } from "@reduxjs/toolkit";
import ContactsDetails from "../features/ContactsDetails";
export const Store = configureStore({
  reducer: { 
    app:ContactsDetails,
  },
});
export default Store;