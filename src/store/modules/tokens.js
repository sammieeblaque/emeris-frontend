import { tokens } from "../../data/tokens.json";
export default {
  state: {
    tokens: tokens,
  },
  actions: {},
  getters: {
    tokens: (state) => state.tokens,
  },
};
