import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { sendVerificationCode } from './emailService/email.service';
import { generateVerificationCode } from './emailService/verificationCode';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  create(@Body() signupDto: SignupDto) {
    return this.userService.create(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.loginUser(loginDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Post('recovery')
  async recovery(@Body('email') email: string) {
    const verificationCode = generateVerificationCode(6);

    try {
      await sendVerificationCode(email, verificationCode);
      return {
        success: true,
        message:
          'Se ha enviado un código de verificación al correo electrónico.',
      };
    } catch (error) {
      return {
        success: false,
        error: 'No se pudo enviar el código de verificación.',
      };
    }
  }
}
