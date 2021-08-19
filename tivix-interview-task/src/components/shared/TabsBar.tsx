import './TabsBar.scss';

import React, { PropsWithChildren } from "react";
import Button from "./Button";

interface TabItem<T> {
  value: T;
  label: string;
}

interface TabsBarProps<T> {
  items: TabItem<T>[];
  selectedItem: T;
  onSelectedTabChange: (item: T) => void;
}

const TabsBar = <T,>(props: PropsWithChildren<TabsBarProps<T>>) => {
  const handleItemSelect = (x: T) => {
    props.onSelectedTabChange(x);
    return Promise.resolve();
  };

  return (
    <div className="tabs-bar">
      {props.items.map((tab) => {
        return (<Button
          onClick={() => handleItemSelect(tab.value)}
          className="tab-button"
          text={tab.label}
        />);
      })}
    </div>
  );
};

export default TabsBar;