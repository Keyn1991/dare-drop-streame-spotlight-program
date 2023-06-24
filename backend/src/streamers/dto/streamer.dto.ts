import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StreamerDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the streamer' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Twitch',
    description: 'The platform where the streamer streams',
  })
  @IsNotEmpty()
  platform: string;

  @ApiProperty({
    example: 'I am a professional gamer',
    description: 'Description of the streamer',
  })
  @IsNotEmpty()
  description: string;
}
