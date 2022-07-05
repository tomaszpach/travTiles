import { useEffect, useState } from "react";

import Tile from "./components/Tile";
import Header from "./components/Header/Header";
import Loader from "./components/Loader";

import "./App.scss";

function App() {
  const [tripData, setTripData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://mockend.com/tomaszpach/trav/city?limit=50"
    );
    if (!response.ok) {
      setLoading(false);
      throw new Error("Data coud not be fetched!");
    } else {
      setLoading(false);
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setTripData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <Header title="Recently viewed trips" />
      <Loader isLoading={loading} />
      <div className="tiles">
        {tripData.length > 0 ? (
          tripData.map((trip) => <Tile key={trip.id} {...trip} />)
        ) : (
          <div>{!loading && "Nothing to show"}</div>
        )}
      </div>
    </>
  );
}

export default App;
