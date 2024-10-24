import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    const categoryExists = await this.prisma.category.findFirst({
      where: {
        name: data.name,
      },
    });

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    const category = await this.prisma.category.create({ data });
    return category;
  }

  async getAllCategories() {
    return this.prisma.category.findMany();
  }

  async update(id: number, data: CreateCategoryDto) {
    const categoryExists = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!categoryExists) {
      throw new Error('Category not found');
    }

    return await this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    const categoryExists = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!categoryExists) {
      throw new Error('Category not found');
    }

    return await this.prisma.category.delete({
      where: { id },
    });
  }
}
