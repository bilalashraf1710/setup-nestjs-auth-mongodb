import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(email: string, password: string): Promise<User> {
    const user = new this.userModel({ email, password });
    return user.save();
  }
  
  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }


  async getUsers(){
    return this.userModel.find({})
  }
}
