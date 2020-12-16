import MainNavigation from '../components/MainNavigation'
import './Cart.css'

export default function Cart(props) {
  return (
    <>
      <MainNavigation cart={props.parentState} />
      <main className="cart">
        {props.parentState.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {props.parentState.map(item => (
            <li key={item.id}>
              <div>
                <strong>{item.title}</strong> - ${item.price} ({item.quantity})
            </div>
              <div>
                <button>
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