import axios from 'axios';

const API_HOST = 'https://gaston-cardmanager-api.herokuapp.com/api';

const deleteComment = (cardId, commentId) => {
  return axios.delete(`${API_HOST}/cards/${cardId}/comments/${commentId}`);
};

const createComment = (comment) => {
  return axios.post(`${API_HOST}/cards/${comment.cardId}/comments/`, {
    text: comment.text
  });
};

export default { deleteComment, createComment };
