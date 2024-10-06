import userReducers from "@/redux/features/users/userSlices";
import { pokemonApi } from "@/services/pokemon/pokemon";

const rootReducer = {
  user: userReducers,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export default rootReducer;
