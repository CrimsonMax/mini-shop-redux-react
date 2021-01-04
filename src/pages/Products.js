import MainNavigation from '../components/MainNavigation'
import shopContext from '../context/shop-context'
import './Products.css'

const Products = props => {
  return (
    <shopContext.Consumer>
      {context => (
        <>
          <MainNavigation cartItemCount={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)} />
          <main className="products">
            <ul>
              {context.product.map(good => (
                <li key={good.id}>
                  <div>
                    <strong>{good.title}</strong> - ${good.price}
                  </div>
                  <div>
                    <button onClick={context.addProduct.bind(this,good)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
      )}
    </shopContext.Consumer>
  )
}

export default Products