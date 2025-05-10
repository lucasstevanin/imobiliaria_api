import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
// import { Property } from './property/entities/property.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'imobiliaria.sqlite',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    PropertyModule,
  ],
})
export class AppModule {}
