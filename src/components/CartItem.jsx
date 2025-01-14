import { currencyFormatter } from "../util/formatting.jsx";

export default function CartItem({ name, quantity, price, onIncrease, onDecrease }) {

    
  return (
    <li className="flex justify-between items-center p-4 border-b">
      <p className="text-gray-800">
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <div className="flex items-center space-x-2">
        <button className="bg-slate-500 text-white rounded px-3 py-1 hover:bg-slate-600" onClick={onDecrease}>-</button>
        <button className="px-3 py-1 bg-gray-200 rounded" >{quantity}</button>
        <button className="bg-slate-500 text-white rounded px-3 py-1 hover:bg-slate-600" onClick={onIncrease}>+</button>
      </div>
    </li>
  );
}
