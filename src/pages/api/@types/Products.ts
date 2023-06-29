export interface Products {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
    description: string
    quantity: number
  }[]
}
