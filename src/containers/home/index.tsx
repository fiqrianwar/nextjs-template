"use client";
import { setUser, clearUser } from "@/redux/features/users/userSlices";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "@/services/pokemon/pokemon";
import style from "@/sass/containers/home.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const { data } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);
  return (
    <>
      <button
        className={`btn btn-primary ${style.button_color}`}
        onClick={() =>
          dispatch(
            setUser({
              name: "Tes",
              email: "Test@Template.com",
            })
          )
        }
      >
        Update User
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(clearUser())}>
        Clear User
      </button>

      <h2>{user.email}</h2>
      <h2>{user.name}</h2>
    </>
  );
};

export default HomePage;
