import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('addComment/:alienId')
  async addComment(
    @Param('alienId') alienId: string,
    @Body() commentDto: { userId: string; comment: string },
  ) {
    return await this.commentService.addComment(alienId, commentDto);
  }

  @Post('commentReaction/:commentsId')
  async commentReaction(
    @Param('commentsId') commentsId: string,
    @Body() reactionDto: { type: 'like' | 'dislike' | 'report' },
  ) {
    return await this.commentService.commentReaction(commentsId, reactionDto);
  }

  @Get('getByAlienId/:alienId')
  async getCommentsByAlienId(@Param('alienId') alienId: string) {
    return await this.commentService.getCommentsByAlienId(alienId);
  }
}
