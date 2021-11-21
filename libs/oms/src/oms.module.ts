import { Module } from '@nestjs/common';
import { OmsService } from './oms.service';

@Module({
  providers: [OmsService],
  exports: [OmsService],
})
export class OmsModule {}
