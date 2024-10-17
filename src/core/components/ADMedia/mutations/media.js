import { actions } from "ADMedia/reducer";

export const selectImage = ({ store, targets = [], value }) => {
  return store.mutate({
    type: actions.SELECT_IMAGE,
    targets,
    payload: { value },
  });
};

export const selectSize = ({ store, targets = [], value }) => {
  return store.mutate({
    type: actions.SELECT_SIZE,
    targets,
    payload: { value },
  });
};

export const setPaused = ({ store, targets = [], value }) => {  
  return store.mutate({
    type: actions.SET_PAUSED,
    targets,
    payload: { value },
  });
};


