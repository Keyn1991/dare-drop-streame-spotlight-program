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

  async getAllStreamers(page: number, limit: number): Promise<Streamer[]> {
    const skip = (page - 1) * limit;
    return await this.streamerModel.find().skip(skip).limit(limit).exec();
  }

  async addStreamer(streamerDto: StreamerDto): Promise<Streamer> {
    const newStreamer = new this.streamerModel(streamerDto);
    return await newStreamer.save();
  }

  async getStreamerById(id: string): Promise<Streamer> {
    return await this.streamerModel.findById(id).exec();
  }

  async upvoteStreamer(id: string): Promise<Streamer> {
    return await this.updateVotes(id, { $inc: { upvotes: 1 } });
  }

  async downvoteStreamer(id: string): Promise<Streamer> {
    return await this.updateVotes(id, { $inc: { downvotes: 1 } });
  }

  private async updateVotes(id: string, update: any): Promise<Streamer> {
    return await this.streamerModel
      .findByIdAndUpdate(id, update, { new: true })
      .exec();
  }
}
