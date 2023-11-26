import { Injectable } from '@nestjs/common';
import { CreateOmnitrixDto } from './dto/create-omnitrix.dto';
import { UpdateOmnitrixDto } from './dto/update-omnitrix.dto';

@Injectable()
export class OmnitrixService {
  create(createOmnitrixDto: CreateOmnitrixDto) {
    return 'This action adds a new omnitrix';
  }

  findAll() {
    return `This action returns all omnitrix`;
  }

  findOne(id: number) {
    return `This action returns a #${id} omnitrix`;
  }

  update(id: number, updateOmnitrixDto: UpdateOmnitrixDto) {
    return `This action updates a #${id} omnitrix`;
  }

  remove(id: number) {
    return `This action removes a #${id} omnitrix`;
  }
}
