export const requestErrorMiddleware = store => next => action => {
    const result = next(action);
    return result;
};
