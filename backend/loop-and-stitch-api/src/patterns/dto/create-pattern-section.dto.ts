import {
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePatternRoundDto } from './create-pattern-round.dto';

export class CreatePatternSectionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  displayOrder: number;

  @ValidateNested({ each: true })
  @Type(() => CreatePatternRoundDto)
  rounds: CreatePatternRoundDto[];
}
