        angular.module('mainApp')
                .directive('marketInfoTable',function(){
                        return {
                            restrict: 'E',
                            templateUrl: '/app/components/market-info-table/market-info-table.html',
                            scope: {
                                marketdata: '=marketData'
                            },
                            link: function(scope){
                            }
                        }
                    });