import { PropsWithChildren } from 'react'

import { CartProvider } from './CartContext'

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  return <CartProvider>{children}</CartProvider>
}
