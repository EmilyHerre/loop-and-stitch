import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CreatePatternSectionDto } from './create-pattern-section.dto';

export class CreatePatternDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  category: string;

  @IsString()
  difficulty: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  estimatedTime?: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePatternSectionDto)
  sections: CreatePatternSectionDto[];
}