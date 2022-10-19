import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h3> {id} </h3>
      <h2> {title} </h2>
      <p> {body} </p>
    </div>
  </div>
)
