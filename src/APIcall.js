import React from "react";
export const StoreContext = React.createContext(null);

export default function APIcall({ children }) {
  const [ALL, setALL] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
      fetch(`https://akabab.github.io/superhero-api/api/all.json`)
        .then((response) => response.json())
        .then((response_json) => {
          setALL(response_json);
        });
    };
    getData();
  }, []);

  console.log(ALL);
  return <StoreContext.Provider value={ALL}>{children}</StoreContext.Provider>;
}
