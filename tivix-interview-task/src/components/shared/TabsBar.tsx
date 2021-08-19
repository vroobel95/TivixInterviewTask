import './TabsBar.scss';

import { PropsWithChildren } from 'react';
import Button from './Button';

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
        return (
          <div className="button-wrapper">
            <Button
              onClick={() => handleItemSelect(tab.value)}
              className="tab-button"
              text={new Date(tab.label).toLocaleDateString()}
            />
            <div className={'highlight' + (props.selectedItem === tab.value ? ' selected' : '')}></div>
          </div>
        );
      })}
    </div>
  );
};

export default TabsBar;
