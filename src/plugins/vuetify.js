import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#2F6690',
            secondary: '#5FA8D3',
          },
        },
    }
});
