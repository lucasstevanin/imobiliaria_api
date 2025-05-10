import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('Properties')
@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Get()
  @ApiQuery({ name: 'min', required: false, type: Number })
  @ApiQuery({ name: 'max', required: false, type: Number })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: ['HOME', 'APARTMENT', 'KITNET'],
  })
  findAll(
    @Query('min') min?: number,
    @Query('max') max?: number,
    @Query('type') type?: string,
  ) {
    return this.propertyService.findAll(min, max, type);
  }
}
