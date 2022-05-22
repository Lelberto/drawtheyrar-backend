import { User } from '../modules/users/user.entity';

/**
 * Constructor type
 */
export type Constructor<T> = { new(): T };

/**
 * Access token payload
 */
export type AccessTokenPayload = { sub: User['id'], email: User['email'] };
