'use strict';
class AutocompleteUtil{

    parseProperties(body) {
        let parsed = JSON.parse(body);
        let output=[];
        if(parsed.results.bindings.length){
            parsed.results.bindings.forEach(function(el) {
                output.push({title: el.property.value});            
            });
            return output;
        }
    }

}
export default AutocompleteUtil;
