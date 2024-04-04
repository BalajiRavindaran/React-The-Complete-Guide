import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-api-9bf3a-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setIsLoading(false);
      setAvailableMeals(loadedMeals);
    };

    fetchMeals().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message);
    });

  }, []);

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p className={classes.mealsLoading}>LOADING...</p>}
        {httpError && <p className={classes.mealsError}>{httpError}</p>}
        {!isLoading &&  !httpError && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
