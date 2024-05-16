import * as products from './products';
export default function(state, action) {
  return {
    ...products(state, action)
  }

}
