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
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from "getbasecore/Atoms?date=01";

import { Pagination, Form, Alert, Table } from "getbasecore/Molecules?id=12";

//Import app strings
const content = require("../data/lang.es.json");
const homeContent = content.home;

export const Home = () => {
  //let history = useHistory();

  return (
    <main>
      <Table />
      <Alert css="alert--success" close={true}>
        Pepep
      </Alert>

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
      <Form css="form--simple">
        <FormInputSimple
          name="formu-input"
          type="text"
          placeholder="Formulario"
          label="formulario"
        />
        <FormSelectSimple name="formu-inputa" label="select">
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
        </FormSelectSimple>
        <FormRadioSimple
          name="formu-inputasa"
          label="option radio"
          checked={true}
        />
        <FormRadioSimple name="formu-inputasa" label="option radio 2" />
        <FormCheckboxSimple name="formu-input-checbox" label="Checkbox" />
        <FormCheckboxSimple
          name="formu-input-checbox"
          label="Checkbox checked"
          checked={true}
        />
        <FormInputRangeSimple
          name="formu-input-range"
          min={0}
          max={10}
          type="text"
        />
      </Form>
    </main>
  );
};
