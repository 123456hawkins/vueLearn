import { Dictionaries } from "../enum"

// expire过期时间key pernabent永不过期
export type Key = string
export type Expire = Dictionaries.permanent | number
export interface Data<T> {
  value: T,
  [Dictionaries.expire]: Expire
}
export interface Result<T> {
  message: string
  value: T | null
}
export interface StorageCLS {
  get<T>(key: Key): Result<T | null>;
  set<T>(key: Key, value: T, expire: Expire): void;
  remove(key: Key): void;
  clear(): void;
}