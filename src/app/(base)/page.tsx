"use client";
import { setUser } from "@/redux/features/users/userSlices";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "@/services/pokemon/pokemon";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userReducer);

  const { data } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          className="btn btn-primary"
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

        <h2>{user.email}</h2>
        <h2>{user.name}</h2>
      </main>
    </div>
  );
}
