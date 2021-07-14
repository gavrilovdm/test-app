import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {DataService} from '../data.service'
import {CategoryInterface} from '../models/category.interface'

@Controller('private')
export class CategoriesController {
    constructor(private readonly data: DataService) {
    }

    @Get('categories')
    async getcategories(): Promise<CategoryInterface[]> {
        return await this.data.getCategories()
    }

    @Put('categories/:id')
    async updateProduct(
        @Body() data,
        @Param('id') id: number) {
        return await this.data.updateCategory(data, id)
    }

    @Delete('categories/:id')
    async deleteProduct(
        @Param('id') id: number) {
        return await this.data.deleteCategory(id)
    }

    @Post('categories')
    async createProduct(
        @Body() data
    ) {
        return await this.data.createCategory(data)
    }
}
