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
        'chills': {
            list: ['http://www.purl.org/mentalhealth/chills#hasArticleType',
                'http://www.purl.org/mentalhealth/chills#hasPrimaryResearcher',
                'http://www.purl.org/mentalhealth/chills#hasStimulusCategory',
                'http://www.purl.org/mentalhealth/chills#hasSensor',
                'http://www.purl.org/mentalhealth/chills#hasUnit'],
            config: {
                'http://www.purl.org/mentalhealth/chills#hasArticleType': {
                    hasLinkedValue: 1,
                    label: ['Article type'],
                },
                'http://www.purl.org/mentalhealth/chills#hasPrimaryResearcher': {
                    hasLinkedValue: 1,
                    label: ['Primary researcher'],
                },
                'http://www.purl.org/mentalhealth/chills#hasStimulusCategory': {
                    hasLinkedValue: 1,
                    label: ['Stimulus Category'],
                },
                'http://www.purl.org/mentalhealth/chills#hasSensor': {
                    hasLinkedValue: 1,
                    label: ['Sensor'],
                },
                'http://www.purl.org/mentalhealth/chills#hasUnit': {
                    hasLinkedValue: 1,
                    label: ['Unit'],
                },
            }
        },
    }
};
