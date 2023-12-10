// store.js
import { createStore } from 'vuex';
import axios from 'axios';

const origin = (window.location.href).includes('localhost') 
    ? 'http://localhost:3000' : 'https://m06backend.tweir12.repl.co';
console.log(origin);

export default createStore({
  state: {
    msgs: [],
    token:localStorage.getItem('token') ?? ''
  },
  mutations: {
    updateMessages(state, messages) {
      state.msgs = messages;
    },
    newMessage(state, message){
        state.msgs.push(message);
    },
    auth(state,token){
      state.token = token;
    },
    logout(state){
      state.token = '';
      localStorage.clear('token');
    }
  },
  actions:{
    async getMessages({commit}){
        let messages = (await axios.get(`${origin}/messages`)).data;
        commit('updateMessages',messages);
    },
    async getMessage(_, id) {
        console.log(id);
        let message = (await axios.get(`${origin}/messages/${id}`)).data;
        return message;
      },
    async newMessage({commit}, messageBody){
        let msg = (await axios.post(`${origin}/messages`, {
          message: messageBody,
        })).data;
        commit('newMessage', msg.message);
    },
    async register({commit}, registerData){
      const token = (await axios.post(`${origin}/register`, registerData)).data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit('auth', token);
    },
    async login({commit}, registerData){
        const token = (await axios.post(`${origin}/login`, registerData)).data;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit('auth', token);
    }
    
  }
});