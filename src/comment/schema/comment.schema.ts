import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop()
  userName: string;

  @Prop()
  comment: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  dislikes: number;

  @Prop({ default: false })
  reported: boolean;

  @Prop({ type: 'ObjectId', ref: 'Alien' })
  alienId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
