import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
  IsArray,
} from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  largeDescription: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  discountPrice?: number;

  @IsOptional()
  @IsNumber()
  discountPercent?: number;

  @IsNotEmpty()
  isNew: boolean;

  @IsNotEmpty()
  @IsUrl()
  imageLink: string;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  otherImagesLink?: string[];

  @IsNotEmpty()
  createdDate: Date;

  @IsNotEmpty()
  updatedDate: Date;
}
