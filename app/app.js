
            angular.module('mainApp',[])
                    .controller('mainController',function($scope,$rootScope,$http,marketDataService){
                        $scope.stockRate = 0;
                        $scope.title="Upstox";
                        $scope.tabs = marketDataService.getTabs();
                        $scope.tableData = marketDataService.getMarketInfo();

                        //Split it into half
                        $scope.marketDataColumn1 = $scope.tableData.slice(0,4);
                        $scope.marketDataColumn2 = $scope.tableData.slice(4);

                        $scope.initChart = function() {
                            var data = {
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                series: [
                                    [3,5,6,1,8,5,6]
                                ],  
                            };
                            var options = {
                            low:0,
                            high:9,
                            showLine: false,
                            showArea: true,
                            showPoint: false,
                            fullWidth: false,
                            axisX: {
                                showGrid: false,
                                showLabel: false,
                            },
                            axisY: {
                                showGrid: false
                            }
                            };
                            new Chartist.Line('.ct-chart', data,options);
                        }

						// var socket = io.connect('http://kaboom.rksv.net');
                        var socket = io();
                       /* socket.on('connect', function () {
							$scope.messages.push('socket id:  '+socket.id);
							$scope.messages.push('is socket connected:  '+socket.connected);
							$scope.messages.push('is socket disconnected:  '+socket.disconnected);
							$scope.$apply();
                        });*/
                        socket.on("data", function (data) {
                           $scope.stockRate = data;
						   $scope.$apply();
                        });

                        // Display hardcoded chart               
                        $scope.initChart();
                    });