import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UnauthorizedException } from '@nestjs/common';


import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';


import { LoginDto, RegisterUserDto, CreateUserDto, UpdateAuthDto} from './dto';


import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name) 
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {

    try {
      console.log({createUserDto});

      const { password, ...userData } = createUserDto;

      const newUser = new this.userModel({
        password: bcryptjs.hashSync( password, 10),
        ...userData
      });
      // const newUser = new this.userModel(createUserDto);
      await newUser.save(); 

      const { password:_, ...user} = newUser.toJSON();

      return user;

    } catch (error) {
      if(error.code === 11000){
        console.log(error.code);
        throw new BadRequestException(`${ createUserDto.email} already exists!`) 
      }
      throw new InternalServerErrorException('Something terrible happend')
      
    }

  }

  async register(registerDto: RegisterUserDto): Promise<LoginResponse>{

    const user = await this.create(registerDto);
    console.log({user});
    

    return {
      user: user,
      token: this.getJwtToken( {id: user._id})
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse>{

    const { email, password } = loginDto;
    const user = await this.userModel.findOne( {email} );
    console.log({loginDto});
    if(!user){
      throw new UnauthorizedException('Not valid credentials - email');
    }
    
    if( !bcryptjs.compareSync(password, user.password)){
      throw new UnauthorizedException('Not valid credentials - password');
    }

    const { password:_, ...rest} = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({id:user.id})
    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(id: number) {
    const user = await this.userModel.findById(id);

    const { password, ...rest } = user;
    return rest;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
