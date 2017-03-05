var GDLPark = angular.module("GDLPark");



var finishModalInstanceCtrl = GDLPark.controller('FinishModalInstanceCtrl',['total','$uibModalInstance',
    function( total,$uibModalInstance){
        var self = this;
        self.total = total;
    }
]); 