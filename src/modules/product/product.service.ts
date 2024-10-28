import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { PrismaService } from 'src/database/PrismaService';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProductsByCategory(categoryId: number, limit?: number) {
    return await this.prisma.product.findMany({
      where: {
        categoryId,
      },
      take: limit,
    });
  }

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

  async getAllProducts(
    limit = 16,
    offset = 0,
    filters?: string[] | undefined,
    sortOrder: 'price-low-high' | 'price-high-low' | 'Default' = 'Default',
  ): Promise<any> {
    const where: any = {};
    if (filters?.includes('discounted')) {
      where.discountPrice = { not: null };
    }

    let orderBy: { price?: 'asc' | 'desc' } | undefined;
    if (sortOrder === 'price-low-high') {
      orderBy = { price: 'asc' };
    } else if (sortOrder === 'price-high-low') {
      orderBy = { price: 'desc' };
    } else if (sortOrder === 'Default') {
      orderBy = undefined;
    }
    return this.prisma.product.findMany({
      skip: offset,
      take: limit,
      where: where,
      orderBy: orderBy,
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

  async getRelatedProducts(
    categoryId: number,
    excludeId: number,
  ): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        categoryId,
        id: { not: excludeId },
      },
      take: 4,
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
