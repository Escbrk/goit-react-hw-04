import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn =  ({ onLoad }) => {
  return (
    <div>
      <button onClick={onLoad}>Load More...</button>
    </div>
  );
};

export default LoadMoreBtn;
