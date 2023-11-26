import { Module } from '@nestjs/common';
import { OmnitrixService } from './omnitrix.service';
import { OmnitrixController } from './omnitrix.controller';

@Module({
  controllers: [OmnitrixController],
  providers: [OmnitrixService],
})
export class OmnitrixModule {}
