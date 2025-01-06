import { useState, useEffect } from 'react';

export default function Meals() {
   const [loadedMeals, setLoadedMeals] =  useState([]);

    useEffect(() => {

        async function fetchMeals() {

            const response = await fetch('http://localhost:3000/meals');
      
            if(!response.ok) {
              //....
            }
           const meals = await  response.json();
           setLoadedMeals(meals);
          }
      
          fetchMeals();
         

    }, []);

    

    return(
        <ul class="w-[90%] max-w-[70rem] list-none m-8 mx-auto p-4 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 text-white font-alatsi">
            {loadedMeals.map(meal => <li key={meal.id}> 
                {meal.name}
            </li> )}
        </ul>
    );
}