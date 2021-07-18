//import { useHistory } from "react-router-dom";

//Default BaseCore components
import {
  BtnSimple,
  BtnGroup,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  Iframe,
  List,
  LoaderCircle,
  ProgressBar,
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from "getbasecore/Atoms";

import {
  Pagination,
  Form,
  Alert,
  Table,
  Accordion,
  Breadcrumb,
  Dropdown,
  Tabs,
} from "getbasecore/Molecules";

import { Card } from "getbasecore/Organisms";

// export { Modal } from "./src/components/molecules/Modal/Modal";
// export { Tooltip } from "./src/components/molecules/Tooltip/Tooltip";

export const Home = () => {
  //let history = useHistory();

  return (
    <div className="wrapper">
      <main className="main">
        <section className="container">
          <Alert css="alert--info" close={false}>
            Congratulations, you are our number one customer!
          </Alert>

          <Card>
            <span className="h1">Welcome!</span>
            <span className="h5">This is BaseCore Kitchen Sink</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              dolorum ea iusto possimus dolores tenetur? Vitae odit, modi nemo
              nobis, voluptatibus molestiae fugiat est quisquam pariatur
              molestias, commodi totam tempora!
              <strong>Vitae odit</strong>
            </p>

            <div>
              <BtnGroup>
                <BtnSimple type="button" css="btn-simple--1" aria="Read">
                  Button #1
                </BtnSimple>
                <BtnSimple type="button" css="btn-simple--2" aria="Download">
                  Button #2
                </BtnSimple>
              </BtnGroup>
            </div>
          </Card>
        </section>

        <section className="container container--grid">
          <Breadcrumb
            children={{
              0: {
                active: false,
                text: "Home",
                link: "./",
              },
              1: {
                active: false,
                text: "Library",
                link: "./",
              },
              2: {
                active: true,
                text: "Data",
                link: "./",
              },
            }}
          ></Breadcrumb>

          <Tabs
            ariaLabel="Demo Tabs"
            tabList={["Tab 1", "Tab 2", "Tab 3"]}
            tabContent={[
              <>
                <p>This table is using an array to paint its content:</p>
                <Table
                  css="table-reflow"
                  description="Table description"
                  items={{
                    0: ["Movie Title", "Genre", "Year", "Gross"],
                    1: [
                      "Star Wars1",
                      "Adventure. Sci-fi",
                      "1977",
                      "$460935665",
                    ],
                    2: [
                      "Star Wars2",
                      "Adventure. Sci-fi",
                      "1977",
                      "$460935665",
                    ],
                    3: [
                      "Star Wars3",
                      "Adventure. Sci-fi",
                      "1977",
                      "$460935665",
                    ],
                    4: [
                      "Star Wars4",
                      "Adventure. Sci-fi",
                      "1977",
                      "$460935665",
                    ],
                  }}
                />
              </>,
              <>
                <Iframe
                  title="Iframe Test"
                  src="https://player.vimeo.com/video/12860646"
                />
              </>,
              <>
                <p>This table is using simple HTML to paint its content:</p>
                <Table css="table-reflow" description="Table description">
                  <thead>
                    <tr>
                      <th>Movie Title</th>
                      <th>Genre</th>
                      <th>Year</th>
                      <th>Gross</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-th="Movie Title">Star Wars1</td>
                      <td data-th="Genre">Adventure. Sci-fi</td>
                      <td data-th="Year">1977</td>
                      <td data-th="Gross">$460935665</td>
                    </tr>
                  </tbody>
                </Table>
              </>,
            ]}
          />
        </section>

        <section>
          <div className="container container--grid">
            <span className="h3">Our fake products</span>
          </div>
          <ul className="container container--grid">
            <li data-col-sm="4">
              <Card>
                <Img
                  src="https://via.placeholder.com/300x200"
                  srcXS="https://via.placeholder.com/300x300"
                  srcSM="https://via.placeholder.com/300x200"
                  srcMD="https://via.placeholder.com/300x200"
                  srcLG="https://via.placeholder.com/300x200"
                  srcXL="https://via.placeholder.com/300x200"
                  alt="responsive Img"
                />
                <span className="h4">Super Nice Title</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam praesentium non, neque facere, maiores doloremque
                  aliquid illo eum ipsa officia placeat sapiente aspernatur
                  numquam minus autem ea minima deleniti voluptate?{" "}
                  <LinkSimple css="link-simple--1" href="https://google.com">
                    Read More...
                  </LinkSimple>
                </p>
                <List
                  css="list--icons list--icons--xs"
                  children={[["twitter", "Share on twiter"]]}
                />
              </Card>
            </li>
            <li data-col-sm="4">
              <Card>
                <Img
                  src="https://via.placeholder.com/300x200"
                  srcXS="https://via.placeholder.com/300x300"
                  srcSM="https://via.placeholder.com/300x200"
                  srcMD="https://via.placeholder.com/300x200"
                  srcLG="https://via.placeholder.com/300x200"
                  srcXL="https://via.placeholder.com/300x200"
                  alt="responsive Img"
                />
                <span className="h4">Super Nice Title</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam praesentium non, neque facere, maiores doloremque
                  aliquid illo eum ipsa officia placeat sapiente aspernatur
                  numquam minus autem ea minima deleniti voluptate?{" "}
                  <LinkSimple css="link-simple--1" href="https://google.com">
                    Read More...
                  </LinkSimple>
                </p>
                <List
                  css="list--icons list--icons--xs"
                  children={[["twitter", "Share on twiter"]]}
                />
              </Card>
            </li>
            <li data-col-sm="4">
              <Card>
                <Img
                  src="https://via.placeholder.com/300x200"
                  srcXS="https://via.placeholder.com/300x300"
                  srcSM="https://via.placeholder.com/300x200"
                  srcMD="https://via.placeholder.com/300x200"
                  srcLG="https://via.placeholder.com/300x200"
                  srcXL="https://via.placeholder.com/300x200"
                  alt="responsive Img"
                />
                <span className="h4">Super Nice Title</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam praesentium non, neque facere, maiores doloremque
                  aliquid illo eum ipsa officia placeat sapiente aspernatur
                  numquam minus autem ea minima deleniti voluptate?{" "}
                  <LinkSimple css="link-simple--1" href="https://google.com">
                    Read More...
                  </LinkSimple>
                </p>
                <List
                  css="list--icons list--icons--xs"
                  children={[["twitter", "Share on twiter"]]}
                />
              </Card>
            </li>
          </ul>
          <div className="container">
            <Pagination name="pagination" />
          </div>
        </section>
        <section className="container container--grid">
          <Card>
            <span className="h3">Here are some forms</span>
            <ProgressBar value="800" max="900" css="progress--success" />

            <Form css="form form--simple">
              <FormInputSimple
                name="spamm"
                type="text"
                placeholder="Email address please"
                label="We will spam you for sure so... give us all your info please"
              />

              <FormInputSimple
                label="Input with add-on button"
                labelButton="Show password"
                name="password"
                type="password"
                addon="right"
                addonText="#close"
                placeholder="Enter your password"
                maxLength={8}
              />

              <FormInputRangeSimple
                name="formu-input-range"
                min={0}
                max={10}
                step={1}
                id="stepper"
                type="text"
                label="Indicate your level of happiness"
              />

              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>
                <div className="form__group">
                  <BtnSwitch name="switcheroo" />
                </div>
              </fieldset>
              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>

                <FormCheckboxSimple
                  name="formu-input-checbox"
                  label="Checkbox One"
                  id="check1"
                  value={1}
                />
                <FormCheckboxSimple
                  name="formu-input-checbox"
                  id="check2"
                  value={2}
                  label="Checkbox Two"
                />
              </fieldset>
              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>
                <BtnGroup>
                  <BtnSimple
                    type="toggle"
                    name="toggles"
                    id="toggle1"
                    css="btn-simple--2"
                    aria="Choose Option #1"
                  >
                    Option #1
                  </BtnSimple>
                  <BtnSimple
                    type="toggle"
                    name="toggles"
                    id="toggle2"
                    css="btn-simple--2"
                    aria="Choose Option #2"
                  >
                    Option #2
                  </BtnSimple>
                </BtnGroup>
              </fieldset>
              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>
                <BtnGroup>
                  <BtnSimple
                    type="multiple"
                    name="multiple"
                    id="multiple1"
                    css="btn-simple--2"
                    aria="Option Multiple #1"
                  >
                    Option #1
                  </BtnSimple>
                  <BtnSimple
                    type="multiple"
                    name="multiple"
                    id="multiple2"
                    css="btn-simple--2"
                    aria="Option Multiple #2"
                  >
                    Option #2
                  </BtnSimple>
                  <BtnSimple
                    type="multiple"
                    name="multiple"
                    id="multiple3"
                    css="btn-simple--2"
                    aria="Option Multiple #13"
                  >
                    Option #3
                  </BtnSimple>
                </BtnGroup>
              </fieldset>
              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>

                <FormRadioSimple
                  name="radios"
                  label="Option radio #1"
                  id="option1"
                />
                <FormRadioSimple
                  name="radios"
                  label="Option radio #2"
                  id="option2"
                />
              </fieldset>
              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>

                <FormSelectSimple
                  name="formu-inputa"
                  label="Select your option"
                >
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                </FormSelectSimple>
              </fieldset>

              <fieldset>
                <legend className="h6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </legend>

                <ul className="list list--inline">
                  <li>
                    <Dropdown
                      css="btn-simple btn-simple--1"
                      text="Dropdown Menu"
                      direction="up"
                      ariaControls="dropdown-menu"
                      ariaLabelled="dropdown"
                    >
                      <li role="none">
                        <LinkSimple
                          css="link-simple--1"
                          href="https://google.com"
                          role="menuitem"
                        >
                          Simple Link
                        </LinkSimple>
                      </li>
                      <li role="none">
                        <LinkSimple
                          css="link-simple--1"
                          href="https://google.com"
                          role="menuitem"
                        >
                          Simple Link
                        </LinkSimple>
                      </li>
                    </Dropdown>
                  </li>
                </ul>
              </fieldset>
            </Form>
          </Card>
        </section>
        <section className="container container--grid">
          <span className="h3">Read our FAQs</span>

          <Accordion
            items={{
              0: {
                title: "Lorem ipsum dolor sit",
                desc: "Sed est mi, pharetra quis tempor eu, tincidunt vel mi. Nam congue euismod neque ut ultricies. Fusce et ante eget massa vehicula auctor. Fusce aliquet, lorem sit amet varius lacinia, lectus tellus tempor orci, eget dignissim magna felis id ipsum.",
              },
              1: {
                title: "Pellentesque accumsan",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor condimentum faucibus. Curabitur auctor, magna semper lobortis eleifend, turpis ante euismod orci, id sollicitudin ligula turpis nec turpis. ",
              },
            }}
          />
        </section>
        <footer style={{ background: "#efefef", padding: "20px" }}>
          <div className="container container--grid">
            <span className="h4">Footer info</span>

            <ul className="list" data-col-xs="2" data-col-sm="4">
              <li>
                <span className="h5">Title</span>
              </li>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
            <ul className="list" data-col-xs="2" data-col-sm="4">
              <li>
                <span className="h5">Title</span>
              </li>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
            <ul className="list" data-col-xs="2" data-col-sm="4">
              <li>
                <span className="h5">Title</span>
              </li>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
            <small className="small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              rem, aspernatur ullam fuga quisquam ex, excepturi, distinctio
              repellendus accusamus nobis enim non natus tempore blanditiis
              perspiciatis eum perferendis a unde.
            </small>
          </div>
        </footer>
        <div className="container container--grid"></div>
      </main>
    </div>
  );
};
