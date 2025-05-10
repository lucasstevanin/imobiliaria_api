import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { PropertyType } from '../entities/property.entity';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsEnum(PropertyType)
  type: PropertyType;
}
