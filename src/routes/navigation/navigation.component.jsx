import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from'./navigation.styles';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
     

    return(
      <Fragment>
       <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
         <NavLinks>
           <NavLink to='/shop'>
            SHOP
           </NavLink>
           {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
               SIGN OUT
               </NavLink>
             )  : (
             <NavLink to='/auth'>
              SIGN IN
             </NavLink>
             )}
            <CartIcon />   
         </NavLinks>
          { isCartOpen  && <CartDropdown /> }  
       </NavigationContainer>
       <Outlet />
      </Fragment>
  
    )
  };

  export default Navigation;
  