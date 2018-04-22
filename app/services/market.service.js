angular.module('mainApp')
        .factory('marketDataService',function(){
                        var marketData = this;

                        // Can be hardcoded to return from json file
                        // Tabular Data
                        marketData.getMarketInfo = function(){
                            return [
                                {
                                label: 'Day High',
                                value: '$368.17'
                            },
                            {
                                label: 'Open',
                                value: '$368.17'
                            },
                            {
                                label: 'Avg. Volume',
                                value: '58.6m'
                            },
                            {
                                label: '52wk High',
                                value: '$368.17'
                            },
                            {
                                label: 'Day Low',
                                value: '$368.17'
                            },
                            {
                                label: 'Today\'s Close',
                                value: '$368.17'
                            },
                            {
                                label: 'Volume',
                                value: '41.8m'
                            },
                            {
                                label: '52wk Low',
                                value: '$368.17'
                            }
                            ]
                        }

                        // Return the tabs
                        marketData.getTabs = function(){
                            return ['1D','1M','3M','YTD','1Y','ALL'];
                        }
                        return marketData;
                    });