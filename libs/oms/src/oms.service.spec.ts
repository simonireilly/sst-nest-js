import { Test, TestingModule } from '@nestjs/testing';
import { OmsService } from './oms.service';

describe('OmsService', () => {
  let service: OmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmsService],
    }).compile();

    service = module.get<OmsService>(OmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
