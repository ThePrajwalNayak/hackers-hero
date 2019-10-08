(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        {{ user.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        Hacker since 1957\n        <!-- {{ information.Year }} -->\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content text-center>\n      <img [src]=\"user.avatar_url\" class=\"info-img\">\n      {{ user.avatar_url }}\n\n      <ion-item>\n        <ion-label text-wrap>\n          Followers\n          <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n        </ion-label>\n        <ion-button (click)=\"openModal(FOLLOWERS)\">Open</ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label text-wrap>\n          Following\n          <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n        </ion-label>\n        <ion-button (click)=\"openModal(FOLLOWING)\">Open</ion-button>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button expand=\"block\" routerLink=\"/user\" routerDirection=\"forward\">\n    Back\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");







var routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]
    }
];
var UserDetailsPageModule = /** @class */ (function () {
    function UserDetailsPageModule() {
    }
    UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
        })
    ], UserDetailsPageModule);
    return UserDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





var UserDetailsPage = /** @class */ (function () {
    function UserDetailsPage(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.repos = [];
        this.FOLLOWERS = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWERS;
        this.FOLLOWING = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWING;
        this.followersArray = [];
        this.followingArray = [];
    }
    UserDetailsPage.prototype.ngOnInit = function () {
        this.user = this.userService.getSelectedUser();
        this.getRepoDetails();
        this.getFollower();
        this.getFollowing();
    };
    UserDetailsPage.prototype.getRepoDetails = function () {
        var _this = this;
        this.userService.getRepoDetails(this.user.login)
            .subscribe(function (data) {
            _this.repos = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.getFollower = function () {
        var _this = this;
        this.userService.getFollower(this.user.login)
            .subscribe(function (data) {
            _this.followersArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.getFollowing = function () {
        var _this = this;
        this.userService.getFollowing(this.user.login)
            .subscribe(function (data) {
            _this.followingArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.openModal = function (modalType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var input, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            'user': null,
                            'users': null,
                            'modalType': null
                        };
                        if (modalType === this.FOLLOWERS) {
                            input.user = this.user,
                                input.users = this.followersArray;
                            input.modalType = this.FOLLOWERS;
                        }
                        else {
                            input.user = this.user,
                                input.users = this.followingArray;
                            input.modalType = this.FOLLOWING;
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__["FollowersFollowingModalPage"],
                                componentProps: input
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                var dataReturnedModal = dataReturned.data;
                                //alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserDetailsPage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html"),
            styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-details-user-details-module-es5.js.map