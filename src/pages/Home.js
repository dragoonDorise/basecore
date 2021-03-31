//import { useHistory } from "react-router-dom";

//Default BaseCore components
import {
  BtnSimple,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  List,
  LoaderCircle,
  ProgressBar,
} from "getbasecore/Atoms";

import { Pagination } from "getbasecore/Molecules";

//import { ProgressBar } from "../components/atoms/ProgressBar/ProgressBar";

//Import app strings
const content = require("../data/lang.es.json");
const homeContent = content.home;

export const Home = () => {
  //let history = useHistory();

  return (
    <main>
      <h1 className="h1">{homeContent.title}</h1>
      <BtnSimple type="button" css="btn-simple--1" aria="This is a button">
        Button #1
      </BtnSimple>
      <BtnSimple type="button" css="btn-simple--2" aria="This is a button">
        Button #2
      </BtnSimple>
      <BtnSwitch name="switcharo" />
      <Icon icon="close" css="icon--xs" />
      <br />
      <LinkSimple css="link-simple--1" href="https://google.com">
        Simple Link
      </LinkSimple>
      <Img
        src="logo192.png"
        srcXS="xs.png"
        srcSM="sm.png"
        srcMD="md.png"
        srcLG="lg.png"
        srcXL="xl.png"
        css="img-no-responsive"
        alt="responsive Img"
      />
      <List css="list--bullets" children={[1, 2, 3, 4]}></List>
      <List
        css="list--icons list--icons--xs"
        children={[
          ["twitter", "Lorem ipsum a"],
          ["close", "Lorem ipsum b"],
          ["twitter", "Lorem ipsum cc"],
          ["twitter", "Lorem ipsum d"],
        ]}
      ></List>
      <LoaderCircle aria="loading" />
      <ProgressBar value="800" max="900" css="progress--success" />

      <Pagination name="pepe" />
    </main>
  );
};
