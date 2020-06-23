import React from 'react';
import PropTypes from 'prop-types';
import DatasetStore from '../../stores/DatasetStore';
import {connectToStores} from 'fluxible-addons-react';
import {enableAuthentication} from '../../configs/general';
import getResourcesCount from '../../actions/getResourcesCount';
import Dataset from '../dataset/Dataset';
import cloneResource from '../../actions/cloneResource';
import createResource from '../../actions/createResource';
import toaster from 'toasted-notes';

class DatasetReactor extends React.Component {
    componentDidMount() {

    }
    handleCloneResource(datasetURI, resourceURI) {
        this.context.executeAction(cloneResource, {
            dataset: datasetURI,
            resourceURI: resourceURI
        });
    }
    handleCreateResource(datasetURI, templateResource, user) {
        this.context.executeAction(createResource, {
            dataset: datasetURI,
            templateResource: templateResource
        });
        if(user && user.accountName !== 'open' && !parseInt(user.isSuperUser)) {
            toaster.notify('New resource based on the template resource will be created. Admin will review the changes soon.', {
                duration: 7000
            });
        }
    }
    //removes properties from an object
    configMinus(config, props) {
        let o = {};
        for(let p in config) {
            if(props.indexOf(p) === -1){
                o [p] = config [p];
            }
        }
        return o;
    }
    render() {
        let datasetURI = this.props.DatasetStore.dataset.datasetURI;
        let resources = this.props.DatasetStore.dataset.resources;
        let page = this.props.DatasetStore.dataset.page;
        let total = this.props.DatasetStore.dataset.total;
        let isComplete = this.props.DatasetStore.isComplete;
        let config = this.props.DatasetStore.dataset.config;
        let resourceQuery = this.props.DatasetStore.dataset.resourceQuery;
        let error = this.props.DatasetStore.dataset.error;
        let datasetReactor;
        let user = this.context.getUser();
        if(config && config.datasetReactor){
            switch(config.datasetReactor[0]){
                case 'Dataset':
                    datasetReactor = <Dataset enableAuthentication={enableAuthentication} datasetURI={datasetURI} resources={resources} page={page} total={total} error={error} config={this.configMinus(config, ['datasetReactor'])} resourceQuery={resourceQuery} onCloneResource={this.handleCloneResource.bind(this)} onCreateResource={this.handleCreateResource.bind(this, user)}/>;
                    break;
                default:
                    datasetReactor = <Dataset enableAuthentication={enableAuthentication} datasetURI={datasetURI} resources={resources} page={page} total={total} error={error} config={this.configMinus(config, ['datasetReactor'])} resourceQuery={resourceQuery} onCloneResource={this.handleCloneResource.bind(this)} onCreateResource={this.handleCreateResource.bind(this, user)}/>;
            }
        }

        return (
            <div ref="datasetReactor">
                {datasetReactor}
            </div>
        );
    }
}
DatasetReactor.contextTypes = {
    executeAction: PropTypes.func.isRequired,
    getUser: PropTypes.func
};
DatasetReactor = connectToStores(DatasetReactor, [DatasetStore], function (context, props) {
    return {
        DatasetStore: context.getStore(DatasetStore).getState()
    };
});
export default DatasetReactor;
