import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  create(data: CreatePropertyDto) {
    const property = this.propertyRepository.create(data);
    return this.propertyRepository.save(property);
  }

  findAll(min?: number, max?: number, type?: string) {
    const where: any = {};

    if (min !== undefined && max !== undefined) {
      where.price = Between(min, max);
    }

    if (type) {
      where.type = type;
    }

    return this.propertyRepository.find({ where });
  }
}
