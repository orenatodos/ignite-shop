import {
  createContext,
  PropsWithChildren,
  useCallback,
  useState
} from 'react'

import type { CartContextData, Product } from './CartContext.types'

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: PropsWithChildren<unknown>) {
  const [productsInCart, setProductsInCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const storedProducts = localStorage.getItem('@ignite-shop/cart')

      if (!storedProducts) {
        return []
      }

      return JSON.parse(storedProducts)
    }

    return []
  })

  const addProductToCart = useCallback(
    (product: Product) => {
      setProductsInCart((prevState) => [...prevState, product])

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          '@ignite-shop/cart',
          JSON.stringify([...productsInCart, product])
        )
      }
    },
    [productsInCart]
  )

  const removeProductToCart = useCallback(
    (productId: string) => {
      const updatedProducts = productsInCart.filter(
        (product) => product.id !== productId
      )

      setProductsInCart(updatedProducts)

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          '@ignite-shop/cart',
          JSON.stringify(updatedProducts)
        )
      }
    },
    [productsInCart]
  )

  return (
    <CartContext.Provider
      value={{ productsInCart, addProductToCart, removeProductToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
