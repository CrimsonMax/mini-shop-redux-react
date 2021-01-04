import { useContext } from 'react';
import MainNavigation from '../components/MainNavigation'
import shopContext from '../context/shop-context';
import './Cart.css'

const Cart = props => {
  const context = useContext(shopContext)

  return (
        <>
          <MainNavigation cartItemCount={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)} />
          <main className="cart">
            {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
              {context.cart.map(item => (
                <li key={item.id}>
                  <div>
                    <strong>{item.title}</strong> - ${item.price} ({item.quantity})
                    </div>
                  <div>
                    <button onClick={context.deleteProduct.bind(this, item.id)}>
                      Remove from Cart
                      </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
  )
}

export default Cart