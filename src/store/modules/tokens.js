import { tokens } from "../../data/tokens.json";
import { pools } from "../../data/pools.json";
export default {
  namespaced: true,
  state: {
    tokens: tokens,
    isOpen1: false,
    isOpen2: false,
    token1: "ETH",
    token2: "Select Asset",
    temp_token1: "",
    temp_token2: "",
    pools: pools,
  },
  actions: {
    toggleFromModal({ commit }) {
      commit("OPEN_MODAL1");
    },
    toggleToModal({ commit }) {
      commit("OPEN_MODAL2");
    },
    closeFromModal({ commit }) {
      commit("CLOSE_MODAL1");
    },
    closeToModal({ commit }) {
      commit("CLOSE_MODAL2");
    },
    updateToken1({ commit }, payload) {
      commit("UPDATE_TOKEN1", payload);
    },
    updateToken2({ commit }, payload) {
      commit("UPDATE_TOKEN2", payload);
    },
    swapTokens({ commit }) {
      commit("EXCHANGE_TOKEN");
    },
  },

  mutations: {
    OPEN_MODAL1: (state) => (state.isOpen1 = true),
    CLOSE_MODAL1: (state) => (state.isOpen1 = false),
    OPEN_MODAL2: (state) => (state.isOpen2 = true),
    CLOSE_MODAL2: (state) => (state.isOpen2 = false),

    UPDATE_TOKEN1: (state, payload) => {
      state.token1 = payload;
      state.isOpen1 = false;
    },
    UPDATE_TOKEN2: (state, payload) => {
      state.token2 = payload;
      state.isOpen2 = false;
    },
    EXCHANGE_TOKEN: (state) => {
      state.temp_token1 = state.token2;
      state.temp_token2 = state.token1;
      state.token1 = state.temp_token1;
      state.token2 = state.temp_token2;
    },
  },
  getters: {
    tokens: (state) => state.tokens,
    isOpen1: (state) => state.isOpen1,
    isOpen2: (state) => state.isOpen2,
    token1: (state) => state.token1,
    token2: (state) => state.token2,
    pools: (state) => state.pools,
  },
};
