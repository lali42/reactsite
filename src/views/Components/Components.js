import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks";

import styles from "../../assets/jss/material-kit-react/views/components.js";
import bg from "../../assets/img/space.jpg";
import Lottie from 'react-lottie';
import space from '../../lottie/28442-space.json';


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: space,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Header
        brand="PLANET"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax 
        image={bg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Life in space.</h1>
                <h3 className={classes.subtitle}>
                  Design your own life with this website.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <Lottie 
          options={defaultOptions}
            height={800}
            width={800}
          />
        </div>
      </Parallax>
      <Footer />
    </div>
    
  );
}
