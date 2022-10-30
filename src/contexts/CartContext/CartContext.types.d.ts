export type Product = {
  id: string
  priceId: string
  price: string
  imageUrl: string
  name: string
}

export type CartContextData = {
  productsInCart: Product[]
  addProductToCart(product: Product): void
  removeProductToCart(productId: string): void
}
