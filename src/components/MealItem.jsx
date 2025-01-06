import { currencyFormatter } from "../util/formatting.jsx";

export default function MealItem({meal}) {
    return(
        <li className="rounded-[1rem] overflow-hidden text-center shadow-custom bg-slate-600"> 
        <article className="h-[100%] flex flex-col justify-between">
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}  className="w-[100%] h-[20rem] object-cover "/>
            <div>
                <h3 className="font-bold text-[1.5rem] my-[0.75rem] ">{meal.name}</h3>
                <p className="meal-item-price ">{currencyFormatter.format(meal.price)}</p>
                <p className="m-[1rem]">{meal.description}</p>
            </div>

            <p className="mb-[1.5rem]">
                <button className="bg-yellow-600 px-2 py-1 rounded hover:bg-yellow-800 ">Add to Cart</button>
            </p>

        </article>

        </li>
    );
}