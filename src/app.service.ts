import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAPIVersion(): string {
    return 'Book Lending API Version v0.0.1';
  }
}
