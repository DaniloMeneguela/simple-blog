import { PostCard } from '../../components/PostCard';
import props from 'prop-types';
import './styles.css';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id} // unique key
        // PASSANDO PARA A PROPS DO COMPONENTE
        id={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
);

Posts.propTypes = {
  posts: props.arrayOf(
    props.shape({
      id: props.number,
      title: props.string,
      body: props.string,
      cover: props.string,
    }),
  ),
};
