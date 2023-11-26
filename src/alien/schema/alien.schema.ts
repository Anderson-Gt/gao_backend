import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Alien {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  strengths: string;

  @Prop()
  weakness: string;

  @Prop()
  favorite: boolean;

  @Prop()
  comments: string;

  @Prop()
  use: number;
}

export const AlienSchema = SchemaFactory.createForClass(Alien);
