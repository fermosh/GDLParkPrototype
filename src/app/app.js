var GDLPark = angular.module("GDLPark",['ui.bootstrap']);

GDLPark.config(function($sceProvider) {
    $sceProvider.enabled(false);
 });

var finishModalFactory = GDLPark.factory( 'finishModal' , finishModal );

function finishModal($uibModal) {
        var service = {
            open: open
        };

        return service;

        ////////////////

        function open(total) {
            const modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'finishModal.html',
                controller: 'FinishModalInstanceCtrl',
                controllerAs: 'finishModal',
                resolve: {
                    total: () => total
                }
            });
            return modalInstance;
        }
}

var index = GDLPark.controller(
    "IndexController" ,['$uibModal' , 'finishModal' , function($uibModal,finishModal){
        var self = this;
        self.title="GDL Park!";
        self.plates= "VSD5487";
        self.mapLink = "http://www.openstreetmap.org/export/embed.html?bbox=-103.48172664642335%2C20.622233653102455%2C-103.47967207431795%2C20.623634416896454&amp;layer=mapnik&amp;marker=20.622933200044788%2C-103.48069950000001";
        self.parkedAt = null;
        self.parked = false;
        self.maxParking = 120;
        self.availableStays = function(){ return [15,30,60,120]};
        self.stay = 0;
        self.parkedUntil = null;
        self.parkedFrom = null;
        self.formattedPU = function(){ return self.parkedUntil.format('LTS'); }
        self.park = function(){
            self.parked = true;
            if( self.parkedUntil === null ){
                self.parkedUntil = moment().add(self.stay, 'm');
                self.parkedFrom = moment();
            }else{
                self.parkedUntil = self.parkedUntil.add(self.stay, 'm');
            }
            self.stay = 0;
            parkedAt = "https://www.openstreetmap.org/?mlat=20.62528&amp;mlon=-103.48080#map=18/20.62528/-103.48080";
        }
        self.select = function(stay){
            self.stay = stay;
        }
        self.finish = function(){
            self.showFinish();
            self.parked = null;
            self.parkedFrom = null;
            self.parkedUntil = null;
        }
        self.showFinish = function (size, parentSelector) {
            finishModal.open(3215.32);
        }
    }]
);




