import { Controller, Get, Post, Body, Param, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StreamersService } from './streamers.service';
import { StreamerDto } from './dto/streamer.dto';

@ApiTags('streamers')
@Controller('streamers')
export class StreamersController {
  constructor(private readonly streamersService: StreamersService) {}

  @ApiOperation({ summary: 'Get all streamers' })
  @ApiResponse({ status: 200, description: 'Returns all streamers' })
  @Get()
  async getAllStreamers(@Query('page') page = 1, @Query('limit') limit = 20) {
    return await this.streamersService.getAllStreamers(page, limit);
  }

  @ApiOperation({ summary: 'Add a new streamer' })
  @ApiResponse({ status: 201, description: 'Streamer created successfully' })
  @Post()
  async addStreamer(@Body() streamerDto: StreamerDto) {
    return await this.streamersService.addStreamer(streamerDto);
  }

  @ApiOperation({ summary: 'Get a streamer by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the streamer with the specified ID',
  })
  @Get(':id')
  async getStreamerById(@Param('id') id: string) {
    return await this.streamersService.getStreamerById(id);
  }

  @ApiOperation({ summary: 'Upvote a streamer' })
  @ApiResponse({
    status: 200,
    description: 'Upvoted the streamer successfully',
  })
  @Put(':id/upvote')
  async upvoteStreamer(@Param('id') id: string) {
    return await this.streamersService.upvoteStreamer(id);
  }

  @ApiOperation({ summary: 'Downvote a streamer' })
  @ApiResponse({
    status: 200,
    description: 'Downvoted the streamer successfully',
  })
  @Put(':id/downvote')
  async downvoteStreamer(@Param('id') id: string) {
    return await this.streamersService.downvoteStreamer(id);
  }
}
