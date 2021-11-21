import { Injectable } from "@nestjs/common";

@Injectable()
export class OmsService {
  getOrder(): {
    id: number;
  } {
    return {
      id: 1,
    };
  }
}
