module.exports=(function(){
    //var
    var customers=require('./customers');
    
    //declare init
    function init(routeConfig)
    {
        customers.init(routeConfig);
    }

    //return
    return {
        init:init
    }
})();

