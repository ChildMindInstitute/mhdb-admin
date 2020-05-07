import React from 'react';
import PropTypes from 'prop-types';
import {enableAuthentication} from '../../configs/general';
import ResourceStore from '../../stores/ResourceStore';
import {connectToStores} from 'fluxible-addons-react';
import Resource from '../resource/Resource';
import UserResource from '../resource/UserResource';
import PersonResource from '../resource/PersonResource';
import OrgResource from '../resource/OrgResource';
import CSVMappingResource from '../resource/CSVMappingResource';
import createProperty from '../../actions/createProperty';
import ReactDOM from 'react-dom';
import PrefixBasedInput from '../object/editor/individual/PrefixBasedInput';
import {getDynamicEndpointParameters} from '../../services/utils/dynamicHelpers';
import {getStaticEndpointParameters, prepareGraphName, getHTTPQuery, getHTTPGetURL, showNotification} from '../../services/utils/helpers';
import AutocompleteQuery from '../../services/sparql/AutocompleteQuery';
import AutocompleteUtil from '../../services/utils/AutocompleteUtil';
import rp from 'request-promise';
import regeneratorRuntime from "regenerator-runtime";

class ResourceReactor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPropURI: '',
            newObjetValue: '',
            autocompleteList: {
                propertyURIs: [],
                objectURIs: []
            },
            propertyURIs: [],
        };
        this.datasetURI = this.props.ResourceStore.datasetURI;
        console.log("constructor")
        this.updatePropertyURIs.bind(this)
        this.updatePropertyURIs()
        //this.test1.bind(this)
        //this.test1()
        //console.log("constructor"+this.state.autocompletelist.propertyURIs)
        // this.autocompleteList = {
        //     propertyURIs: this.getPropertyList(this.datasetURI),
        //     objectURIs: []
        // }
        //console.log(this.getPropertyList(this.datasetURI))
    }
    async test1() {
        console.log("test")
        let propertyURIs = await this.getPropertyList()
        console.log("propertyURIs in updatePropertyURIs"+propertyURIs)
    }
    componentDidMount() {
        console.log("didmount")
        //console.log("didmount1"+this.state.autocompletelist.propertyURIs)
        // const fetchPropertyURIs = async () => {
        //   const propertyURIs = await getPropertyList(this.datasetURI);
        //   this.setState(prevState => {
        //     let autocompleteList = Object.assign({}, prevState.autocompleteList);  // creating copy of state variable jasper
        //     autocompleteList.propertyURIs = propertyURIs;                     // update the name property, assign a new value                 
        //     return { autocompleteList };                                 // return new object jasper object
        //   });
        // };
        // fetchPropertyURIs();
        //this.updatePropertyURIs.bind(this)
        //console.log("didmount2"+this.state.autocompletelist.propertyURIs)    
    }
    componentDidUpdate() {}
    // componentWillMount() {
    //     console.log("111")
    //     console.log("1"+this.getPropertyList(this.datasetURI))
    //     this.autocompleteList.objectURIs = this.getPropertyList(this.datasetURI)
    //     console.log("2"+this.autocompleteList.objectURIs)
    //     this.a = 2
    //     console.log(this.a)
    // }    
    //removes properties from an object
    configMinus(config, props) {
        let o = {};
        for (let p in config) {
            if (props.indexOf(p) === -1) {
                o[p] = config[p];
            }
        }
        return o;
    }
    async updatePropertyURIs() {
        console.log("updatePropertyURIs")
        let propertyURIs = await this.getPropertyList()
        console.log("propertyURIs in updatePropertyURIs"+propertyURIs)
        console.log(this.state.autocompleteList.propertyURIs)
        // this.setState(prevState => {
        //     //console.log("setstate")
        //     let autocompleteList = Object.assign({}, prevState.autocompleteList);  // creating copy of state variable jasper
        //     autocompleteList.propertyURIs = propertyURIs;                     // update the name property, assign a new value                 
        //     //console.log("propertyURIs"+propertyURIs)
            
        //     return { autocompleteList };                                 // return new object jasper object
        // }, console.log(this.state.autocompleteList.propertyURIs));
        await this.setState({
            propertyURIs
        }, console.log(this.state.propertyURIs))
        console.log(this.state.autocompleteList.propertyURIs)
        console.log(this.state.propertyURIs)
    }
    async getPropertyList() {
        let queryObject = new AutocompleteQuery();
        let utilObject = new AutocompleteUtil();
        const headers = {'Accept': 'application/sparql-results+json'};
        const outputFormat = 'application/sparql-results+json';
        let query = queryObject.getAllProperties();
        //send request
        let endpoint = getStaticEndpointParameters(this.datasetURI);
        let {gStart, gEnd} = prepareGraphName(endpoint.graphName);
        //send request
        let rpPath = getHTTPGetURL(getHTTPQuery('read', query, endpoint, outputFormat));
        let result = await rp.get({
            uri: rpPath,
            headers: headers
        })
        // .then(function(res) {
        //     let propertyURIs = utilObject.parseProperties(res)
        //     console.log("res"+utilObject.parseProperties(res))
        //     this.updatePropertyURIs.bind(updatePropertyURIs(propertyURIs));
        //     //return utilObject.parseProperties(res);
        // }).catch(function(err) {
        //     console.log(err);
        //     //return [];
        // });
        return utilObject.parseProperties(result);
        //return [{'title': 'http://dbpedia.org/sparql'},
        //{'title': 'http://live.dbpedia.org/sparql'}]
    }
    handleNewProperty(e, user) {
        let self = this;
        if(this.state.newPropURI && this.state.newObjetValue){
            this.context.executeAction(createProperty, {
                dataset: self.props.ResourceStore.datasetURI,
                resourceURI: self.props.ResourceStore.resourceURI,
                propertyURI: this.state.newPropURI,
                objectValue: this.state.newObjetValue
            });
        }
        let message = "hasPendingPropertyCreate property will be added to Actions tab. Admin will confirm the changes soon."
        showNotification(user, message);
    }
    handleNewPropertyEdit(v) {
        this.setState({newPropURI: v.trim()});
    }
    handleNewObjectValueEdit(v) {
        this.setState({newObjetValue: v.trim()});
    }
    render() {
        let user = this.context.getUser();
        let properties = this.props.ResourceStore.properties;
        let resourceURI = this.props.ResourceStore.resourceURI;
        let resourceType = this.props.ResourceStore.resourceType;
        let title = this.props.ResourceStore.title;
        let currentCategory = this.props.ResourceStore.currentCategory;
        let propertyPath = this.props.ResourceStore.propertyPath;
        let config = this.props.ResourceStore.config;
        let error = this.props.ResourceStore.error;
        let resourceReactor;
        if (config && config.resourceReactor) {
            switch (config.resourceReactor[0]) {
                case 'Resource':
                    resourceReactor = <Resource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
                    break;
                case 'UserResource':
                    resourceReactor = <UserResource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
                    break;
                case 'PersonResource':
                    resourceReactor = <PersonResource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
                    break;
                case 'OrgResource':
                    resourceReactor = <OrgResource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
                    break;
                case 'CSVMappingResource':
                    resourceReactor = <CSVMappingResource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
                    break;
                default:
                    resourceReactor = <Resource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
            }
        }else{
            resourceReactor = <Resource enableAuthentication={enableAuthentication} datasetURI={this.datasetURI} properties={properties} resource={resourceURI} resourceType={resourceType} title={title} currentCategory={currentCategory} propertyPath={propertyPath} config={this.configMinus(config, ['resourceReactor'])} error={error}/>;
        }
        let newPropDIV = '';
        //let propertyList = this.getPropertyList(this.datasetURI, user, (res) => {res});
        console.log("propertyList"+this.state.autocompleteList.propertyURIs)
        //console.log(this.state.autocompleteList.objectURIs)
        if(!error && config && config.allowPropertyNew && !config.readOnly && (config.userIsCreator || config.userIsEditor)){
            newPropDIV =  <div className="ui fluid container ldr-padding-more"><div className="ui grid">
                <div className="ui column"><div className="ui grey message form"> 
                    <PrefixBasedInput autocompletelist={this.state.autocompleteList.objectURIs} includeOnly={['ldrProperties','properties']} noFocus={true} spec={{value:''}} onDataEdit={this.handleNewPropertyEdit.bind(this)} placeholder="Enter the URI of the property. You can use common prefixes e.g. foaf:name"/>
                    <PrefixBasedInput noFocus={true} spec={{value:''}} onDataEdit={this.handleNewObjectValueEdit.bind(this)} placeholder="Value of the property" onEnterPress={this.handleNewProperty.bind(this)} allowActionByKey={true}/>
                    <button className="fluid ui primary icon button" onClick={this.handleNewProperty.bind(this, user)}><i className="icon square add"></i>Add Property/Value</button>
                </div></div></div></div>;
        }
        let itemTypes = '';
        if(Array.isArray(resourceType)){
            itemTypes = resourceType.join(' ');
        }else{
            itemTypes = resourceType;
        }
        return (
            <div ref="resourceReactor" itemScope itemType={itemTypes} itemID={resourceURI}>
                {resourceReactor}
                {newPropDIV}
            </div>
        );
    }
}
ResourceReactor.contextTypes = {
    executeAction: PropTypes.func.isRequired,
    getUser: PropTypes.func
};
ResourceReactor = connectToStores(ResourceReactor, [ResourceStore], function(context, props) {
    return {ResourceStore: context.getStore(ResourceStore).getState()};
});
export default ResourceReactor;
