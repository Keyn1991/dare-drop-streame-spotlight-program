import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamersController } from './streamers.controller';
import { StreamersService } from './streamers.service';
import { Streamer, StreamerSchema } from './entities/streamer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Streamer.name, schema: StreamerSchema },
    ]),
  ],
  controllers: [StreamersController],
  providers: [StreamersService],
})
export class StreamersModule {}
