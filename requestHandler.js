export const requestHandler = store => next => action => {
    const result = next(action);
    return result;
}