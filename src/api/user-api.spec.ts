import {SakuraApi}  from '@sakuraapi/core';
import * as request from 'supertest';
import {
  testSapi,
  testUrl
}                   from '../../spec/helpers/sakura-api';
import {User}       from '../models/user';
import {UserApi}    from './user-api';

describe('UserApi tests', () => {
  let sapi: SakuraApi;

  beforeEach(async (done) => {
    try {

      sapi = testSapi({
        models: [User],
        routables: [UserApi]
      });

      await sapi.listen({bootMessage: ''});

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  afterEach(async (done) => {
    try {
      await User.removeAll({});
      await sapi.close();
      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('UserApi', async (done) => {

    try {

      const user = User.fromJson({firstName: 'John', lastName: 'Adams'});
      await user.create();

      const result = await request(sapi.app)
        .get(testUrl('/user', sapi))
        .expect(200);

      console.log(`------------------------`.america);
      console.log(result.body);

      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
