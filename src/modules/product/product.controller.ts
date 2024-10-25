import {
  Body,
  Controller,
  Post,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  Query,
} from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async getProducts(
    @Body() body: { limit?: number; offset?: number; id?: number },
  ): Promise<any> {
    const { limit, offset, id } = body;
    if (id) {
      return this.productService.getProductById(id);
    } else {
      return this.productService.getAllProducts(limit, offset);
    }
  }

  @Get('related')
  async getRelatedProducts(
    @Query('categoryId') categoryId: number,
    @Query('excludeId') excludeId: number,
  ): Promise<any> {
    return this.productService.getRelatedProducts(categoryId, excludeId);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ProductDto,
  ): Promise<any> {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.productService.delete(id);
  }
}
