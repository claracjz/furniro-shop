import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() data: ProductDto) {
    return this.productService.create(data);
  }

  @Get()
  async getProducts(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('id') id?: number,
  ) {
    if (id) {
      return this.productService.getProductById(id);
    } else {
      return this.productService.getAllProducts(limit, offset);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: ProductDto) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
