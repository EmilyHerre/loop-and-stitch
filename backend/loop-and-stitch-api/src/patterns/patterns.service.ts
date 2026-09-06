import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatternDto } from './dto/create-pattern.dto';

@Injectable()
export class PatternsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pattern.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(createPatternDto: CreatePatternDto) {
    const { sections, ...patternData } = createPatternDto;

    return this.prisma.pattern.create({
      data: {
        ...patternData,

        sections: {
          create: sections.map((section) => ({
            name: section.name,
            displayOrder: section.displayOrder,

            rounds: {
              create: section.rounds,
            },
          })),
        },
      },
      include: {
        sections: {
          include: {
            rounds: true,
          },
        },
      },
    });
  }
}
