import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AlienModule } from './alien/alien.module';
import { OmnitrixModule } from './omnitrix/omnitrix.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gao_proyect:CPvKiJoHrY0Z3mq2@cluster0.vhmwrs9.mongodb.net/gao_database',
    ),
    UserModule,
    AlienModule,
    OmnitrixModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
