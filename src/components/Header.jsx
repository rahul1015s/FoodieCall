import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function Header() {

  const cartCtx =  useContext(CartContext);
   const totalCartItem = cartCtx.items.reduce((totalNoOfItems, item) => {
      return totalNoOfItems + item.quantity;
   },0);

    return(
       
        <header className="bg-transparent sticky top-0 border border-yellow-10 flex justify-between items-center backdrop-blur-md">
   <nav className="flex justify-between items-center w-full">
      
      {/* Logo and Title */}
      <div className='flex items-center'>
         <img src={logoImg} className="w-14 h-14 rounded-full  m-4 border-2 border-white" />
         <h1 className="font-alatsi font-bold text-3xl text-white">Foodie Call</h1>
      </div>
      
      {/* Cart Button */}
      <div className='flex justify-end items-center mr-4 text-white text-2xl'>
         <Button textOnly>Cart ({totalCartItem})</Button>
      </div>
   </nav>
</header>


    );
}