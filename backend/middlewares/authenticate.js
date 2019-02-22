import jwt from 'jsonwebtoken';

import { handleErrors } from './handleErrors';

// make request.currentUser available
// request.currentUser.oauthId,
// request.currentUser.oauthProvider
const authenticateMiddleware = (request, response, next) => {
  if (request.headers['authorization']) {
    const token = request.headers['authorization'].split('Bearer ')[1];
    jwt.verify(token, process.env['JWT_SECRET'], (error, user) => {
      if (error) {
        handleErrors(error, request, response);
      } else {
        request.currentUser = user;
        next();
      }
    });
  } else {
    handleErrors(new Error("No authorization header provided"), request, response);
  }
};

const optionalAuthenticateMiddleware = (request, response, next) => {
  if (request.headers['authorization']) {
    const token = request.headers['authorization'].split('Bearer ')[1];
    jwt.verify(token, process.env['JWT_SECRET'], (error, user) => {
      if (!error) request.currentUser = user;
      next();
    });
  } else {
    next();
  }
};

export { authenticateMiddleware, optionalAuthenticateMiddleware };
export default authenticateMiddleware;
