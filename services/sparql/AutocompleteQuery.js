'use strict';
class AutocompleteQuery{
    constructor() {
        this.prefixes=`
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        `;
        this.query='';
    }
    getPrefixes() {
        return this.prefixes;
    }
    getAllProperties () {
        this.query='\
        SELECT * { \
            ?property a rdf:Property ; \
        }';
        return this.query;
    }
}
export default AutocompleteQuery;
