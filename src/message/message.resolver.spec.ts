import { Test, TestingModule } from '@nestjs/testing';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';

describe('MessageResolver', () => {
  let resolver: MessageResolver;
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessageResolver,
        {
          provide: MessageService,
          useValue: {}, // You can provide a mock or a real instance here
        },
      ],
    }).compile();

    resolver = module.get<MessageResolver>(MessageResolver);
    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(service).toBeDefined();
  });
});
