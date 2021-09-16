const strings = require('../config/strings');

class CustomError extends Error {
  constructor({ message, code, details, error, data }) {
    super(message);
    this.code = code || 500;
    this.details = details;
    this.data = data || null;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

class AppError extends CustomError {
  /**
   * Create a new validation error. Internal Code: 4000
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {String=} args.message - The error message
   * @param {[String]=} args.details - Error details
   */
  constructor(args) {
    super({
      message: args?.message ?? 'App Error',
      code: 500,
      error: args.error,
      data: args.data,
      details: args.details || [],
    });
  }
}

class ValidationError extends CustomError {
  /**
   * Create a new validation error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.validationError,
      code: 400,
      error: args.error,
      data: args.data,
      details: args.details || [],
    });
  }
}

class NotFoundError extends CustomError {
  /**
   * Create a new not found error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.resourceNotFound,
      code: 404,
      error: args.error,
      data: args.data,
      details: args.details || [],
    });
  }
}

class ForbiddenError extends CustomError {
  /**
   * Create a new forbidden error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.forbidden,
      code: 403,
      error: args.error,
      data: args.data,
      details: args.details,
    });
  }
}

class NotAuthenticatedError extends CustomError {
  /**
   * Create a new forbidden error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.userNotAuthenticated,
      code: 401,
      error: args.error,
      data: args.data,
      details: args.details,
    });
  }
}

class NotImplementedError extends CustomError {
  /**
   * Create a new not implemented error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.notImplemented,
      code: 501,
      error: args.error,
      data: args.data,
      details: args.details,
    });
  }
}

class ConflictError extends CustomError {
  /**
   * Create a new confict error.
   * @param {Object} args - The args object
   * @param {any} args.error - The error
   * @param {any} args.data - The data
   * @param {string[]} args.details - Error details
   * @param {number} args.code - The error code
   * @param {string=} args.message - The error message
   */
  constructor(args) {
    super({
      message: args?.message ?? strings.resourceConflict,
      code: 409,
      error: args.error,
      data: args.data,
      details: args.details,
    });
  }
}

module.exports = {
  CustomError,
  AppError,
  ValidationError,
  NotFoundError,
  ForbiddenError,
  NotAuthenticatedError,
  NotImplementedError,
  ConflictError,
};
