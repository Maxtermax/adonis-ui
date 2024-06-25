export default function steps(state, action) {
  const actions = {
  };
  return actions[action.type]?.();
}
