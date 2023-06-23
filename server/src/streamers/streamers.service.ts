import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Streamer, StreamerDocument } from './entities/streamer.entity';
import { StreamerDto } from './dto/streamer.dto';

@Injectable()
export class StreamersService {
  constructor(
    @InjectModel(Streamer.name) private streamerModel: Model<StreamerDocument>,
  ) {}

  async getAllStreamers(): Promise<Streamer[]> {
    return this.streamerModel.find().exec();
  }

  async addStreamer(streamerDto: StreamerDto): Promise<Streamer> {
    const newStreamer = new this.streamerModel(streamerDto);
    return newStreamer.save();
  }

  async getStreamerById(id: string): Promise<Streamer> {
    return this.streamerModel.findById(id).exec();
  }

  async upvoteStreamer(id: string): Promise<Streamer> {
    return this.updateVotes(id, { $inc: { upvotes: 1 } });
  }

  async downvoteStreamer(id: string): Promise<Streamer> {
    return this.updateVotes(id, { $inc: { downvotes: 1 } });
  }

  private async updateVotes(id: string, update: any): Promise<Streamer> {
    return this.streamerModel
      .findByIdAndUpdate(id, update, { new: true })
      .exec();
  }
}
