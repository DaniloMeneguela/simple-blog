import props from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2> {title} </h2>
      <p> {body} </p>
      <h3> {id} </h3>
    </div>
  </div>
);

PostCard.propTypes = {
  title: props.string.isRequired,
  cover: props.string.isRequired,
  body: props.string.isRequired,
  id: props.number.isRequired,
};
