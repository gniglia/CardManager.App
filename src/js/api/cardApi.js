import axios from 'axios';

const apiUri = 'https://gaston-cardmanager-api.herokuapp.com/api';

const loadCards = () => {
  return axios.get(`${apiUri}/cards`);
};

const deleteCard = (id) => {
  return axios.delete(`${apiUri}/cards/${id}`);
};

const archiveCard = (id) => {
  return axios.patch(`${apiUri}/cards/${id}`, {
    archived: true
  });
};

const createCard = (card) => {
  return axios.post(`${apiUri}/cards`, {
    title: card.title,
    description: card.description,
    state: 'open'
  });
};

const updateCard = (card) => {
  return axios.patch(`${apiUri}/cards/${card.id}`, {
    title: card.title,
    description: card.description
  });
};

const updateCardTitle = (card) => {
  return axios.patch(`${apiUri}/cards/${card.id}`, {
    title: card.title
  });
};

const updateCardDescription = (card) => {
  return axios.patch(`${apiUri}/cards/${card.id}`, {
    description: card.description
  });
};

export default { loadCards, deleteCard, archiveCard, createCard, updateCard, updateCardTitle, updateCardDescription };
