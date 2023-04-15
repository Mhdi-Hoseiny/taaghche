import { useState } from "react";

const Submenu = (props) => {
  const { content, classes } = props;
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handlerSubmenu = (event) => {
    if (event.target.className === classes.toggle) {
      setIsSubmenuVisible(false);
    } else {
      setIsSubmenuVisible(true);
    }
  };

  return (
    <li onClick={handlerSubmenu} data-menu="true">
      <strong>{content.title}</strong>
      <i className="ico--chevron-left"></i>
      <ul
        className={
          isSubmenuVisible
            ? `${classes.category} ${classes.open}`
            : `${classes.category} ${classes.close}`
        }
      >
        <li data-role="title-menu">
          <button className={classes.toggle} onClick={handlerSubmenu}></button>
          <strong>دسته بندی ها</strong>
        </li>
        <li>
          <strong>همه کتاب های {content.title}</strong>
          <i className="ico--submenu"></i>
        </li>
        {content.list.map((subitemTitle) => (
          <li key={content.list.findIndex((i) => i === subitemTitle)}>
            <strong>{subitemTitle}</strong>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
