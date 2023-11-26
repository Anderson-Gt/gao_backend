import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OmnitrixService } from './omnitrix.service';
import { CreateOmnitrixDto } from './dto/create-omnitrix.dto';
import { UpdateOmnitrixDto } from './dto/update-omnitrix.dto';

@Controller('omnitrix')
export class OmnitrixController {
  constructor(private readonly omnitrixService: OmnitrixService) {}

  @Post()
  create(@Body() createOmnitrixDto: CreateOmnitrixDto) {
    return this.omnitrixService.create(createOmnitrixDto);
  }

  @Get()
  findAll() {
    return this.omnitrixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.omnitrixService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOmnitrixDto: UpdateOmnitrixDto,
  ) {
    return this.omnitrixService.update(+id, updateOmnitrixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.omnitrixService.remove(+id);
  }
}
