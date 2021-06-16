import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { TabList } from "./TabList";
import { TabContent } from "./TabContent";
import "./core_tabs.scss";
export const Tabs = ({ tabList, tabContent }) => {
  const tabListArray = Object.values(tabList);
  const tabContentArray = Object.values(tabContent);
  const [tabState, setTabState] = useState(0);

  const updateTab = (i) => {
    setTabState(i);
  };

  return (
    <>
      <div className="nav-tabs">
        <ul role="tablist">
          {tabListArray.map((item, i) => {
            return (
              <TabList
                key={i}
                id={i}
                active={tabState === i ? true : false}
                onClick={() => updateTab(i)}
              >
                {item}
              </TabList>
            );
          })}
        </ul>
      </div>
      <div className="tab-content">
        {tabContentArray.map((item, i) => {
          return (
            <TabContent key={i} id={i} active={tabState === i ? true : false}>
              {item}
            </TabContent>
          );
        })}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  tabContent: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
