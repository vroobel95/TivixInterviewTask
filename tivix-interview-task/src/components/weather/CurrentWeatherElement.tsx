import './CurrentWeatherElement.scss';

import classNames from 'classnames';
import React from 'react';

interface CurrentWeatherElementProps {
    label: string;
    className: string;
    value: string;
}

const CurrentWeatherElement: React.FC<CurrentWeatherElementProps> = props => {
    const rootClassName = classNames('element', props.className);

    return (
        <div className={rootClassName}>
            <div className="label">{props.label}</div>
            <div className="value">{props.value}</div>
        </div>
    );
}

export default CurrentWeatherElement;