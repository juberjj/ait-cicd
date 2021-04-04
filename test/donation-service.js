'use strict';

const axios = require('axios');


class DonationService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async authenticate(user) {
    try {
      const response = await axios.post(this.baseUrl + '/api/users/authenticate', user);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async clearAuth(user) {
    axios.defaults.headers.common['Authorization'] = '';
  }

  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + '/api/users');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getUser(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/users/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createUser(newUser) {
    try {
      const response = await axios.post(this.baseUrl + '/api/users', newUser);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteAllUsers() {
    try {
      const response = await axios.delete(this.baseUrl + '/api/users');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteOneUser(id) {
    try {
      const response = await axios.delete(this.baseUrl + '/api/users/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getCandidates() {
    try {
      const response = await axios.get(this.baseUrl + '/api/candidates');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async getCandidate(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/candidates/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async createCandidate(newCandidate) {
    try {
      const response = await axios.post(this.baseUrl + '/api/candidates', newCandidate);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteAllCandidates() {
    try {
      const response = await axios.delete(this.baseUrl + '/api/candidates');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteOneCandidate(id) {
    try {
      const response = await axios.delete(this.baseUrl + '/api/candidates/' + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async makeDonation(id, donation) {
    try {
      const repsonse = await axios.post(this.baseUrl + '/api/candidates/' + id + '/donations', donation);
      return repsonse.data;
    } catch (e) {
      return null;
    }
  }

  async getDonations(id) {
    try {
      const response = await axios.get(this.baseUrl + '/api/candidates/' + id + '/donations');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteAllDonations() {
    try {
      const response = await axios.delete(this.baseUrl + '/api/donations');
      return response.data;
    } catch (e) {
      return null;
    }
  }

  async deleteDonations(candidateId) {
    try {
      const response = await axios.delete(this.baseUrl + '/api/candidates/' + candidateId + '/donations');
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

module.exports = DonationService;
