import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private authService: AuthService
    ) {}

  async canActivate(context: ExecutionContext, ): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    console.log({request});

    const token = this.extractTokenFromHeader(request);
    console.log({token});
    
    if (!token) {
      throw new UnauthorizedException('No bearer token');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token,
        {
          secret: process.env.JWT_SEED
        }
      );

      const user = await this.authService.findUserById( +payload.id);
      console.log({user});
      
      if(!user){
        throw new UnauthorizedException('User does not exist');  
      }

      console.log({payload});
      request['user'] = payload.id;
    } catch(error) {

      throw new UnauthorizedException();
    }
    
    return Promise.resolve(true);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // Original desde documentación
    // const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
