import { currencyFormatter } from "../util/formatting.jsx"
export default function CartItem ({ name, quantity, price}) {
    return <li>
        <p>
            {name}- {quantity} X {currencyFormatter.format(price)}
        </p>
        <P>
            <button>-</button>
            <button>{quantity}</button>
            <button>+</button>
        </P>
    </li>
}