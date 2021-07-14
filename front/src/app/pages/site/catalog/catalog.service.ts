import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {ProductInterface} from './product.interface'
import {environment} from '../../../../environments/environment'
import {CategoryInterface} from './category.interface'

@Injectable()
export class CatalogService {
  url = environment.url

  constructor(
    private http: HttpClient
  ) {
  }


  /* products */

  getProducts(params?: string): Observable<ProductInterface[]> {
    return this.http
      .get<ProductInterface[]>(`/api/private/products`)
  }

  addProduct(): Observable<object> {
    return this.http
      .post(`/api/private/products`, {})
  }

  updateProduct(product: ProductInterface): Observable<object> {
    return this.http
      .put(`/api/private/products/${product.id}`, product)
  }

  deleteProduct(id: number): Observable<object> {
    return this.http
      .delete(`/api/private/products/${id}`)
  }

  /* categories */

  addCategories(): Observable<object> {
    return this.http
      .post(`/api/private/categories`, {})
  }

  getCategories(): Observable<CategoryInterface[]> {
    return this.http
      .get<CategoryInterface[]>('/api/private/categories')
  }

  updateCategories(i: CategoryInterface): Observable<object> {
    return this.http
      .put(`/api/private/categories/${i.id}`, i)
  }

  deleteCategories(id: number): Observable<object> {
    return this.http
      .delete(`/api/private/categories/${id}`)
  }
}
