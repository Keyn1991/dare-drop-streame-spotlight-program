import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

@Schema()
export class Streamer {
  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNotEmpty()
  platform: string;

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
