import { Body, Controller, Get, Post } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { CreatePatternDto } from './dto/create-pattern.dto';

@Controller('patterns')
export class PatternsController {
  constructor(private readonly patternsService: PatternsService) {}

  @Get()
  findAll() {
    return this.patternsService.findAll();
  }

  @Post()
  create(@Body() createPatternDto: CreatePatternDto) {
    return this.patternsService.create(createPatternDto);
  }
}
