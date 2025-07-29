import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService ,private config:ConfigService) { }

    private users = [
        { username: 'shmuel', password: '1234', role: 'commander' },
        { username: 'yeuda', password: '7895', role: 'solidar' },
        { username: 'israel', password: 'abcd', role: 'commander' }
    ];
    async login(username: string, password: string) {
        const port = this.config.get('JWT_SECRET')
        console.log('port',port);
        
        const user = this.users.find(
            u => u.username === username && u.password === password)
        if (!user) return null
            console.log('user',user);
            
        const payload = { username: user.username, role: user.role }
        console.log('p',payload);
        
        const token = await this.jwtService.signAsync(payload)
        console.log('t',token);
        
        return { token, role: user.role };
    }
    
}

