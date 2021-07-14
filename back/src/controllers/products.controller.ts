import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {DataService} from '../data.service'
import {ProductInterface} from '../models/product.interface'

@Controller('private')
export class ProductsController {
    constructor(private readonly data: DataService) {
    }

    @Get('products')
    async getProducts(): Promise<ProductInterface[]> {
        return await this.data.getProducts()
    }

    @Put('products/:id')
    async updateProduct(
        @Body() data,
        @Param('id') id: number) {
        return await this.data.updateProduct(data, id)
    }

    @Delete('products/:id')
    async deleteProduct(
        @Param('id') id: number) {
        return await this.data.deleteProduct(id)
    }

    @Post('products')
    async createProduct(
        @Body() data
    ) {
        return await this.data.createProduct(data)
    }
}
