import React, { Component } from 'react';
import CommonLayout from '../../../../Common Components/CommonLayout/CommonLayout';
import { ConsumersTable } from '../../../Get Contexts and Providers';
import ViewConsumer from '../ViewConsumer/ViewConsumer';

class MetersLayout extends Component {
    render() {
        return (
            <CommonLayout Provider={ConsumersTable.TableProvider} title="Consumers" ViewComponent={ViewConsumer}/>
        );
    }
}

export default MetersLayout;