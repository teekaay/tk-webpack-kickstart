export const INIT_APP = 'INIT_APP';

export function initApp(data = {}) {
  return {
    type: INIT_APP,
    payload: data
  };
}
