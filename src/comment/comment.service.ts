import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schema/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async addComment(
    alienId: string,
    commentDto: { userId: string; comment: string },
  ) {
    const comment = new this.commentModel({
      userId: commentDto.userId,
      comment: commentDto.comment,
      alienId,
    });
    const savedComment = await comment.save();
    return savedComment;
  }

  async commentReaction(
    commentsId: string,
    reactionDto: { type: 'like' | 'dislike' | 'report' },
  ) {
    const update: any = {};
    if (reactionDto.type === 'like') {
      update.$inc = { likes: 1 };
    } else if (reactionDto.type === 'dislike') {
      update.$inc = { dislikes: 1 };
    } else if (reactionDto.type === 'report') {
      update.reported = true;
    }

    const updatedComment = await this.commentModel.findByIdAndUpdate(
      commentsId,
      update,
      { new: true },
    );
    return updatedComment;
  }

  async getCommentsByAlienId(alienId: string) {
    const comments = await this.commentModel.find({ alienId }).exec();
    return comments;
  }
}
