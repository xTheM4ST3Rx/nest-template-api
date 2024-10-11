import { NotImplementedException } from '@nestjs/common';

// export interface EmailProvider {
//   send(to: string, subject: string, content: string): Promise<void>;
// }

export class EmailProvider {
  send(to: string, subject: string, content: string) {
    console.log(to, subject, content);
    throw new NotImplementedException('Method not implemented.');
  }
}
