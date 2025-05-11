import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString, Length, Min } from 'class-validator';
import { PropertyType } from '../entities/property.entity';

export class CreatePropertyDto {
  @ApiProperty({ example: 'Casa térrea com quintal' })
  @IsString()
  @Length(1) // substitui IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Imóvel bem localizado com 2 quartos e garagem.' })
  @IsString()
  @Length(1)
  description: string;

  @ApiProperty({ example: 'Rua das Laranjeiras, 88 - Ribeirão Preto, SP' })
  @IsString()
  @Length(1)
  address: string;

  @ApiProperty({ example: 350000 })
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty({ example: 'HOME', enum: PropertyType })
  @IsEnum(PropertyType)
  type: PropertyType;
}
