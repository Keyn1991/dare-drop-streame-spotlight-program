import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

import { StreamersService } from './streamers.service';
import { StreamerDto } from './dto/streamer.dto';


@Controller('streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @Get()
  getAllStreamers() {
    return this.streamersService.getAllStreamers();
  }

  @Post()
  addStreamer(@Body() streamerDto: StreamerDto) {
    return this.streamersService.addStreamer(streamerDto);
  }

  @Get(':id')
  getStreamerById(@Param('id') id: string) {
    return this.streamersService.getStreamerById(id);
  }

  @Put(':id/upvote')
  upvoteStreamer(@Param('id') id: string) {
    return this.streamersService.upvoteStreamer(id);
  }

  @Put(':id/downvote')
  downvoteStreamer(@Param('id') id: string) {
    return this.streamersService.downvoteStreamer(id);
  }
}
