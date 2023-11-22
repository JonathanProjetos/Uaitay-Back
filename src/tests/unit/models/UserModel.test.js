const { expect } = require('chai');
const { describe, it } = require('mocha');
const UserModel = require('../../../models/UserModel');

describe('Create UserModel with correct schema', () => {

  it('should create a new UserModel', () => {
    const user = new UserModel({
      email: 'test@test.com',
      password: '123456789',
    });

    expect(user.email).to.equal('test@test.com');
    expect(user.password).to.equal('123456789');
  });
});