import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goTocheckoutHandler = () => {
        navigate('/checkout');
    }
  
    
    return(
        <CartDropdownContainer>
         <CartItems>
         {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
            ) : (
                <EmptyMessage>Your cart is Empty</EmptyMessage>
            )}
         </CartItems>
           <Button onClick={goTocheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    )

}

export default CartDropdown;

