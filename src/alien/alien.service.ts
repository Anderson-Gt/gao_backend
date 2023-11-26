import { Injectable } from '@nestjs/common';
import { CreateAlienDto } from './dto/create-alien.dto';
import { UpdateAlienDto } from './dto/update-alien.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alien } from './schema/alien.schema';

@Injectable()
export class AlienService {
  constructor(
    @InjectModel('Alien') private readonly alienModel: Model<Alien>,
  ) {}

  async create(createAlienDto: CreateAlienDto): Promise<Alien> {
    createAlienDto.favorite = false;
    createAlienDto.use = 0;
    const newAlien = new this.alienModel(createAlienDto);
    return await newAlien.save();
  }

  async findAll(): Promise<Alien[]> {
    return await this.alienModel.find().exec();
  }

  async findOne(id: string): Promise<Alien> {
    return await this.alienModel.findById(id).exec();
  }

  async update(id: string, updateAlienDto: UpdateAlienDto): Promise<Alien> {
    return await this.alienModel.findByIdAndUpdate(id, updateAlienDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<Alien> {
    return await this.alienModel.findByIdAndRemove(id);
  }
}
