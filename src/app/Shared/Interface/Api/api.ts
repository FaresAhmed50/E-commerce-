import {Product} from '../product/product';

export interface Api {
  results: number
  metadata: Metadata
  data: Product[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}
