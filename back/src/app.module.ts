import {Module} from '@nestjs/common'
import {ProductsController} from './controllers/products.controller'
import {DataService} from './data.service'
import {CategoriesController} from './controllers/categories.controller'

@Module({
    imports: [],
    controllers: [
        ProductsController,
        CategoriesController
    ],
    providers: [DataService],
})
export class AppModule {
}
