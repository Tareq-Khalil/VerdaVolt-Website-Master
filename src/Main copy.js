var MyApplication = angular.module("MyApplication", ["MyServiceModule", "MyFactoryModule"]);
MyApplication.controller("MyController", function ($scope, $http, $timeout, MyService, MyFactory) {

//======== Alihan's Code =============//

    $scope.BannerData = [];
    $scope.BannerDataLower = [];
    $scope.RecentEventsData = [];
    $scope.Reviews = [];
    $scope.OurBlog = [];
    $scope.OurStaff = [];
    $scope.OurBestRooms = [];
    $scope.Facilities = [];
    $scope.Welcome = [];
    $scope.OurFacilities = [];

    $scope.SetData = function () {
        $scope.BannerData = BannerData;
        $scope.BannerDataLower = BannerDataLower;
        $scope.RecentEventsData = RecentEventsData;
        $scope.Reviews = Reviews;
        $scope.OurBlog = OurBlog;
        $scope.OurStaff = OurStaff;
        $scope.OurBestRooms = OurBestRooms;
        $scope.Facilities = Facilities;
        $scope.Welcome = Welcome;
        $scope.OurFacilities = OurFacilities;
    };

    $scope.EventPreventer;
    $scope.EventPreventer = function () {
        MyService.DoEventPreventer();
    };

    $scope.LoginOpen = function () {
        MyService.DoLoginOpen();
    };
    $scope.LoginClose = function () {
        MyService.DoLoginClose();
    };

    $scope.AddToBasket = function () {
        MyService.DoAddToBasket();
    };
    $scope.ClearBasket = function () {
        MyService.DoClearBasket();
    };

    $scope.BasketList = [];
    $scope.AddToBasketList = function (iIndex) {
        $scope.BasketList.push(SliderData[iIndex]);
        console.log($scope.BasketList);
    };

    $scope.PaymentScreenOpen = function () {
        MyService.DoPaymentScreenOpen();
    }
    $scope.PaymentScreenClose = function () {
        MyService.DoPaymentScreenClose();
    }

    $scope.RandomCouponCode = function () {
        MyFactory.DoRandomCouponCode();
    }

    $scope.CouponLuck = function () {
        MyService.DoCouponLuck();
    }

    // -----------Zeynep's code----------------------

    $scope.BasketList = [];
    $scope.BasketPriceList = [];
    $scope.result = 0;

    $scope.AddToBasket = function () {
        MyService.AddToBasket();
    };
    $scope.ClearBasket = function () {
        MyService.ClearBasket();
    };

    $scope.AddItems = function (iIndex) {
        MyService.AddItems(iIndex);
    };

    $scope.ChangeCounter = function (iIndex) {
        MyService.ChangeCounter(iIndex);
    };

    $scope.AddToBasketList = function (iIndex) {
        if ($scope.BasketList.indexOf(OurBestRooms[iIndex]) == -1) {
            $scope.BasketList.push(OurBestRooms[iIndex]);
        }
        console.log($scope.BasketList);
    };

    $scope.ClearBasket = function () {
        MyService.ClearBasket();
        $scope.i = 0;
        for ($scope.i = $scope.BasketList.length; $scope.i > 0; $scope.i--) {

            $scope.BasketList.pop();
        };
        console.log($scope.BasketList)
        for ($scope.i = $scope.BasketPriceList.length; $scope.i > 0; $scope.i--) {

            $scope.BasketPriceList.pop();
        };
    };

    $scope.ShowSimpleSweetAlert = function (iIndex) {
        $scope.OurBestRooms = OurBestRooms;
        Swal.fire(
            'Success!',
            `"${OurBestRooms[iIndex].Room}" has been added to your card.`,
            'success'
        );
    };

    $scope.FindBasketPrice = function (iIndex) {
        MyService.FindBasketPrice(iIndex);
    };

    $scope.FindOrderSummary = function () {

        MyService.FindOrderSummary();
    };

    $scope.FindDiscount = function () {

        MyService.FindDiscount();
    };

    $scope.FindTotalAmount = function () {
        MyService.FindTotalAmount();
    };

    $scope.FindTotalAmountWithDiscount = function () {
        MyService.FindTotalAmountWithDiscount();
    };

    $scope.ChangeCheckOutQuantity = function () {
        MyService.ChangeCheckOutQuantity();
    };

    $scope.ShowAlertWrongCouponCode = function () {
        MyService.ShowAlertWrongCouponCode();
    };


    // <! ---- Mustafa --- !> //

    $scope.checkFormRegister = function () {
        MyService.DoCheckFormRegister();
    }
    $scope.checkLogin = function () {
        MyService.DoCheckLogin();

    }
    $scope.AccountPageOpen = function () {
        MyService.MyAccountPageOpen();
    }
    $scope.AccountPageClose = function () {
        MyService.MyAccountPageClose();
    }
    $scope.ShowUserInformations = function () {
        MyService.DoShowUserInformations();
    }
    $scope.ChangeMyPassword = function () {
        MyService.DoChangeUserPassword();
    }
    $scope.ChangeMailAdress = function () {
        MyService.DoChangeMailAdress();
    }
    $scope.ChangeOldPassword = function () {
        MyService.DoChangeOldPassword();
    }
    $scope.ShowMyAccountPage = function () {
        MyService.DoShowMyAccountPage();
    }



    $scope.Hello = function () {
        MyService.HelloWorld();
    }

});