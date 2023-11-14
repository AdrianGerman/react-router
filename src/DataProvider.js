import React from "react";
import { useNavigate } from "react-router-dom";

const dataContext = React.createContext();

const initialData = [
  {
    title: "¿Que es React?",
    slug: "que-es-react",
    content: "React es el mejor framework de JavaScript o Libreria?",
    author: "Adrian",
    approved: false,
  },
  {
    title: "¿Que es Vue?",
    slug: "que-es-vue",
    content: "Vue es el mejor framework de JavaScript o Libreria?",
    author: "AdrianGerman",
    approved: false,
  },
  {
    title: "¿Que es Angular?",
    slug: "que-es-angular",
    content: "Angular es el mejor framework de JavaScript o Libreria?",
    author: "German",
    approved: false,
  },
];

function DataProvider({ childre }) {}

export { DataProvider };
