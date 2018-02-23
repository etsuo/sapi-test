import {
  Db,
  IDbGetParams,
  IFromDbOptions,
  Json,
  Model,
  SakuraApi,
  SapiModelMixin
}            from '@sakuraapi/core';
import {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  Db as MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult
}            from 'mongodb';
import {dbs} from '../config/bootstrap/db';

export {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult,
  IDbGetParams,
  IFromDbOptions,
  SakuraApi
};

@Model({
  dbConfig: dbs.user
})
export class User extends SapiModelMixin() {

  @Db() @Json()
  firstName: string;

  @Db() @Json()
  lastName: string;
}
