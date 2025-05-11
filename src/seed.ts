import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PropertyService } from './property/property.service';
import { CreatePropertyDto } from './property/dto/create-property.dto';
import { PropertyType } from './property/entities/property.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const service = app.get(PropertyService);

  const existing = await service.findAll();
  if (existing.length > 0) {
    console.log('Seed ignorado: já existem imóveis no banco.');
    await app.close();
    return;
  }

  const properties: CreatePropertyDto[] = [
    {
      title: 'Casa de campo',
      description: 'Aconchegante, 3 quartos, lareira e varanda.',
      address: 'Estrada do Sol, 45 - Interior, MG',
      price: 250000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento cobertura',
      description: 'Cobertura com piscina e churrasqueira.',
      address: 'Av. Paulista, 1500 - São Paulo, SP',
      price: 950000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet mobiliada',
      description: 'Compacta e pronta para morar.',
      address: 'Rua Estudantes, 234 - Campinas, SP',
      price: 130000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa com quintal',
      description: 'Quintal amplo, perfeita para famílias.',
      address: 'Rua das Laranjeiras, 88 - Ribeirão Preto, SP',
      price: 370000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento central',
      description: 'Perto de tudo, com 2 vagas.',
      address: 'Centro, 101 - Belo Horizonte, MG',
      price: 420000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet simples',
      description: 'Ideal para estudantes.',
      address: 'Rua 7 de Setembro, 12 - Marília, SP',
      price: 95000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa com piscina',
      description: 'Espaçosa e ensolarada.',
      address: 'Rua do Lago, 50 - Araraquara, SP',
      price: 600000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento compacto',
      description: '1 quarto e ótima localização.',
      address: 'Rua dos Pinheiros, 234 - São Paulo, SP',
      price: 280000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet moderna',
      description: 'Nova e bem equipada.',
      address: 'Av. Brasil, 70 - Bauru, SP',
      price: 110000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa no litoral',
      description: 'Vista para o mar, 2 suítes.',
      address: 'Av. Beira Mar, 300 - Ubatuba, SP',
      price: 720000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento 3 quartos',
      description: 'Com suíte e varanda gourmet.',
      address: 'Rua do Comércio, 444 - Sorocaba, SP',
      price: 500000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet estudantil',
      description: 'Perto da universidade.',
      address: 'Rua dos Acadêmicos, 23 - Londrina, PR',
      price: 100000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa geminada',
      description: '2 quartos e garagem.',
      address: 'Rua Nova, 99 - Limeira, SP',
      price: 230000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento luxo',
      description: 'Alto padrão com academia.',
      address: 'Av. Atlântica, 880 - Balneário Camboriú, SC',
      price: 1200000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet de investimento',
      description: 'Ideal para aluguel.',
      address: 'Rua Paralela, 321 - São José dos Campos, SP',
      price: 89000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa térrea',
      description: 'Planta acessível e confortável.',
      address: 'Rua das Acácias, 17 - Franca, SP',
      price: 270000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento novo',
      description: 'Lançamento com elevador.',
      address: 'Av. Dom Pedro, 500 - Campinas, SP',
      price: 390000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet funcional',
      description: 'Boa iluminação e espaço otimizado.',
      address: 'Rua Curta, 20 - Araras, SP',
      price: 105000,
      type: PropertyType.KITNET,
    },
    {
      title: 'Casa duplex',
      description: 'Com suíte master e varanda.',
      address: 'Rua 10, 456 - São Carlos, SP',
      price: 580000,
      type: PropertyType.HOME,
    },
    {
      title: 'Apartamento mobiliado',
      description: 'Pronto para morar.',
      address: 'Av. Independência, 777 - Piracicaba, SP',
      price: 440000,
      type: PropertyType.APARTMENT,
    },
    {
      title: 'Kitnet compacta',
      description: 'Perfeita para solteiros.',
      address: 'Rua da Liberdade, 19 - Santos, SP',
      price: 97000,
      type: PropertyType.KITNET,
    },
  ];

  for (const property of properties) {
    await service.create(property);
  }

  console.log(`${properties.length} imóveis cadastrados com sucesso!`);
  await app.close();
}
bootstrap().catch((err) => {
  console.error('Erro ao executar seed:', err);
  process.exit(1);
});
