export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE,
    message: message
  };
}
