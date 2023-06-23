import { IsNotEmpty } from 'class-validator';

export class StreamerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  platform: string;

  @IsNotEmpty()
  description: string;
}
