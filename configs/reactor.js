export default {
    // config = scope + spec
    // scope is one the 15 combination of dataset, resource, property and object
    config: {
        //---------depth 1------------
        dataset: {
            'generic': {
                resourceFocusType: [],
                //only allow to view data -> disable edit
                readOnly: 1,
                //used for pagination in resource list
                maxNumberOfResourcesOnPage: 20,
                datasetReactor: ['Dataset'],
                datasetViewer: ['BasicResourceList'],
                datasetLabel: ['graphdb'],
                allowPropertyNew: 1,
                readOnly: 0,
                allowResourceNew: 1,
                allowResourceClone: 0,
                allowResourceDelete: 1,
                allowExtension: 0,
                allowNewValue: 1,
                allowPropertyDelete: 1,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput'],
                displayQueries: 0,
            },
            'chills': {
                datasetLabel: ['Papers'],
                allowPropertyNew: 0,
                readOnly: 1,
                resourceFocusType: ['http://www.purl.org/mentalhealth/chills#Paper'],
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput'],
            },
            //authentication graph
            'http://ld-r.org/users': {
                readOnly: 0,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User'],
                resourceLabelProperty: ['http://xmlns.com/foaf/0.1/accountName'],
                allowPropertyNew: 1
            },
            'http://ld-r.org/configurations': {
                readOnly: 0,
                allowResourceClone: 1,
                allowPropertyDelete: 1,
                allowResourceNew: 1,
                allowPropertyNew: 1,
                allowNewValue: 1,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ReactorConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ServerConfig','https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#EnvState'],
                datasetLabel: ['LD-R Configurations'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            'http://ld-r.org/mappings': {
                readOnly: 0,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CSVMapping'],
                datasetLabel: ['LD-R Mapping Configurations'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
        },
        resource: {
            'generic': {
                //if enabled, will categorize properties in different tabs based on property categories
                //usePropertyCategories: 1,
                //propertyCategories: ['Properties', 'Actions'],
                //used when creating random resources
                dynamicResourceDomain: ['http://example.org'],
                resourceReactor: ['Resource']
            },
        },
        property: {
            'generic': {
                propertyReactor: ['IndividualProperty'],
                //following are object-based scope:
                objectReactor: ['IndividualObject'],
                //to view/edit individual object values
                objectIViewer: ['BasicIndividualView'],
                objectIEditor: ['BasicIndividualInput'],
                extendedOEditor: ['BasicIndividualDetailEdit'],
                extendedOViewer: ['BasicIndividualDetailView'],
                shortenURI: 1,
                //category: ['Properties'],
            },
            'http://www.w3.org/2000/01/rdf-schema#label': {
                allowPropertyDelete: 0,
                allowNewValue: 0,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#password': {
                label: ['Password'],
                objectIViewer: ['PasswordView'],
                objectIEditor: ['PasswordInput'],
                allowNewValue: 0
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#cloneOf': {
                readOnlyProperty: 1,
                allowPropertyDelete: 0
            },
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                allowPropertyDelete: 0,
                isHidden: 1,
                readOnlyProperty: 1,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataType': {
                allowPropertyDelete: 0,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnlyProperty: 1,
                objectIViewer: ['BasicLinkedIndividualView'],
                containerDatasetURI: ['http://ld-r.org/users']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdOn' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnlyProperty: 1,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceQuery' : {
                decodeURIComponent: 1
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#selection' : {
                decodeURIComponent: 1
            },
            'http://www.w3.org/2000/01/rdf-schema#label': {
                allowExtension: 0,
            },
            'http://www.purl.org/mentalhealth/chills#hasArticleType': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Article type'],
            },
            'http://www.purl.org/mentalhealth/chills#hasPrimaryResearcher': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Primary researcher'],
            },
            'http://www.purl.org/mentalhealth/chills#hasSecondaryResearcher': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Secondary researcher'],
            },
            'http://www.purl.org/mentalhealth/chills#hasStimulusCategory': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Stimulus category'],
            },
            'http://www.purl.org/mentalhealth/chills#hasSensor': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Sensor'],
            },
            'http://www.purl.org/mentalhealth/chills#hasUnit': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Unit'],
            },
            'http://www.purl.org/mentalhealth/chills#hasAbstract': {
                label: ['Abstract'],
            },
            'http://www.purl.org/mentalhealth/chills#hasBrainArea': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Brain area'],
            },
            'http://www.purl.org/mentalhealth/chills#hasClaim': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Claim'],
            },
            'http://www.purl.org/mentalhealth/chills#hasDefinitionOfChills': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Definition of chills'],
            },
            'http://www.purl.org/mentalhealth/chills#hasInference': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Inference'],
            },
            'http://www.purl.org/mentalhealth/chills#hasMeasure': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Measure'],
            },
            'http://www.purl.org/mentalhealth/chills#hasPublicationYear': {
                label: ['Publication year'],
            },
            'http://www.purl.org/mentalhealth/chills#hasURL': {
                label: ['URL'],
            },
            'http://www.purl.org/mentalhealth/chills#hasStimulusURL': {
                label: ['Stimulus URL'],
            },
            'http://www.purl.org/mentalhealth/chills#hasSubjectiveSensor': {
                objectIViewer: ['BasicLinkedIndividualView'],
                label: ['Subjective sensor'],
            },
        },
        //---------depth 2------------
        dataset_resource: {
            'http://ld-r.org/users': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User' :{
                    treatAsResourceType: 1,
                    resourceReactor: ['UserResource']
                }
            },
            'http://ld-r.org/mappings': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CSVMapping' :{
                    treatAsResourceType: 1,
                    resourceReactor: ['CSVMappingResource']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CustomMapping' :{
                    treatAsResourceType: 1,
                    objectIEditor: ['PrefixBasedInput'],
                    objectIViewer: ['PrefixBasedView']
                }
            }
        },
        dataset_property: {
            //for configuration manager
            'http://ld-r.org/configurations': {
                'http://www.w3.org/2000/01/rdf-schema#label': {
                    allowPropertyDelete: 0,
                    label: ['Description'],
                    allowNewValue: 0
                },
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 0,
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#templateResource': {
                    label: ['The Template Resource'],
                    hint: ['If set, this resource will be used as template for new resources.'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    hint: ['Determines the type of scope in LD-R'],
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceFocusType': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceLabelProperty': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#config': {
                    label: ['Configuration'],
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#label',
                                instances: [{value: 'Label', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Label']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                                instances: [{value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Type'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://example.com/prop1', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Property'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        }
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#constraint': {
                    label: ['Constraint'],
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                                instances: [{value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#Constraint', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Type'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.com', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Property'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#object',
                                instances: [{value: 'value', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Object Value']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#enabled',
                                instances: [{value: '1', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Enabled'],
                                objectIViewer:['ToggleView'],
                                objectIEditor:['ToggleEdit'],
                                onValue: ['1'],
                                offValue: ['0'],
                            }
                        },
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#list': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#treatAsResourceType': {
                    label: ['Treat as Resource Type'],
                    hint: ['If set to true, will consider resource URI as type URI for resource'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#useReasoning': {
                    label: ['Use Reasoning?'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#host': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#port': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#path': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#protocol': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#graphName': {
                    label: ['Graph Name'],
                    hint: ['use "default" to consider all graph names'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    label: ['Endpoint Type'],
                    allowNewValue: 0,
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    allowUserDefinedValue: 1,
                    options: [
                        {label: 'ClioPatria', value: 'cliopatria'},
                        {label: 'Virtuoso', value: 'virtuoso'},
                        {label: 'Stardog', value: 'stardog'},
                        {label: 'Blazegraph', value: 'blazegraph'},
                        {label: 'GraphDB', value: 'graphdb'},
                        {label: 'Sesame', value: 'sesame'}
                    ]
                }
            },
            //for user page
            'http://ld-r.org/users': {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 1
                },
                'http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Username'],
                    readOnlyProperty: 1
                },
                'http://xmlns.com/foaf/0.1/member': {
                    label: ['Member of'],
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Normal User', value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#NormalUser'},
                        {label: 'Special User', value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#SpecialUser'}
                    ],
                    allowNewValue: 1
                },
                'http://xmlns.com/foaf/0.1/firstName': {
                    label: ['First Name']
                },
                'http://xmlns.com/foaf/0.1/lastName': {
                    label: ['Last Name']
                },
                'http://purl.org/dc/terms/created': {
                    label: ['Created at'],
                    readOnlyProperty: 1
                },
                'http://xmlns.com/foaf/0.1/mbox': {
                    label: ['Email Address'],
                    readOnlyProperty: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOf': {
                    label: ['Editor of Scope'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope',
                                instances: [{value: 'D', valueType: 'literal'}]
                            },
                            config: {
                                hint: ['Scope of access: e.g. D, DP, R, RP, P , etc.'],
                                label: ['Scope'],
                                objectIEditor: ['BasicOptionInput'],
                                objectIViewer: ['BasicOptionView'],
                                options: [
                                    {label: 'Dataset', value: 'D'},
                                    {label: 'Resource', value: 'R'},
                                    {label: 'Property', value: 'P'},
                                    {label: 'Dataset-Resource', value: 'DR'},
                                    {label: 'Dataset-Property', value: 'DP'},
                                    {label: 'Resource-Property', value: 'RP'},
                                    {label: 'Dataset-Resource-Property', value: 'DRP'},
                                ],
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset',
                                instances: [{value: 'http://exampleDataset.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Dataset URI under which the property is exposed.'],
                                label: ['Dataset']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        }
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#viewerOf': {
                    label: ['Viewer of Scope'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope',
                                instances: [{value: 'D', valueType: 'literal'}]
                            },
                            config: {
                                hint: ['Scope of access: e.g. D, DP, R, RP, P , etc.'],
                                label: ['Scope'],
                                objectIEditor: ['BasicOptionInput'],
                                objectIViewer: ['BasicOptionView'],
                                options: [
                                    {label: 'Dataset', value: 'D'},
                                    {label: 'Resource', value: 'R'},
                                    {label: 'Property', value: 'P'},
                                    {label: 'Dataset-Resource', value: 'DR'},
                                    {label: 'Dataset-Property', value: 'DP'},
                                    {label: 'Resource-Property', value: 'RP'},
                                    {label: 'Dataset-Resource-Property', value: 'DRP'},
                                ],
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset',
                                instances: [{value: 'http://exampleDataset.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Dataset URI under which the property is exposed.'],
                                label: ['Dataset']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        }
                    ]
                },
                'http://xmlns.com/foaf/0.1/organization': {
                    label: ['Organization'],
                    allowNewValue: 1,
                    objectIViewer: ['BasicDBpediaView'],
                    objectIEditor: ['DBpediaInput']
                }
            },
            //for mappings
            'http://ld-r.org/mappings': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#csvFile': {
                    readOnlyProperty: 1,
                    label: ['CSV File']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#skippedColumns': {
                    allowNewValue: 1,
                    allowPropertyDelete: 1,
                    label: ['Skipped Columns'],
                    hint: ['The selected columns will not be included in the generated RDF file.']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#idColumn': {
                    label: ['ID Column'],
                    hint: ['A combination of this column and the resource prefix will be used to create URIs for the entities.']
                },
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    readOnlyProperty: 1,
                    isHidden: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#entityType': {
                    objectIEditor: ['PrefixBasedInput'],
                    objectIViewer: ['PrefixBasedView'],
                    includeOnly: ['classes']
                }
            },
        },
        resource_property: {

        },
        //---------depth 3------------
        dataset_resource_property: {

        }
    }
};