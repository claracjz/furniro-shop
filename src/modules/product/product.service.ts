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

  async findAll() {
    const products = await this.prisma.product.findMany();
    return products;
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
