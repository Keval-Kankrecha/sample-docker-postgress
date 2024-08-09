import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCityDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
