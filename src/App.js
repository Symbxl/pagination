import { useEffect, useState } from "react";
import AppPagination from "./AppPagination";
import "./App.css";
const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await response.json();
      setData(characters);
      console.log(characters);
    };
    getCharacters();
  }, []);

  return <AppPagination pageSize={4} items={data?.results} itemsPerPage={5} />;
};
export default App;
