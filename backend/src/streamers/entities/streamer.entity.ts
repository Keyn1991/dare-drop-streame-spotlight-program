import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Schema()
export class Streamer {
  @ApiProperty({ example: 'John Doe', description: 'The name of the streamer' })
  @Prop()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Twitch',
    description: 'The platform where the streamer streams',
  })
  @Prop()
  @IsNotEmpty()
  platform: string;

  @ApiProperty({
    example: 'I am a professional gamer',
    description: 'Description of the streamer',
  })
  @Prop()
  @IsNotEmpty()
  description: string;

  @Prop({ default: 0 })
  upvotes: number;

  @Prop({ default: 0 })
  downvotes: number;
}

export type StreamerDocument = Omit<Streamer, '_id'> & Document;
export const StreamerSchema = SchemaFactory.createForClass(Streamer).set(
  'toJSON',
  {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
);
