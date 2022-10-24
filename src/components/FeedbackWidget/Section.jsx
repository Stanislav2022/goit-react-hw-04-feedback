import css from "./Feedback.module.css";
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
    return (
        < div className={css.section} >
            <h2 className={css.title}>{title}</h2>
            {children}
        </div >
    )
}

export default Section;


  Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};