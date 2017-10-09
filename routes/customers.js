module.exports = (function () {
    //var
    var sql = require('mssql');
    var path = require('path');
    var pc = {};


    function handleCustomerGet(req, res) {
        sql.connect(pc.config).then(function () {
            var sqlRequest = new sql.Request();
            sqlRequest.query('SELECT CustomerData.* from [CustomerData]').then(function (recordsets) {
                var customers = recordsets.recordset;
                var customersData = customers.map(function (customer, idx) {
                    return {
                        name: customer.name,
                        id: customer.id,
                        country: customer.country,
                        total_orders: customer.total_orders
                    };
                });
                sql.close();
                res.send(customersData);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }


    function init(routeConfig) {
        pc.config = routeConfig.dbConfig;
        routeConfig.app.get('/customer', handleCustomerGet)

    }
    return{
        init:init
    }
})();