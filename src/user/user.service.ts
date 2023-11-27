import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(signupDto: SignupDto): Promise<User> {
    try {
      const existingUser = await this.userModel
        .findOne({ email: signupDto.email })
        .exec();

      if (existingUser) {
        throw new Error('El correo electrónico ya está registrado.');
      }

      const hashedPassword = await bcrypt.hash(signupDto.password, 10);

      const newUser = new this.userModel({
        name: signupDto.name,
        email: signupDto.email,
        password: hashedPassword,
        isAdmin: false,
      });

      return newUser.save();
    } catch (error) {
      throw new Error('Hubo un error mientras se creaba el usuario.');
    }
  }

  async loginUser(loginDto: LoginDto): Promise<User | null> {
    const user = await this.userModel.findOne({ email: loginDto.email }).exec();

    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      return { userId: user.id, isAdmin: user.isAdmin } as unknown as User;
    }

    return null;
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }
}
