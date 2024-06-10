import { HTTPCode } from '../../enums/enums';
import { ValueOf } from '../../types/types';
import { ApplicationError } from '../exceptions';

type Constructor = {
  cause?: unknown;
  message: string;
  status: ValueOf<typeof HTTPCode>;
};

class HTTPError extends ApplicationError {
  readonly code: ValueOf<typeof HTTPCode>;

  public constructor({ cause, message, status }: Constructor) {
    super({
      cause,
      message,
    });

    this.code = status;
  }
}

export { HTTPError };
