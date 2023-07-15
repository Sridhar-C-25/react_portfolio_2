import { createElement, useState } from "react";
import {content} from "../Content";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "23rem",
      width: "90%",
    },
    overlay: {
      padding: "2rem",
    },
};

const Skills = () => {
    const { skills } = content;
}

export default Skills