import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreatePatternMaterialDto {
  @IsInt()
  materialId: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsNumber()
  @Min(0)
  quantity: number;
}