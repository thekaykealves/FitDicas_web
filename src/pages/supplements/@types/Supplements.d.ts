export interface SupplementsProps {
  products: {
    id: string
    name: string
    price: string
    imageUrl: string
    description: string
    defaultPriceId: string
  }[]
}
