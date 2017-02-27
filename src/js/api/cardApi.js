import axios from 'axios';

const API_HOST = 'https://gaston-cardmanager-api.herokuapp.com/api';

const loadCards = () => {
  return axios.get(`${API_HOST}/cards`);
};

const deleteCard = (id) => {
  return axios.delete(`${API_HOST}/cards/${id}`);
};

const archiveCard = (id) => {
  return axios.patch(`${API_HOST}/cards/${id}`, {
    archived: true
  });
};

const createCard = (card) => {
  return axios.post('${API_HOST}/cards/', {
    title: card.title,
    description: card.description,
    state: 'open'
  });
};

const updateCard = (card) => {
  return axios.patch(`${API_HOST}/cards/${card.id}`, {
    title: card.title,
    description: card.description
  });
};

const updateCardTitle = (card) => {
  return axios.patch(`${API_HOST}/cards/${card.id}`, {
    title: card.title
  });
};

const updateCardDescription = (card) => {
  return axios.patch(`${API_HOST}/cards/${card.id}`, {
    description: card.description
  });
};

export default { loadCards, deleteCard, archiveCard, createCard, updateCard, updateCardTitle, updateCardDescription };
