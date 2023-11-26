import { PartialType } from '@nestjs/mapped-types';
import { CreateOmnitrixDto } from './create-omnitrix.dto';

export class UpdateOmnitrixDto extends PartialType(CreateOmnitrixDto) {}
