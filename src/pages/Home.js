import { useHistory } from "react-router-dom";

//Default BaseCore components
import { BtnSimple } from "../components/atoms/BtnSimple/BtnSimple";
import { BtnSwitch } from "../components/atoms/BtnSwitch/BtnSwitch";

//Import app strings
const content = require("../data/lang.es.json");
const homeContent = content.home;

export const Home = () => {
  let history = useHistory();

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
    </main>
  );
};
