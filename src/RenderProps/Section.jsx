import React from 'react';
import Content from './Content';
export default class Section extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        console.log('Section rendered');
        return (
            <div>
                <h2> This is a section</h2>
                <Content />
            </div>
        );
    }
}
