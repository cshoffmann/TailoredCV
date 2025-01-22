import PropTypes from "prop-types";
import "../styles/Steps.css";

const Steps = ({ title, content, image, layout }) => {
  return (
    <div className={`step ${layout === "left" ? "step-left" : "step-right"}`}>
      {layout === "left" && (
        <>
          <div className="step-content">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
          <div className="step-image">
            {/* <img src={image} alt={title} /> */}
          </div>
        </>
      )}
      {layout === "right" && (
        <>
          <div className="step-image">
            {/* <img src={image} alt={title} /> */}
          </div>
          <div className="step-content">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </>
      )}
    </div>
  );
};
Steps.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default Steps;
