import React from 'react'
import Header from './components/Layout/Header/Header'
import Meal from './components/MealMenu/Meal'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider';

function App() {
  //--------manage state-------//
  const [showCart, setShowCart] = React.useState(false);
  //-------------/------------//

  //--------handle cart--------//
  const handleShowCart = () => {
    setShowCart(true);
  }
  const handleCloseCart = () => {
    setShowCart(false);
  }
  //-------------/-------------//


  return (
    <CartProvider>
      {showCart && <Cart onClose={handleCloseCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  )
}

export default App
