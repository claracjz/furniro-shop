import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDto) {
    const productExists = await this.prisma.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (productExists) {
      throw new Error('Product already exists');
    }
    const product = await this.prisma.product.create({
      data,
    });

    return product;
  }

  async getAllProducts(limit = 16, offset = 0) {
    return this.prisma.product.findMany({
      skip: offset,
      take: limit,
      include: {
        category: true,
      },
    });
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  async update(id: number, data: ProductDto) {
    const productExists = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!productExists) {
      throw new Error('Product not found');
    }

    return await this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    const productExists = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!productExists) {
      throw new Error('Product not found');
    }

    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
