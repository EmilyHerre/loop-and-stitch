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
import { CreatePatternMaterialDto } from './create-pattern-material.dto';

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePatternMaterialDto)
  materials?: CreatePatternMaterialDto[];
}