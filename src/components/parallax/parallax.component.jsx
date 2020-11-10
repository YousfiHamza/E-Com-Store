import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./parallaxStyle";

const useStyles = makeStyles(styles);

const ImagesByPages = {
  home: "https://vistapointe.net/images/shop-wallpaper-20.jpg",
  category: "https://r.lvmh-static.com/uploads/2016/01/cover3-1584x872.jpg",
  shop:
    "https://c0.wallpaperflare.com/preview/506/226/547/store-shop-interor-retail.jpg",
  signIn:
    "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BmI6UBJLWj5dnkc7q/videoblocks-happy-smiling-sporty-girls-in-training-clothes-standing-on-outdoor-stadium-and-giving-five-with-bottles-after-sport-workout_sfgmvsuqb_thumbnail-1080_01.png",
  checkOut:
    "https://1.bp.blogspot.com/-A_PuMdWHoCk/UXEb-HsS89I/AAAAAAAAHhY/IRN7PscZ7Zo/s1600/IMG_3905.JPG",
};

export default function Parallax(props) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + ImagesByPages[image] + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
