const { useLocation } = require('react-router-dom');

const URLHelper = {
  useQuery() {
    return new URLSearchParams(useLocation().search);
  },

  getName() {
    return this.useQuery().get('name');
  },

  getStatus() {
    return this.useQuery().get('status');
  },

  getGender() {
    return this.useQuery().get('gender');
  },
};

export default URLHelper;
