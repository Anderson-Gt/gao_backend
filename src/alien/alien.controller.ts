import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlienService } from './alien.service';
import { CreateAlienDto } from './dto/create-alien.dto';
import { UpdateAlienDto } from './dto/update-alien.dto';
import { Alien } from './schema/alien.schema';

@Controller('alien')
export class AlienController {
  constructor(private readonly alienService: AlienService) {}

  @Post()
  async create(@Body() alien: CreateAlienDto): Promise<Alien> {
    return await this.alienService.create(alien);
  }

  @Get()
  async findAll() {
    return await this.alienService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Alien> {
    return await this.alienService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() alien: UpdateAlienDto,
  ): Promise<Alien> {
    return await this.alienService.update(id, alien);
  }

  @Put('transformation/:id')
  async transformation(@Param('id') id: string) {
    return await this.alienService.transformation(id);
  }

  @Put('favorite/:id')
  async favorite(
    @Param('id') id: string,
    @Body('isFavorite') isFavorite: boolean,
  ) {
    return await this.alienService.favorite(id, isFavorite);
  }

  @Get('favorites')
  async getFavorites() {
    return await this.alienService.getFavorites();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Alien> {
    return await this.alienService.delete(id);
  }
}
