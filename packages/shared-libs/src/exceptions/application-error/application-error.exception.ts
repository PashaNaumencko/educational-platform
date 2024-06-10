type Constructor = {
  cause?: unknown;
  message: string;
};

abstract class ApplicationError extends Error {
  abstract code: string | number;

  public constructor({ cause, message }: Constructor) {
    super(message, {
      cause,
    });
  }
}

export { ApplicationError };
