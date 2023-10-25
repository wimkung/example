import { Module } from '@nestjs/common';
import { env } from 'node:process'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {TerminusModule} from '@nestjs/terminus';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: env.MONGO_URI ?? 'mongodb://mongo/example',
          authSource: 'admin'
        }
      }
    }),
    TerminusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
