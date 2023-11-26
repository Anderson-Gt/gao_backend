import { PartialType } from '@nestjs/mapped-types';
import { CreateAlienDto } from './create-alien.dto';

export class UpdateAlienDto extends PartialType(CreateAlienDto) {}
