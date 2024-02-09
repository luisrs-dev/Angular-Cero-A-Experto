import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, CreateUserDto, UpdateAuthDto, RegisterUserDto } from './dto';
import { LoginResponse } from './interfaces/login-response';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log({createUserDto});
    
    return this.authService.create(createUserDto);
  }

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto): Promise<LoginResponse>{
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto);
  }


  @UseGuards( AuthGuard)
  @Get()
  findAll( @Request() req: Request ) {
    console.log(req);
    
    return this.authService.findAll();
  }

  @Get(':id')
  findUserById( id: string) {
    return this.authService.findUserById(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
