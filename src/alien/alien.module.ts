import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlienController } from './alien.controller';
import { AlienService } from './alien.service';
import { AlienSchema } from './schema/alien.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Alien', schema: AlienSchema }]),
  ],
  controllers: [AlienController],
  providers: [AlienService],
})
export class AlienModule {}
