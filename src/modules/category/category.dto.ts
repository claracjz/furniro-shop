import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsUrl()
  image_link?: string;

  @IsOptional()
  created_date?: Date;

  @IsOptional()
  updated_date?: Date;
}
