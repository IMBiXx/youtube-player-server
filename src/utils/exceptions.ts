import { ApiException } from '~~/types/exceptions';

/**
 * Generic class to create HTTP errors (here 400 and 404)
 *
 * We specify that our class should correspond to the `ApiException` interface
 *
 * The `readonly` keywords are a shortcut for `this.property = value`,
 * they also prevent us from modifying these values later.
 *
 * Here `this.error = error` and `this.status = status`
 */
class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

/**
 * 404 creation
 */
export class NotFoundException extends Exception {
  /**
   * Call the `constructor` of the parent class `Exception`
   */
  constructor(error: any) {
    super(error, 404);
  }
}

/**
 * 400 creation
 */
export class BadRequestException extends Exception {
  /**
   * Call the `constructor` of the parent class `Exception`
   */
  constructor(error: any) {
    super(error, 400);
  }
}
