import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../constants";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  // identification state and type of data we will kepp in the state
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    // get the car data
    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you can like.</p>
        </div>
        {/* filter area */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Fuel Type" options={fuels} />
            <CustomFilter title="Date of Production" options={years} />
          </div>
        </div>
        {/* cars area */}

        {!cars || cars.length < 1 ? (
          // if there are no cars, a warning is displayed on the screen
          <div className="home__error-container">
            {" "}
            <h2>Sorry, no results were found.</h2>{" "}
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {/* if data has arrived, cards are displayed on the screen */}
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
