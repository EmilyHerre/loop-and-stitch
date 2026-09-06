import {
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';

export class CreatePatternRoundDto {
  @IsInt()
  @Min(1)
  roundNumber: number;

  @IsString()
  @IsNotEmpty()
  instructions: string;

  @IsInt()
  @Min(0)
  displayOrder: number;
}