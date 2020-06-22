export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0,
                    position: 3
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 4
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 5
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
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
                    position: 2
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    position: 6
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Creator'],
                    position: 7
                }
            }
        },
        'project_test': {
            list: ['http://www.purl.org/mentalhealth/mhdb-resources#hasProjectCategory', 
            'http://www.purl.org/mentalhealth/mhdb-resources#isMaintainedByGroup'],
            config: {
                'http://www.purl.org/mentalhealth/mhdb-resources#hasProjectCategory': {
                    label: ['Category'],
                    hasLinkedValue: 1
                },
                'http://www.purl.org/mentalhealth/mhdb-resources#isMaintainedByGroup': {
                    label: ['Group'],
                    hasLinkedValue: 1
                },
            }
        },
        'group': {
            list: ['http://www.purl.org/mentalhealth/mhdb-resources#hasMember', 
            'http://www.purl.org/mentalhealth/mhdb-resources#isGroupMemberOf',
            'http://www.purl.org/mentalhealth/mhdb-resources#hasProjectCategory'],
            config: {
                'http://www.purl.org/mentalhealth/mhdb-resources#hasMember': {
                    label: ['Members'],
                    hasLinkedValue: 1
                },
                'http://www.purl.org/mentalhealth/mhdb-resources#isGroupMemberOf': {
                    label: ['Member of'],
                    hasLinkedValue: 1
                },
                'http://www.purl.org/mentalhealth/mhdb-resources#hasProjectCategory': {
                    label: ['Project category'],
                    hasLinkedValue: 1
                },
            }
        },
        'organization': {
            list: ['http://www.purl.org/mentalhealth/mhdb-resources#hasMember', ],
            config: {
                'http://www.purl.org/mentalhealth/mhdb-resources#hasMember': {
                    label: ['Members'],
                    hasLinkedValue: 1
                }
            }
        },
        'bibliographic_resource': {
            list: ['http://www.purl.org/mentalhealth/mhdb-resources#hasLanguage', 
            'http://www.purl.org/mentalhealth/mhdb-resources#hasPublisher',
            'http://www.purl.org/mentalhealth/mhdb-resources#hasReferenceType'],
            config: {
                'http://www.purl.org/mentalhealth/mhdb-resources#hasLanguage': {
                    label: ['Language'],
                    hasLinkedValue: 1
                },
                'http://www.purl.org/mentalhealth/mhdb-resources#hasPublisher': {
                    label: ['Publisher'],
                    hasLinkedValue: 1
                },
                'http://www.purl.org/mentalhealth/mhdb-resources#hasReferenceType': {
                    label: ['Type'],
                    hasLinkedValue: 1
                },
            }
        },
        'classes': {
            list: ['http://www.w3.org/2000/01/rdf-schema#subClassOf'],
            config: {
                'http://www.w3.org/2000/01/rdf-schema#subClassOf': {
                    label: ['Class'],
                    hasLinkedValue: 1
                },
            }
        },
        'admin': {
            list: ['https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#isPendingCreate', 
                    'https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#isPendingDelete',
                    'https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#hasPropertyPendingDelete',
                    'https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#hasPropertyPendingCreate',
                    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'],
            config: {
                'https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#isPendingCreate': {
                    
                },
                'https://github.com/charlie42/ld-r-mhdb/blob/master/vocabulary/ld-r-mhdb.ttl#isPendingDelete': {
                    
                },
            }
        },
    }
};
