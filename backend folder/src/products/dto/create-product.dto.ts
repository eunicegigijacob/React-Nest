import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  imageLink: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
