import { User } from './user.entity';

describe('User.Entity', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
