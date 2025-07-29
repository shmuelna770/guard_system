import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { error } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
 
  @Post('login')
  async login(@Body()Body:any){
    const result =await this.authService.login(Body.username,Body.password)
    return result
  }
} 
