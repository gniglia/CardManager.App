import axios from 'axios';

const apiUri = 'https://gaston-cardmanager-api.herokuapp.com/api';

const deleteComment = (cardId, commentId) => {
  return axios.delete(`${apiUri}/cards/${cardId}/comments/${commentId}`);
};

const createComment = (comment) => {
  return axios.post(`${apiUri}/cards/${comment.cardId}/comments/`, {
    text: comment.text
  });
};

export default { deleteComment, createComment };
