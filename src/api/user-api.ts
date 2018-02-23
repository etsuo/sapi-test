import {
  Routable,
  SakuraApi,
  SapiRoutableMixin
}             from '@sakuraapi/core';
import {
  NextFunction,
  Request,
  Response
}             from 'express';
import {User} from '../models/user';

export {
  NextFunction,
  Request,
  Response,
  SakuraApi
};

@Routable({
  baseUrl: 'user',
  model: User
})
export class UserApi extends SapiRoutableMixin() {

}
