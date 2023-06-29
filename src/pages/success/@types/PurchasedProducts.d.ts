export interface PurchasedProducts {
  customerName: string
  products: {
    id: string
    name: string
    images: string
  }[]
}
