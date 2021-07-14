import {Injectable} from '@nestjs/common'
import {ProductInterface} from './models/product.interface'
import {CategoryInterface} from './models/category.interface'

@Injectable()
export class DataService {

    categories: CategoryInterface[] = [
        {
            id: 1,
            title: 'Молочная продукция'
        },
        {
            id: 2,
            title: 'Хлебные изделия'
        },
        {
            id: 3,
            title: 'Кофе'
        }
    ]

    products: ProductInterface[] = [
        {
            id: 1,
            title: 'Молоко 2.5%',
            price: 60,
            expiryDate: '18.07.2021',
            category: 'Молочная продукция'
        },
        {
            id: 2,
            title: 'Творог 9%',
            price: 120,
            expiryDate: '19.07.2021',
            category: 'Молочная продукция'
        },
        {
            id: 3,
            title: 'Хлеб ржаной',
            price: 40,
            expiryDate: '17.07.2021',
            category: 'Хлебные изделия'
        },
        {
            id: 4,
            title: 'Хлеб белый',
            price: 40,
            expiryDate: '17.07.2021',
            category: 'Хлебные изделия'
        },
        {
            id: 5,
            title: 'Молотый кофе',
            price: 200,
            expiryDate: '14.07.2022',
            category: 'Кофе'
        },
        {
            id: 6,
            title: 'Сублимированный кофе',
            price: 150,
            expiryDate: '14.07.2022',
            category: 'Кофе'
        },
    ]

    async getProducts(): Promise<ProductInterface[]> {
        return this.products
    }

    async updateProduct(data: ProductInterface, id: number): Promise<ProductInterface> {
        const index = this.products.findIndex(i => i.id == id)
        this.products[index] = data

        return this.products[index]
    }

    async deleteProduct(id: number): Promise<boolean> {
        const index = this.products.findIndex(i => i.id == id)
        this.products.splice(index, 1)

        return
    }

    async createProduct(data: ProductInterface): Promise<ProductInterface> {
        data.id = Math.floor(Math.random() * 10000)
        this.products.push(data)

        return this.products.slice(-1)[0]
    }

    async getCategories(): Promise<CategoryInterface[]> {
        return this.categories
    }

    async updateCategory(data: CategoryInterface, id: number): Promise<CategoryInterface> {
        const index = this.categories.findIndex(i => i.id == id)
        const currentCategory = this.categories.find(i => i.id == id)

        // изменяем название категории у товаров, принадлежащих данной категории
        for (const item of this.products)
            if (item.category === currentCategory.title)
                item.category = data.title

        this.categories[index] = data

        return this.categories[index]
    }

    async deleteCategory(id: number): Promise<boolean> {
        const index = this.categories.findIndex(i => i.id == id)
        const currentCategory = this.categories.find(i => i.id == id)

        // удаляем название категории у товаров, принадлежащих данной категории
        for (const item of this.products)
            if (item.category === currentCategory.title)
                item.category = null

        this.categories.splice(index, 1)

        return
    }

    async createCategory(data: CategoryInterface): Promise<CategoryInterface> {
        data.id = Math.floor(Math.random() * 10000)
        this.categories.push(data)

        return this.categories.slice(-1)[0]
    }


}
