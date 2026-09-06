import { Injectable, NotFoundException } from '@nestjs/common';
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
      include: {
        sections: {
          orderBy: {
            displayOrder: 'asc',
          },
          include: {
            rounds: {
              orderBy: {
                displayOrder: 'asc',
              },
            },
          },
        },
        materials: {
          include: {
            material: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const pattern = await this.prisma.pattern.findUnique({
      where: {
        id,
      },
      include: {
        sections: {
          orderBy: {
            displayOrder: 'asc',
          },
          include: {
            rounds: {
              orderBy: {
                displayOrder: 'asc',
              },
            },
          },
        },
        materials: {
          include: {
            material: true,
          },
        },
      },
    });
    if (!pattern) {
      throw new NotFoundException(`Pattern with id ${id} not found`);
    }
    return pattern;
  }

  async create(createPatternDto: CreatePatternDto) {
    const { sections, materials, ...patternData } = createPatternDto;

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
        materials: {
          create: (materials ?? []).map((material) => ({
            color: material.color,
            quantity: material.quantity,
            material: {
              connect: { id: material.materialId },
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
        materials: {
          include: {
            material: true,
          },
        },
      },
    });
  }
}
