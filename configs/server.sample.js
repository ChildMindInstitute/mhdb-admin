//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'http://51.68.79.244:7200': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'project_test': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'person': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'group': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'organization': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'bibliographic_resource': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'classes': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'http://ld-r.org/users': {
            host: '51.68.79.244', port: 7200, path: '/repositories/users', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'admin': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'projects_prod': {
            host: '51.68.79.244', port: 7200, path: '/repositories/prod', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'chills_papers': {
           host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'chills_claims': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'chills_researchers': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
        'chills_stimulus': {
            host: '51.68.79.244', port: 7200, path: '/repositories/test', graphName: 'default', endpointType: 'graphdb', username: 'admin', password: 'admin'
        },
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    dbpediaSpotlightService: [
        { host: 'api.dbpedia-spotlight.org', port: 80, path: '/en/annotate' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};