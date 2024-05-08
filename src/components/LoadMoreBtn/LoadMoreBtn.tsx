import LoadMoreBtnProps from "../../types/LoadMoreBtnProps";
import "./LoadMoreBtn.module.css";



const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoad }) => {
  return (
    <div>
      <button onClick={onLoad}>Load More...</button>
    </div>
  );
};

export default LoadMoreBtn;
