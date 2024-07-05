export default function notification(state, action) {
  const actions = {};
  return actions[action.type]?.();
} 
