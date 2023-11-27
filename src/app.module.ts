import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlienModule } from './alien/alien.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gao_proyect:CPvKiJoHrY0Z3mq2@cluster0.vhmwrs9.mongodb.net/gao_database',
    ),
    UserModule,
    AlienModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
