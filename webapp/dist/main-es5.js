var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking/booking.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking/booking.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>booking works!</p> -->\n<div class=\"container\">\n    <div class=\"card mt-4\">\n        <div class=\"text-center\">\n            <h1 class=\"mt-4 ml-4 mb-4\">Booking Details</h1>\n            <h5 class=\"mt-3\">Name : {{vehicle?.name}}</h5>\n            <h5 class=\"mt-3\"> Model : {{vehicle?.model}}</h5>\n            <h5 class=\"mt-3\">Registration Number : {{vehicle?.number}}</h5>\n            <h5 class=\"mt-3\"> Rent : {{vehicle?.rent}}/hr</h5>\n        </div>\n        <form [formGroup]=\"bookingForm\" (ngSubmit)=\"onSaveClick()\">\n            <div class=\"container-fluid\">\n                <div class=\"alert alert-success mt-2  ml-4 mr-4\" *ngIf=\"saved && !errorMsg\" role=\"alert\">\n                    Booking details saved successfully.\n                </div>\n                <div class=\"alert alert-danger mt-2  ml-4 mr-4\" *ngIf=\"errorMsg\" role=\"alert\">\n                    Please check the booking date.\n                </div>\n                <div>\n                    <div class=\"form-row ml-3 mr-3 mb-4\">\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4\">\n                            <label for=\"startDate\">\n                                <h5>Start Date </h5>\n                            </label>\n                            <input type=\"datetime-local\" class=\"form-control\" formControlName=\"startDate\"\n                                [min]=\"presentDate | date:'yyyy-MM-ddTHH:mm'\" id=\"startDate\" placeholder=\"dd/MM/yyyy\">\n                            <div class=\"form-text text-danger\"\n                                *ngIf=\"((startDate.invalid) && (startDate.touched || startDate.dirty))\" id=\"startDate\">\n                                <small *ngIf=\"startDate.errors.required\" class=\"error\">Start Date is\n                                    Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4\">\n                            <label for=\"endDate\">\n                                <h5>End Date </h5>\n                            </label>\n                            <input type=\"datetime-local\" class=\"form-control\"\n                                [min]=\"presentDate | date:'yyyy-MM-ddTHH:mm'\" formControlName=\"endDate\" id=\"endDate\"\n                                placeholder=\"dd/MM/yyyy\">\n                            <div class=\"form-text text-danger\"\n                                *ngIf=\"((endDate.invalid) && (endDate.touched || endDate.dirty))\" id=\"endDate\">\n                                <small *ngIf=\"endDate.errors.required\" class=\"error\">End Date is\n                                    Required</small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4\" *ngIf=\"isBooked && !errorMsg\">\n                            <label for=\"total\">\n                                <h5>Total </h5>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"total\" id=\"total\" [readonly]=\"hide()\">\n                        </div>\n                    </div>\n                    <ul class=\"pagination row justify-content-center\">\n                        <li class=\"page-item\"><button class=\"btn btn-danger\" routerLink=\"/vehicle\">BACK</button></li>\n                        <li class=\"page-item ml-3\"><button type=\"submit\" class=\"btn btn-dark\"\n                                [disabled]=\"!bookingForm.valid && errorMsg\">BOOK</button>\n                        </li>\n                    </ul>\n                    <ul class=\"pagination row justify-content-center\">\n                        <li class=\"page-item\">\n                            <button class=\"btn btn-dark\" *ngIf=\"isBooked\" [disabled]=\"errorMsg\" (click)=\"next()\">NEXT\n                            </button>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/my-booking/my-booking.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/my-booking/my-booking.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>my-booking works!</p> -->\n<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12 col-lg-7\">\n            <div class=\"h1\">My Bookings</div>\n            <div class=\"row d-flex justify-content-between\" *ngIf=\"(bookingCancel && msg)\">\n                <div class=\"col-12 mt-3 alert alert-danger\">\n                    Booking Cancelled. Rs.{{bookingTotal}} is Refunded.\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-between\" *ngIf=\"(bookings==0 || bookings==null) && !(bookingCancel && msg)\">\n                <div class=\"col-12 mt-3 alert alert-info\">\n                    No Bookings yet. Continue Booking...\n                </div>\n            </div>\n            <div class=\"card\" *ngIf=\"bookings!=0 && bookings!=null\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let booking of bookings\">\n                        <div class=\"row text-muted mr-2 ml-2\">\n                            <span class=\"h3\">{{booking?.vehicle?.name}}</span>\n                            <span class=\" text-info h6 mt-2 ml-auto\">\n                                Rs.{{booking?.total}}\n                                <div class=\"row text-muted mt-2 mr-2 ml-auto\">\n                                    <a>\n                                        <div class=\"btn-group\">\n                                            <button type=\"button\" class=\"btn btn-success\"\n                                                (click)=\"onCancelling(booking)\">\n                                                Cancel\n                                            </button>\n                                        </div>\n                                    </a>\n                                </div>\n                            </span>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/payment/payment.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/payment/payment.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>payment works!</p> -->\n<form [formGroup]=\"paymentForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"container-fluid\">\n        <h1 class=\"mt-4 ml-4\">Vehicle Details</h1>\n        <!-- <div class=\"alert alert-info mt-2  ml-4 mr-4\" *ngIf=\"foodEdited\"  *ngIf=\"saved\" role=\"alert\"> -->\n        <div class=\"alert alert-success mt-2  ml-4 mr-4\" *ngIf=\"saved\" role=\"alert\">\n            Payment successfull.\n        </div>\n        <div class=\"alert alert-danger mt-2  ml-4 mr-4\" *ngIf=\"error == 'Insufficient Balance Exception'\" role=\"alert\">\n            Insufficient Balance...\n        </div>\n        <div class=\"alert alert-danger mt-2  ml-4 mr-4\" *ngIf=\"error == 'Account Not Found Exception'\" role=\"alert\">\n            Check Card Credentials...\n        </div>\n        <div class=\"form-row mt-4 ml-4 mr-4\">\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"cardNumber\">\n                    <h5>Card No.</h5>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"cardNumber\" id=\"cardNumber\">\n                <!-- <div class=\"form-text text-danger\"\n                    *ngIf=\"((cardNumber.invalid) && (cardNumber.touched || cardNumber.dirty))\" id=\"cardNumber\">\n                    <small *ngIf=\"cardNumber.errors.required\" class=\"error\">Card No. is Required</small>\n                </div> -->\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"cvvNumber\">\n                    <h5>CVV No.</h5>\n                </label>\n                <input type=\"text\" class=\"form-control \" formControlName=\"cvvNumber\" id=\"cvvNumber\">\n                <!-- <div class=\"form-text text-danger\"\n                    *ngIf=\"((cvvNumber.invalid) && (cvvNumber.touched || cvvNumber.dirty))\" id=\"cvvNumber\">\n                    <small *ngIf=\"cvvNumber.errors.required\" class=\"error\"> cvv Number is Required</small>\n                </div> -->\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"expiryDate\">\n                    <h5>Expiry Date</h5>\n                </label>\n                <input type=\"date\" class=\"form-control \" formControlName=\"expiryDate\" id=\"expiryDate\"\n                    placeholder=\"dd/MM/yyyy\">\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"total\">\n                    <h5>Total</h5>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"total\" id=\"total\" [readonly]=\"hide()\">\n            </div>\n            <div class=\"form-group col\">\n                <ul class=\"pagination row justify-content-center\">\n                    <li class=\"page-item\"><button class=\"btn btn-dark\" routerLink=\"/vehicle\">CANCEL</button></li>\n                    <li class=\"page-item ml-3\"><button type=\"submit\" class=\"btn btn-danger\">Pay</button>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/header/header.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/header/header.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>header works!</p> -->\n<nav class=\"navbar navbar-expand-lg opacity navbar-dark\">\n    <a [routerLink]=\"['/vehicle']\"><i class=\"material-icons mb-2 size text-light\">directions_car</i></a>\n    <h3 class=\"text-light mr-auto ml-2\">Go-Kart</h3>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\" *ngIf=\"!isAuthenticated()\">\n                <a class=\"nav-link\" routerLink=\"login\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                            Login\n                        </button>\n                    </div>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isAuthenticated()\">\n                <a class=\"nav-link\" routerLink=\"signup\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                            Register\n                        </button>\n                    </div>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthenticated()\">\n                <a class=\"nav-link\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger\">\n                            <i class=\"material-icons\">account_box</i>\n                            <span class=\"font-weight-bold\">{{user()}}</span>\n                        </button>\n                    </div>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthenticated() || logged\">\n                <a class=\"nav-link\" routerLink=\"vehicle\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                            Vehicles\n                        </button>\n                    </div>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthenticated() && role() != 'ADMIN'\">\n                    <a class=\"nav-link\" routerLink=\"my-booking\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                                My Booking \n                            </button>\n                        </div>\n                    </a>\n                </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthenticated() && role() == 'ADMIN'\">\n                <a class=\"nav-link\" routerLink=\"view-request\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                            Requests\n                        </button>\n                    </div>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isAuthenticated()\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"onSignOut()\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-danger font-weight-bold\">\n                            Logout\n                        </button>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>login works!</p> -->\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-12 col-lg-7\">\n        <div class=\"card mt-4 mb-5\">\n          <div class=\"card-title h1 ml-4 mt-4\">Login</div>\n          <!-- <div class=\"alert alert-danger mt-2  ml-4 mr-4\" role=\"alert\" *ngIf=\"!isLoginValid\">\n              Invalid Username / Password\n            </div> -->\n          <div class=\"alert alert-success mt-2  ml-4 mr-4\" role=\"alert\" *ngIf=\"status\">\n            Logged in Successfully...\n          </div>\n          <div class=\"alert alert-danger mt-2  ml-4 mr-4\" role=\"alert\" *ngIf=\"!isLoginValid\">\n            Invalid Username/Password\n          </div>\n          <div class=\"form-row mt-2 ml-4 mr-4\">\n            <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\n              <label for=\"name\">\n                <span>User Id</span>\n              </label>\n              <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"name\" placeholder=\"Enter Username\">\n              <small id=\"name\" *ngIf=\"((username.invalid) && (username.touched || username.dirty))\">\n                <div *ngIf=\"(username.errors.required)\" class=\"form-text text-danger\">Username is required</div>\n                <div *ngIf=\"(username.errors.pattern)\" class=\"form-text text-danger\">Username should not contain symbols\n                </div>\n              </small>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\"\n                placeholder=\"Enter Password\">\n              <small id=\"password\" *ngIf=\"((password.invalid) && (password.touched || password.dirty))\">\n                <div *ngIf=\"password.errors.required\" class=\"form-text text-danger\">Password is required</div>\n              </small>\n            </div>\n            <div class=\"form-group col\">\n              <a>\n                <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-danger\">\n                  <span class=\"text-light font-weight-bold\">Login</span>\n                </button>\n              </a>\n              <span class=\"float-right\"> New here?\n                <a [routerLink]=\"['/signup']\">\n                  Register\n                </a>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\n    signup works!\n</p> -->\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center mt-5\">\n            <div class=\"col-sm-12 col-lg-7\">\n                <div class=\"card mt-4 mb-5\">\n                    <div class=\"card-title h1 ml-4 mt-4\">Register</div>\n                    <ul class=\"nav nav-tabs nav-fill nav-justified mb-3\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link bg-dark text-light\" data-toggle=\"pill\" href=\"#\" role=\"tab\"\n                                aria-controls=\"pills-user\" aria-selected=\"true\" (click)=\"addRoleUser()\">User </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link bg-light text-dark\" data-toggle=\"pill\" href=\"#\" role=\"tab\"\n                                aria-controls=\"pills-admin\" aria-selected=\"false\" (click)=\"addRoleAdmin()\">Admin </a>\n                        </li>\n                    </ul>\n                    <div class=\"alert alert-info mt-2  ml-4 mr-4\" *ngIf=\"isExist()\" role=\"alert\">\n                        User Already Exist.\n                    </div>\n                    <div class=\"form-row mt-2 ml-4 mr-4\">\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"userName\">\n                                <span class=\"size\">User Id</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"userName\" id=\"userName\"\n                                placeholder=\"Enter username\">\n                            <div>\n                                <small id=\"userName\" *ngIf=\"((userName.invalid) && (userName.touched || userName.dirty))\">\n                                    <div *ngIf=\"(userName.errors.required)\" class=\"form-text text-danger\">User Id is\n                                        required</div>\n                                    <div *ngIf=\"userName.errors.minlength\" class=\"text-danger\">\n                                        <div> It must be at least 4 characters long </div>\n                                    </div>\n                                    <div *ngIf=\"userName.errors.maxlength\" class=\"text-danger\">\n                                        <div> It not exceed 20 characters long</div>\n                                    </div>\n                                    <div *ngIf=\"userName.errors.pattern\" class=\"text-danger\">\n                                        <div> It should not contain symbols</div>\n                                    </div>\n                                </small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row mt-2 ml-4 mr-4\">\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"firstName\">\n                                <span class=\"size\">First Name</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" id=\"firstName\"\n                                placeholder=\"Enter First Name\">\n                            <div>\n                                <small id=\"firstName\"\n                                    *ngIf=\"((firstName.invalid) && (firstName.touched || firstName.dirty))\">\n                                    <div *ngIf=\"(firstName.errors.required)\" class=\"form-text text-danger\">First Name is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"firstName.errors.minlength\" class=\"text-danger\">\n                                        <div>Name must be at least 4 characters long</div>\n                                    </div>\n                                    <div *ngIf=\"firstName.errors.maxlength\" class=\"text-danger\">Name not exceed\n                                        <div>20 characters long</div>\n                                    </div>\n                                    <div *ngIf=\"firstName.errors.pattern\" class=\"text-danger\">\n                                        <div> First name should not contain numbers or symbols</div>\n                                    </div>\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"lastName\">\n                                <span class=\"size\">Last Name</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" id=\"lastName\"\n                                placeholder=\"Enter Last Name\">\n                            <div>\n                                <small id=\"lastName\"\n                                    *ngIf=\"((lastName.invalid) && (lastName.touched || lastName.dirty))\">\n                                    <div *ngIf=\"(lastName.errors.required)\" class=\"form-text text-danger\">Last Name is\n                                        required\n                                    </div>\n                                    <div *ngIf=\"lastName.errors.minlength\" class=\"text-danger\">\n                                        <div>Name must be at least 4 characters long</div>\n                                    </div>\n                                    <div *ngIf=\"lastName.errors.maxlength\" class=\"text-danger\">Name not exceed\n                                        <div>20 characters long</div>\n                                    </div>\n                                    <div *ngIf=\"lastName.errors.pattern\" class=\"text-danger\">\n                                        <div> Last name should not contain numbers or symbols</div>\n                                    </div>\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\" *ngIf=\"isAdmin\">\n                            <label for=\"branch\">\n                                <span class=\"size\">Branch</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"branch\" id=\"branch\"\n                                placeholder=\"Enter Branch\">\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"contactNo\">\n                                <span class=\"size\">Contact No</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"contactNo\" id=\"contactNo\"\n                                placeholder=\"Enter contact No \">\n                            <div>\n                                <small id=\"contactNo\"\n                                    *ngIf=\"((contactNo.invalid) && (contactNo.touched || contactNo.dirty))\">\n                                    <div *ngIf=\"contactNo.errors.required\" class=\"form-text text-danger\">Contact No is\n                                        required</div>\n                                    <!-- <div *ngIf=\"contactNumber.errors.minlength\" class=\"text-danger\">\n                                        <div> Enter a valid contact number</div>\n                                    </div>\n                                    <div *ngIf=\"contactNumber.errors.pattern\" class=\"text-danger\">\n                                        <div> It should not contain letters</div>\n                                    </div> -->\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"age\">\n                                <span class=\"size\">Age</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"age\" id=\"age\"\n                                placeholder=\"Enter age\">\n                            <div>\n                                <small id=\"age\" *ngIf=\"((age.invalid) && (age.touched || age.dirty))\">\n                                    <div *ngIf=\"(age.errors.required)\" class=\"form-text text-danger\">Age is\n                                        required</div>\n                                    <div *ngIf=\"age.errors.pattern\" class=\"text-danger\">\n                                        <div> It should not contain letters</div>\n                                    </div>\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                            <label for=\"gender\">\n                                <span class=\"size\">Gender</span>\n                            </label>\n                            <select id=\"gender\" formControlName=\"gender\" class=\"form-control\">\n                                <option value=\"\">Select</option>\n                                <option value=\"Male\">Male</option>\n                                <option value=\"Female\">Female</option>\n                                <option value=\"Others\">Others</option>\n                            </select>\n                            <div class=\"form-text text-danger\"\n                                *ngIf=\"((gender.invalid) && (gender.touched || gender.dirty))\" id=\"gender\">\n                                <small id=\"gender\" class=\"form-text text-danger\">\n                                    Select gender\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"emailId\">\n                                <span class=\"size\">Email Id</span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"emailId\" id=\"emailId\"\n                                placeholder=\"Enter Email Id\">\n                            <div>\n                                <small id=\"emailId\" *ngIf=\"((emailId.invalid) && (emailId.touched || emailId.dirty))\">\n                                    <div *ngIf=\"(emailId.errors.required)\" class=\"form-text text-danger\">Email-Id is\n                                        required</div>\n                                    <div *ngIf=\"(emailId.errors.pattern)\" class=\"form-text text-danger\">Check Email-Id\n                                        Format</div>\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\"\n                                placeholder=\"Enter Password\">\n                            <div>\n                                <small id=\"password\"\n                                    *ngIf=\"((password.invalid) && (password.touched || password.dirty))\">\n                                    <div *ngIf=\"password.errors.required\" class=\"form-text text-danger\">Password is\n                                        required</div>\n                                    <div *ngIf=\"password.errors.pattern\" class=\"text-danger\">\n                                        <div>\n                                            It must have At least 8 characters in length <br>\n                                            It must have atleast one lower-case letter <br>\n                                            It must have atleast one upper-case letter<br>\n                                            It must have numbers and special characters\n                                        </div>\n                                    </div>\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <label for=\"confirmPassword\">Confirm Password</label>\n                            <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\n                                id=\"confirmPassword\" placeholder=\"Enter Confirm Password\">\n                            <small id=\"confirmPassword\"\n                                *ngIf=\"((confirmPassword.invalid) && (confirmPassword.touched || confirmPassword.dirty))\">\n                                <div *ngIf=\"confirmPassword.errors.required\" class=\"form-text text-danger\">Confirm\n                                    Password is required\n                                </div>\n                            </small>\n                            <div>\n                                <small class=\"text-danger\" id=\"confirmPassword\"\n                                    *ngIf=\"(signupForm.get('password').value!=signupForm.get('confirmPassword').value)\">\n                                    Password should match\n                                </small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row mt-2 ml-4 mr-4\">\n                        <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                            <a>\n                                <button type=\"submit\"\n                                    class=\"btn btn-danger font-weight-bold\">\n                                    <span class=\"text-light\">Signup</span>\n                                </button>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/view-request/view-request.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/view-request/view-request.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>view-request works!</p> -->\n<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12 col-lg-7\">\n            <div class=\"h1\">Pending Requests</div>\n            <div class=\"row d-flex justify-content-between\" *ngIf=\"vanish && (user!=0 && user!=null)\">\n                <div class=\"col-12 mt-3 alert alert-success\">\n                    New user added successfully.\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-between\" *ngIf=\"msg && (user!=0 && user!=null)\">\n                <div class=\"col-12 mt-3 alert alert-danger\">\n                    Request Declined.\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-between\" *ngIf=\"!msg && !vanish && (user==0 || user==null)\">\n                <div class=\"col-12 mt-3 alert alert-info\">\n                    No Pending Request.\n                </div>\n            </div>\n            <div class=\"card\" *ngIf=\"user!=0 && user!=null\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let req of user\">\n                        <div class=\"row text-muted mr-2 ml-2\">\n                            <span class=\"h3\">{{req.userName}}</span>\n                            <span class=\" text-info h6 mt-2 ml-auto\" *ngFor=\"let role of req.roleList\">\n                                {{role.name}}\n                                <div class=\"row text-muted mt-2 mr-2 ml-auto\">\n                                    <a>\n                                        <div class=\"btn-group\">\n                                            <button type=\"button\" class=\"btn btn-success\"\n                                                (click)=\"onAcceptRequest(req)\">\n                                                Accept\n                                            </button>\n                                        </div>\n                                    </a>\n                                    <a>\n                                        <div class=\"btn-group\">\n                                            <button type=\"button\" class=\"btn btn-danger\"\n                                                (click)=\"onDeclineRequest(req)\">\n                                                Decline\n                                            </button>\n                                        </div>\n                                    </a>\n                                </div>\n                            </span>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/search/search.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/search/search.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>search works!</p> -->\n<!-- <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\"\n                src=\"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\"\n                alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\"\n                src=\"https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\"\n                alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\"\n                src=\"https://images.unsplash.com/photo-1506719040632-7d586470c936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\"\n                alt=\"Third slide\">\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div> -->\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container-fluid\">\n        <h1 class=\"display-4 text-light\">Find Vehicle</h1>\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend mb-5\">\n                <span class=\"input-group-text\" id=\"search\"><i class=\"material-icons\">search</i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Vehicle\" (input)=\"onSearchText($event)\">\n            <a [routerLink]=\"['/vehicle-edit']\" >\n                <button type=\"button\" *ngIf=\"role == 'ADMIN'\" class=\"btn btn-secondary\">\n                    <i class=\"material-icons text-light font-weight-bold\">add</i>\n                    <span class=\"text-light font-weight-bold\"> Add Vehicle</span>\n                </button>\n            </a>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-edit/vehicle-edit.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-edit/vehicle-edit.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>vehicle-edit works!</p> -->\n<form [formGroup]=\"editForm\" (ngSubmit)=\"onSaveClick()\">\n    <div class=\"container-fluid\">\n        <h1 class=\"mt-4 ml-4\">Vehicle Details</h1>\n        <!-- <div class=\"alert alert-info mt-2  ml-4 mr-4\" *ngIf=\"foodEdited\"  *ngIf=\"saved\" role=\"alert\"> -->\n        <div class=\"alert alert-info mt-2  ml-4 mr-4\" *ngIf=\"saved\" role=\"alert\">\n            Vehicle details saved successfully.\n        </div>\n        <div class=\"form-row mt-2 ml-4 mr-4\">\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                <label for=\"name\">\n                    <span>Vehicle Name</span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\">\n                <div class=\"form-text text-danger\" *ngIf=\"((name.invalid) && (name.touched || name.dirty))\" id=\"name\">\n                    <small *ngIf=\"name.errors.required\" class=\"error\">Vehicle Name is Required</small>\n                    <small *ngIf=\"name.errors.minlength\" class=\"error\">Vehicle Name must at least have 2\n                        characters.</small>\n                    <small *ngIf=\"name.errors.maxlength\" class=\"error\">Vehicle Name cannot exceed 200 characters</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\n                <label for=\"model\">\n                    <span>Vehicle Model</span>\n                </label>\n                <input type=\"text\" class=\"form-control \" formControlName=\"model\" id=\"model\">\n                <div class=\"form-text text-danger\" *ngIf=\"((model.invalid) && (model.touched || model.dirty))\"\n                    id=\"model\">\n                    <small *ngIf=\"model.errors.required\" class=\"error\">Vehicle Model is Required</small>\n                    <small *ngIf=\"model.errors.minlength\" class=\"error\">Vehicle Model must at least have 2\n                        characters.</small>\n                    <small *ngIf=\"model.errors.maxlength\" class=\"error\">Vehicle Model cannot exceed 200\n                        characters</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-row mt-2 ml-4 mr-4\">\n            <div class=\"form-group col\">\n                <label for=\"image\">Photo URL</label>\n                <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"imageUrl\">\n                <div class=\"validation-error text-danger\"\n                    *ngIf=\"editForm.get('imageUrl').touched && editForm.get('imageUrl').hasError('required')\">\n                    Photo URL is required</div>\n            </div>\n        </div>\n        <div class=\"form-row mt-2 ml-4 mr-4\">\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"rent\">\n                    <span>Rent </span>\n                </label>\n                <input type=\"text\" formControlName=\"rent\" class=\"form-control\" id=\"rent\">\n                <div class=\"form-text text-danger\" *ngIf=\"((rent.invalid) && (rent.touched || rent.dirty))\" id=\"rent\">\n                    <small *ngIf=\"rent.errors.required\" class=\"error\">Rent is Required</small>\n                    <small *ngIf=\"rent.errors.pattern\" class=\"error\">Rent can only contain numbers</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"mileage\">\n                    <span>Mileage (.in Km) </span>\n                </label>\n                <input type=\"text\" formControlName=\"mileage\" class=\"form-control\" id=\"mileage\">\n                <div class=\"form-text text-danger\" *ngIf=\"((mileage.invalid) && (mileage.touched || mileage.dirty))\"\n                    id=\"mileage\">\n                    <small *ngIf=\"mileage.errors.required\" class=\"error\">Mileage is Required</small>\n                    <small *ngIf=\"mileage.errors.pattern\" class=\"error\">Mileage can only contain numbers</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"number\">\n                    <span>Number Plate Details </span>\n                </label>\n                <input type=\"text\" formControlName=\"number\" class=\"form-control\" id=\"number\">\n                <div class=\"form-text text-danger\" *ngIf=\"((number.invalid) && (number.touched || number.dirty))\"\n                    id=\"number\">\n                    <small *ngIf=\"number.errors.required\" class=\"error\">Number Plate is Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"yearOfManufacture\">\n                    <span>Manufacture Date </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"yearOfManufacture\" id=\"yearOfManufacture\"\n                    placeholder=\"dd/MM/yyyy\">\n                <div class=\"form-text text-danger\"\n                    *ngIf=\"((yearOfManufacture.invalid) && (yearOfManufacture.touched || yearOfManufacture.dirty))\"\n                    id=\"yearOfManufacture\">\n                    <small *ngIf=\"yearOfManufacture.errors.required\" class=\"error\">Year Of Manufacture is\n                        Required</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"insuranceRenewalDate\">\n                    <span>Insurance Renewal Date </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"insuranceRenewalDate\" id=\"insuranceRenewalDate\"\n                    placeholder=\"dd/MM/yyyy\">\n                <div class=\"form-text text-danger\"\n                    *ngIf=\"((insuranceRenewalDate.invalid) && (insuranceRenewalDate.touched || insuranceRenewalDate.dirty))\"\n                    id=\"insuranceRenewalDate\">\n                    <small *ngIf=\"insuranceRenewalDate.errors.required\" class=\"error\">Insurance Renewal Date is\n                        Required</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"lastServiceDate\">\n                    <span>Last Service Date </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"lastServiceDate\" id=\"lastServiceDate\"\n                    placeholder=\"dd/MM/yyyy\">\n                <div class=\"form-text text-danger\"\n                    *ngIf=\"((lastServiceDate.invalid) && (lastServiceDate.touched || lastServiceDate.dirty))\"\n                    id=\"lastServiceDate\">\n                    <small *ngIf=\"lastServiceDate.errors.required\" class=\"error\">Last Service Date is\n                        Required</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"nextServiceDate\">\n                    <span>Next Service Date </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"nextServiceDate\" id=\"nextServiceDate\"\n                    placeholder=\"dd/MM/yyyy\">\n                <div class=\"form-text text-danger\"\n                    *ngIf=\"((nextServiceDate.invalid) && (nextServiceDate.touched || nextServiceDate.dirty))\"\n                    id=\"nextServiceDate\">\n                    <small *ngIf=\"nextServiceDate.errors.required\" class=\"error\">Next Service Date is\n                        Required</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"seater\">\n                    <span>Seater </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"seater\" id=\"seater\" placeholder=\"Enter seater\">\n                <div class=\"form-text text-danger\" *ngIf=\"((seater.invalid) && (seater.touched || seater.dirty))\"\n                    id=\"seater\">\n                    <small *ngIf=\"seater.errors.required\" class=\"error\">Seater is\n                        Required</small>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12 col-md-6 col-lg-3\">\n                <label for=\"vehicleType\">\n                    <span>Vehicle Type </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"vehicleType\" id=\"vehicleType\"\n                    placeholder=\"Enter Vehicle Type\">\n                <div class=\"form-text text-danger\"\n                    *ngIf=\"((vehicleType.invalid) && (vehicleType.touched || vehicleType.dirty))\" id=\"vehicleType\">\n                    <small *ngIf=\"vehicleType.errors.required\" class=\"error\">Vehicle Type is\n                        Required</small>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-row mt-2 ml-4 mr-4\">\n            <a href=\"#\">\n                <button type=\"submit\" class=\"btn btn-success font-weight-bold\" [disabled]=\"!editForm\">Save</button>\n            </a>\n        </div>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-info/vehicle-info.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-info/vehicle-info.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>vehicle-info works!</p> -->\n<div class=\"card mb-4 border-dark\">\n    <img src={{vehicle.imageUrl}} alt=\"Vehicles\" class=\"card-image-top\" height=300>\n    <div class=\"card-body\">\n        <div class=\"card-title font-weight-bold\">\n            <div class=\"d-flex\">\n                <div class=\"flex-shrink-1\">{{vehicle.name}}</div>\n                <div class=\"flex-grow-1\">\n                    <div class=\"text-danger font-weight-bold text-right\">&#8377;{{vehicle.rent | number}}/hr\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-subtitle mb-2 text-muted\">\n            <div class=\"d-flex\">\n                <div class=\"flex-shrink-1\">{{vehicle.model}}</div>\n                <div class=\"flex-grow-1\">\n                    <div class=\"text-dark font-weight-bold text-right\">{{vehicle.number}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-text mt-2\">\n            <div class=\"card-subtitle mb-2 text-muted\">\n                <div class=\"d-flex\">\n                    <div class=\"flex-shrink-1\">\n                        <i class=\"material-icons text-danger\">speed</i>\n                        {{vehicle.mileage}}km/l\n                    </div>\n                    <div class=\"flex-grow-1\">\n                        <div class=\"text-dark font-weight-bold text-right\">\n                            <i class=\"material-icons text-danger\">event_seat</i>\n                            {{vehicle.seater}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <ul class=\"nav nav-tabs nav-fill nav-justified mb-3\" *ngIf=\"role != 'ADMIN'\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link bg-dark font-weight-bold text-light\" [routerLink]=\"['/booking',vehicle.id]\" *ngIf=\"role != 'ADMIN'\" data-toggle=\"pill\"\n                        href=\"#\" role=\"tab\" aria-controls=\"pills-user\" aria-selected=\"true\">Book</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link bg-light font-weight-bold text-danger\" [routerLink]=\"['/vehicle']\"\n                        *ngIf=\"role != 'ADMIN'\" data-toggle=\"pill\" href=\"#\" role=\"tab\" aria-controls=\"pills-admin\"\n                        aria-selected=\"false\">Cancel</a>\n                </li>\n            </ul>\n            <ul class=\"nav nav-tabs nav-fill nav-justified mb-3\" *ngIf=\"role == 'ADMIN'\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link bg-dark font-weight-bold text-light\" *ngIf=\"role == 'ADMIN'\" data-toggle=\"pill\"\n                        href=\"#\" role=\"tab\" aria-controls=\"pills-user\" aria-selected=\"true\"\n                        [routerLink]=\"['/vehicle-edit',vehicle.id]\">\n                        <i class=\"material-icons text-light\">create</i>\n                        Edit\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link bg-light font-weight-bold text-danger\" (click)=\"onRemovingVehicle(vehicle.id)\"\n                        *ngIf=\"role == 'ADMIN'\" data-toggle=\"pill\" href=\"#\" role=\"tab\" aria-controls=\"pills-admin\"\n                        aria-selected=\"false\">\n                        <i class=\"material-icons text-danger\">clear</i>\n                        Delete\n                    </a>\n                </li>\n            </ul>\n            <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"!isExpanded(vehicle.id)\"\n                (click)=\"viewMoreDetails(vehicle.id)\" data-toggle=\"collapse\" data-target=\"#viewMore\">\n                View More\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"isExpanded(vehicle.id)\" (click)=\"viewLessDetails(vehicle.id)\"\n                data-toggle=\"collapse\" data-target=\"#viewMore\">\n                View Less\n            </button>\n            <br>\n            <br>\n            <div class=\"collapse\" id=\"viewMore\" *ngIf=\"isExpanded(vehicle.id)\">\n                <div class=\"card card-body\">\n                    <div class=\"d-flex\">\n                        <div class=\"flex-shrink-1\">\n                            Manufactured Year\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <div class=\"text-dark font-weight-bold text-right\">\n                                {{vehicle.yearOfManufacture}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex\">\n                        <div class=\"flex-shrink-1\">\n                            Insurance Renewal Date\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <div class=\"text-dark font-weight-bold text-right\">\n                                <!-- <i class=\"material-icons date\">calendar_today</i> -->\n                                {{vehicle.insuranceRenewalDate}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex\">\n                        <div class=\"flex-shrink-1\">\n                            Last Service Date\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <div class=\"text-dark font-weight-bold text-right\">\n                                <!-- <i class=\"material-icons date\">calendar_today</i> -->\n                                {{vehicle.lastServiceDate}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex\">\n                        <div class=\"flex-shrink-1\">\n                            Next Service Data\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <div class=\"text-dark font-weight-bold text-right\">\n                                <!-- <i class=\"material-icons date\">calendar_today</i> -->\n                                {{vehicle.nextServiceDate}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-list/vehicle-list.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-list/vehicle-list.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>vehicle-list works!</p> -->\n<app-search></app-search>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler bg-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbardropdown\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse  navbar-light navbar-light\" id=\"navbardropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <div class=\"d-flex\">\n          <div class=\"flex-shrink-1\">\n            <a class=\"nav-link bg-dark text-light dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"material-icons\">sort</i>\n              Sort\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" (click)=\"sortByName()\">Name</a>\n              <a class=\"dropdown-item\" (click)=\"sortByRent()\">Rent</a>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <div class=\"d-flex\">\n          <div class=\"flex-shrink-1\">\n            <a class=\"nav-link bg-light text-dark dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"material-icons\">filter_list</i>\n              Filter\n            </a>\n            <div class=\"dropdown-menu\">\n              <div class=\"dropdown-item bg-dark text-light\" data-target=\"#seater\">\n                Filter by Seater\n              </div>\n              <a class=\"dropdown-item\" (click)=\"filterBySeater(2)\" id=\"seater\">\n                2\n              </a>\n              <a class=\"dropdown-item\" (click)=\"filterBySeater(3)\" id=\"seater\">\n                3\n              </a>\n              <a class=\"dropdown-item\" (click)=\"filterBySeater(4)\" id=\"seater\">\n                4\n              </a>\n              <a class=\"dropdown-item\" (click)=\"filterBySeater(5)\" id=\"seater\">\n                5\n              </a>\n              <div class=\"dropdown-item bg-dark text-light\" data-target=\"#seater\">\n                Filter by Type\n              </div>\n              <a class=\"dropdown-item\" (click)=\"filterByType('Car')\" id=\"seater\">\n                Car\n              </a>\n              <a class=\"dropdown-item\" (click)=\"filterByType('Auto')\" id=\"seater\">\n                Auto\n              </a>\n              <a class=\"dropdown-item\" (click)=\"filterByType('Bike')\" id=\"seater\">\n                Motor Cycle\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-lg-3\"\n        *ngFor=\"let vehicle of vehicles | orderBy : sort : false : true | filterBy : filter\">\n        <app-vehicle-info [vehicle]=\"vehicle\" [vehicleId]=\"vehicleId\" (viewMore)=\"viewMore($event)\"\n          (removeVehicle)=\"removeVehicleFromList($event)\">\n        </app-vehicle-info>\n      </div>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    background-color: #0b4668;\r\n}\r\n.material-icons{\r\n    vertical-align : middle;\r\n}\r\n.opacity{\r\n    opacity : 0.8;\r\n}\r\n.jumbotron{\r\n    background-image : url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uLsSZ7Pdpyatv4Fb4vdtv8y7aHhVBNdhjlDy3S1MU-k6GpZAVg&s\");\r\n    background-size : 75%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0lBQXNJO0lBQ3RJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjQ2Njg7XHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgdmVydGljYWwtYWxpZ24gOiBtaWRkbGU7XHJcbn1cclxuLm9wYWNpdHl7XHJcbiAgICBvcGFjaXR5IDogMC44O1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUl91THNTWjdQZHB5YXR2NEZiNHZkdHY4eTdhSGhWQk5kaGpsRHkzUzFNVS1rNkdwWkFWZyZzXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplIDogNzUlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'webapp';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: routes, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _site_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site/header/header.component */ "./src/app/site/header/header.component.ts");
            /* harmony import */ var _site_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site/login/login.component */ "./src/app/site/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site/signup/signup.component */ "./src/app/site/signup/signup.component.ts");
            /* harmony import */ var _site_view_request_view_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site/view-request/view-request.component */ "./src/app/site/view-request/view-request.component.ts");
            /* harmony import */ var _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vehicle/vehicle-list/vehicle-list.component */ "./src/app/vehicle/vehicle-list/vehicle-list.component.ts");
            /* harmony import */ var _vehicle_vehicle_info_vehicle_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle/vehicle-info/vehicle-info.component */ "./src/app/vehicle/vehicle-info/vehicle-info.component.ts");
            /* harmony import */ var _vehicle_vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vehicle/vehicle-edit/vehicle-edit.component */ "./src/app/vehicle/vehicle-edit/vehicle-edit.component.ts");
            /* harmony import */ var _vehicle_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vehicle/search/search.component */ "./src/app/vehicle/search/search.component.ts");
            /* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
            /* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
            /* harmony import */ var _booking_booking_booking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./booking/booking/booking.component */ "./src/app/booking/booking/booking.component.ts");
            /* harmony import */ var _booking_payment_payment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./booking/payment/payment.component */ "./src/app/booking/payment/payment.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _booking_my_booking_my_booking_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./booking/my-booking/my-booking.component */ "./src/app/booking/my-booking/my-booking.component.ts");
            var routes = [
                { path: 'login', component: _site_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'signup', component: _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
                { path: 'view-request', component: _site_view_request_view_request_component__WEBPACK_IMPORTED_MODULE_11__["ViewRequestComponent"] },
                { path: 'vehicle', component: _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_12__["VehicleListComponent"] },
                { path: 'vehicle/:id', component: _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_12__["VehicleListComponent"] },
                { path: 'vehicle-edit/:id', component: _vehicle_vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_14__["VehicleEditComponent"] },
                { path: 'vehicle-edit', component: _vehicle_vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_14__["VehicleEditComponent"] },
                { path: 'booking/:id', component: _booking_booking_booking_component__WEBPACK_IMPORTED_MODULE_18__["BookingComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
                { path: 'booking', component: _booking_payment_payment_component__WEBPACK_IMPORTED_MODULE_19__["PaymentComponent"] },
                { path: 'payment/:id', component: _booking_payment_payment_component__WEBPACK_IMPORTED_MODULE_19__["PaymentComponent"] },
                { path: 'payment', component: _booking_payment_payment_component__WEBPACK_IMPORTED_MODULE_19__["PaymentComponent"] },
                { path: 'my-booking', component: _booking_my_booking_my_booking_component__WEBPACK_IMPORTED_MODULE_21__["MyBookingComponent"] },
                { path: '', redirectTo: 'vehicle', pathMatch: 'full' }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _site_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                        _site_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                        _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                        _site_view_request_view_request_component__WEBPACK_IMPORTED_MODULE_11__["ViewRequestComponent"],
                        _vehicle_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_12__["VehicleListComponent"],
                        _vehicle_vehicle_info_vehicle_info_component__WEBPACK_IMPORTED_MODULE_13__["VehicleInfoComponent"],
                        _vehicle_vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_14__["VehicleEditComponent"],
                        _vehicle_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                        _booking_booking_booking_component__WEBPACK_IMPORTED_MODULE_18__["BookingComponent"],
                        _booking_payment_payment_component__WEBPACK_IMPORTED_MODULE_19__["PaymentComponent"],
                        _booking_my_booking_my_booking_component__WEBPACK_IMPORTED_MODULE_21__["MyBookingComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        ngx_order_pipe__WEBPACK_IMPORTED_MODULE_16__["OrderModule"],
                        ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipeModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(userAuthService, router) {
                    this.userAuthService = userAuthService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    this.userAuthService.redirectUrl = state.url;
                    console.log('URL', state.url);
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                        if (_this.userAuthService.loggedIn) {
                            console.log('Logged in');
                            observer.next(true);
                        }
                        else {
                            console.log('Not Logged In');
                            _this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
                        }
                    });
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/booking/booking/booking.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/booking/booking/booking.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/booking/booking/booking.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/booking/booking/booking.component.ts ***!
          \******************************************************/
        /*! exports provided: BookingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function () { return BookingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/vehicle.service */ "./src/app/service/vehicle.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/booking.service */ "./src/app/service/booking.service.ts");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
            var BookingComponent = /** @class */ (function () {
                function BookingComponent(vehicleService, route, fb, bookingService, router, userAuthService, userService) {
                    this.vehicleService = vehicleService;
                    this.route = route;
                    this.fb = fb;
                    this.bookingService = bookingService;
                    this.router = router;
                    this.userAuthService = userAuthService;
                    this.userService = userService;
                    this.isBooked = false;
                    this.presentDate = new Date().toJSON();
                }
                BookingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bookingForm = this.fb.group({
                        id: [],
                        bookingStatus: [true],
                        vehicle: [],
                        total: [],
                        startDate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        endDate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        user: [],
                    });
                    this.route.params.subscribe(function (params) {
                        var vehicleId = params['id'];
                        _this.vehicleService.getVehicle(vehicleId).subscribe(function (data) {
                            _this.vehicle = data;
                            _this.user = _this.userAuthService.getId();
                            _this.bookingForm.patchValue({ vehicle: data });
                            _this.vehicle = data;
                            // this.bookingForm.patchValue({ user: this.user })
                            console.log(data);
                            console.log(_this.user);
                        });
                        _this.userService.getUser(_this.userAuthService.getId()).subscribe(function (user) {
                            console.log(user);
                            _this.bookingForm.patchValue({ user: user });
                        });
                    });
                };
                BookingComponent.prototype.onSaveClick = function () {
                    var rentMilliSeconds = Date.parse(this.bookingForm.value.endDate) - Date.parse(this.bookingForm.value.startDate);
                    this.rentMinutes = Math.floor(((rentMilliSeconds / (1000 * 60))));
                    this.rentHours = Math.floor(this.rentMinutes / 60);
                    this.rent = this.rentHours * this.bookingForm.value.vehicle.rent;
                    console.log(this.rent);
                    this.rentDays = Math.floor(this.rentHours / 24);
                    this.rentHours %= 24;
                    this.rentMinutes %= 60;
                    this.bookingForm.value.total = this.rent;
                    // this.bookingForm.value.status =true;
                    console.log(this.bookingForm.value);
                    this.isBooked = true;
                    this.saved = true;
                    // this.bookingService.updateBooking(this.bookingForm.value).subscribe(
                    //   data => {
                    //     console.log('update successful.');
                    //     console.log(this.bookingForm.value);
                    //     this.error = '';
                    //     this.saved = true;
                    //     this.isBooked = true;
                    //     console.log("Is saved -> " + this.saved)
                    //   }
                    // );
                    // this.router.navigate(['/payment']);
                    if (this.rent < 0) {
                        this.errorMsg = true;
                    }
                    else {
                        this.errorMsg = false;
                        this.bookingForm.patchValue({ total: this.rent });
                    }
                    this.bookingService.setBookingDetails(this.bookingForm.value);
                };
                BookingComponent.prototype.hide = function () {
                    if (this.rent != null) {
                        return true;
                    }
                };
                BookingComponent.prototype.next = function () {
                    this.router.navigate(['/payment']);
                };
                BookingComponent.prototype.back = function () {
                    this.submitForm = false;
                };
                Object.defineProperty(BookingComponent.prototype, "id", {
                    get: function () {
                        return this.bookingForm.get('id');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "name", {
                    get: function () {
                        return this.bookingForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "total", {
                    get: function () {
                        return this.bookingForm.get('total');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "model", {
                    get: function () {
                        return this.bookingForm.get('model');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "userId", {
                    get: function () {
                        return this.bookingForm.get('userId');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "startDate", {
                    get: function () {
                        return this.bookingForm.get('startDate');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BookingComponent.prototype, "endDate", {
                    get: function () {
                        return this.bookingForm.get('endDate');
                    },
                    enumerable: true,
                    configurable: true
                });
                return BookingComponent;
            }());
            BookingComponent.ctorParameters = function () { return [
                { type: src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"] },
                { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
            ]; };
            BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-booking',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking/booking.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking/booking.component.css")).default]
                })
            ], BookingComponent);
            /***/ 
        }),
        /***/ "./src/app/booking/my-booking/my-booking.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/booking/my-booking/my-booking.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvbXktYm9va2luZy9teS1ib29raW5nLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/booking/my-booking/my-booking.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/booking/my-booking/my-booking.component.ts ***!
          \************************************************************/
        /*! exports provided: MyBookingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingComponent", function () { return MyBookingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/booking.service */ "./src/app/service/booking.service.ts");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            var MyBookingComponent = /** @class */ (function () {
                function MyBookingComponent(bookingService, userAuthService) {
                    this.bookingService = bookingService;
                    this.userAuthService = userAuthService;
                }
                MyBookingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bookingService.getBookingDetail(this.userAuthService.getId()).subscribe(function (data) {
                        if (data) {
                            console.log(data);
                            _this.bookings = data;
                            _this.payment = _this.bookingService.getPaymentDetail();
                            console.log(_this.payment);
                        }
                    });
                };
                MyBookingComponent.prototype.onCancelling = function (booking) {
                    var _this = this;
                    this.bookingCancel = true;
                    this.bookingId = booking.id;
                    this.bookingTotal = booking.total;
                    // this.bookingService.updateTransactionDetail( this.bookingId).subscribe((data)=>{
                    //   console.log(data);
                    console.log(booking.id);
                    this.bookingService.deleteBooking(booking.id).subscribe(function (data) {
                        _this.bookings = data;
                        _this.msg = true;
                        setTimeout(function () {
                            _this.msg = false;
                        }, 1000);
                        _this.ngOnInit();
                    });
                    // });
                };
                return MyBookingComponent;
            }());
            MyBookingComponent.ctorParameters = function () { return [
                { type: src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }
            ]; };
            MyBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-booking',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/my-booking/my-booking.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-booking.component.css */ "./src/app/booking/my-booking/my-booking.component.css")).default]
                })
            ], MyBookingComponent);
            /***/ 
        }),
        /***/ "./src/app/booking/payment/payment.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/booking/payment/payment.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/booking/payment/payment.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/booking/payment/payment.component.ts ***!
          \******************************************************/
        /*! exports provided: PaymentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () { return PaymentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/booking.service */ "./src/app/service/booking.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            var PaymentComponent = /** @class */ (function () {
                function PaymentComponent(fb, bookingService, router, route, userAuthService) {
                    this.fb = fb;
                    this.bookingService = bookingService;
                    this.router = router;
                    this.route = route;
                    this.userAuthService = userAuthService;
                }
                PaymentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paymentForm = this.fb.group({
                        id: [],
                        cardNumber: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        cvvNumber: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        expiryDate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        total: []
                    });
                    this.booking = this.bookingService.getBookingDetails();
                    this.total = this.booking.total;
                    this.payment = this.paymentForm.value;
                    this.bookingService.setPaymentDetail(this.payment);
                    this.bookingService.getBookingDetail(this.userAuthService.getId()).subscribe(function (data) {
                        if (data) {
                            console.log(data);
                            _this.bookings = data;
                            _this.payment = _this.bookingService.getPaymentDetail();
                            // console.log(this.payment);
                        }
                    });
                    this.paymentForm.patchValue({ total: this.total });
                };
                PaymentComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.paymentForm.value);
                    console.log(this.booking);
                    this.bookingService.updateBooking(this.booking).subscribe(function (data) {
                        _this.booking.bookingStatus = true;
                        console.log(_this.booking);
                        console.log(data);
                        _this.bookingService.updatePayment(_this.booking, _this.paymentForm.value).subscribe(function (data) {
                            _this.saved = true;
                            console.log(data);
                        }, function (error) {
                            console.log(error.error.message);
                            _this.error = error.error.message;
                        });
                    }, function (error) {
                        console.log(error.error.message);
                        _this.error = error.error.message;
                    });
                };
                PaymentComponent.prototype.hide = function () {
                    if (this.total != null) {
                        return true;
                    }
                };
                return PaymentComponent;
            }());
            PaymentComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_service_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"] }
            ]; };
            PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payment',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/payment/payment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/booking/payment/payment.component.css")).default]
                })
            ], PaymentComponent);
            /***/ 
        }),
        /***/ "./src/app/service/authentication.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/service/authentication.service.ts ***!
          \***************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(httpClient) {
                    this.httpClient = httpClient;
                    this.authenticationApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
                }
                AuthenticationService.prototype.authenticate = function (user, password) {
                    console.log("userName : " + user + " password : " + password);
                    var credentials = btoa(user + ':' + password);
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Basic ' + credentials);
                    console.log(headers);
                    return this.httpClient.get(this.authenticationApiUrl + '/authentication-service/authenticate', { headers: headers });
                    // return this.httpClient.get<User>(this.authenticationApiUrl + '/authenticate', { headers });
                };
                AuthenticationService.prototype.setToken = function (token) {
                    this.token = token;
                };
                AuthenticationService.prototype.getToken = function () {
                    return this.token;
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/service/booking.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/booking.service.ts ***!
          \********************************************/
        /*! exports provided: BookingService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function () { return BookingService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            /* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var BookingService = /** @class */ (function () {
                function BookingService(httpClient, userAuthService) {
                    this.httpClient = httpClient;
                    this.userAuthService = userAuthService;
                    this.bookingApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/booking-service/booking';
                    this.paymentApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/booking-service/payment';
                    this.transactionApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/booking-service/transaction';
                }
                // getAllBookingDetails(): Observable<any[]> {
                //   const httpOptions = {
                //     headers: new HttpHeaders({
                //       'Content-Type': 'application/json',
                //       'Authorization': 'Bearer ' + this.userAuthService.getToken()
                //     })
                //   };
                //   return this.httpClient.get<Booking[]>(this.bookingApiUrl, httpOptions);
                // }
                BookingService.prototype.getBookingDetail = function (userId) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.bookingApiUrl + "/" + userId, httpOptions);
                };
                BookingService.prototype.updateBooking = function (booking) {
                    console.log(booking);
                    console.log(booking.bookingStatus);
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.post(this.bookingApiUrl, booking, httpOptions);
                };
                BookingService.prototype.updatePayment = function (bookingDetail, payment) {
                    this.payment = payment;
                    console.log(bookingDetail);
                    console.log(this.payment);
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.put(this.paymentApiUrl, { bookingDetail: bookingDetail, payment: payment }, httpOptions);
                };
                // updateTransactionDetail(bookingId: number): Observable<any> {
                //   const httpOptions = {
                //     headers: new HttpHeaders({
                //       'Content-Type': 'application/json',
                //       'Authorization': 'Bearer ' + this.userAuthService.getToken()
                //     })
                //   };
                //   return this.httpClient.put(this.transactionApiUrl, bookingId, httpOptions);
                // }
                BookingService.prototype.getPayment = function (userId) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.paymentApiUrl + "/" + userId, httpOptions);
                };
                BookingService.prototype.setBookingDetails = function (booking) {
                    this.booking = booking;
                };
                BookingService.prototype.getBookingDetails = function () {
                    return this.booking;
                };
                BookingService.prototype.setPaymentDetail = function (payment) {
                    this.payment = payment;
                };
                BookingService.prototype.getPaymentDetail = function () {
                    return this.payment;
                };
                BookingService.prototype.deleteBooking = function (bookingId) {
                    console.log(this.payment.cardNumber);
                    console.log(bookingId);
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.delete(this.bookingApiUrl + "/" + bookingId, httpOptions);
                };
                return BookingService;
            }());
            BookingService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }
            ]; };
            BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BookingService);
            /***/ 
        }),
        /***/ "./src/app/service/user-auth.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/service/user-auth.service.ts ***!
          \**********************************************/
        /*! exports provided: UserAuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function () { return UserAuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserAuthService = /** @class */ (function () {
                function UserAuthService() {
                    this.redirectUrl = '/';
                    this.loggedIn = false;
                }
                UserAuthService.prototype.setId = function (id) {
                    this.id = id;
                };
                UserAuthService.prototype.getId = function () {
                    return this.id;
                };
                UserAuthService.prototype.setToken = function (token) {
                    this.token = token;
                };
                UserAuthService.prototype.getToken = function () {
                    return this.token;
                };
                UserAuthService.prototype.setRoleId = function (roleId) {
                    this.roleId = roleId;
                };
                UserAuthService.prototype.getRoleId = function () {
                    return this.roleId;
                };
                UserAuthService.prototype.setRole = function (role) {
                    this.role = role;
                };
                UserAuthService.prototype.getRole = function () {
                    return this.role;
                };
                UserAuthService.prototype.setUser = function (user) {
                    this.user = user;
                };
                UserAuthService.prototype.getUser = function () {
                    return this.user;
                };
                UserAuthService.prototype.logout = function () {
                    this.redirectUrl = '/';
                    this.role = null;
                    this.user = null;
                    this.loggedIn = false;
                };
                return UserAuthService;
            }());
            UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserAuthService);
            /***/ 
        }),
        /***/ "./src/app/service/user.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/user.service.ts ***!
          \*****************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/service/user-auth.service.ts");
            var UserService = /** @class */ (function () {
                function UserService(httpClient, userAuthService) {
                    this.httpClient = httpClient;
                    this.userAuthService = userAuthService;
                    this.userApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/signup-service/users';
                }
                // authenticate(userName: string, password: string): Observable<User> {
                //   return Observable.create((observer: Observer<any>) => {
                //     if (userName != 'Admin') {
                //       observer.next({ userName, firstName: userName, lastName: '', role: 'Customer', accessToken: 'JWT-TOKEN' });
                //     } else {
                //       observer.next({ userName, firstName: userName, lastName: '', role: 'Admin', accessToken: 'JWT-TOKEN' });
                //     }
                //     return null;
                //   });
                // }
                UserService.prototype.addUser = function (user) {
                    console.log(user);
                    console.log(this.userApiUrl, user);
                    return this.httpClient.post(this.userApiUrl, user);
                    // return this.httpClient.post<User>(this.userApiUrl + "/users", user);
                };
                UserService.prototype.getAllPendingUsers = function () {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.userApiUrl, httpOptions);
                };
                UserService.prototype.getUser = function (userId) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.userApiUrl + "/" + userId, httpOptions);
                };
                UserService.prototype.updateRequest = function (user) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.put(this.userApiUrl, user, httpOptions);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/service/vehicle.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/vehicle.service.ts ***!
          \********************************************/
        /*! exports provided: VehicleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function () { return VehicleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/service/user-auth.service.ts");
            var VehicleService = /** @class */ (function () {
                function VehicleService(httpClient, userAuthService) {
                    this.httpClient = httpClient;
                    this.userAuthService = userAuthService;
                    this.vehicleApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/vehicle-service/vehicles';
                    this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                VehicleService.prototype.getAllVehicles = function () {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.vehicleApiUrl, httpOptions);
                };
                VehicleService.prototype.getVehicle = function (vehicleId) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.get(this.vehicleApiUrl + "/" + vehicleId, httpOptions);
                };
                // addVehicle(vehicle:Vehicle): Observable<any>{
                //   const httpOptions = {
                //     headers: new HttpHeaders({
                //       'Content-Type': 'application/json',
                //       'Authorization': 'Bearer ' + this.userAuthService.getToken()
                //     })
                //   };
                //   return this.httpClient.post(this.vehicleApiUrl, vehicle, httpOptions);
                // }
                VehicleService.prototype.updateVehicle = function (vehicle) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.put(this.vehicleApiUrl, vehicle, httpOptions);
                };
                VehicleService.prototype.deleteVehicle = function (vehicleId) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.userAuthService.getToken()
                        })
                    };
                    return this.httpClient.delete(this.vehicleApiUrl + "/" + vehicleId, httpOptions);
                };
                return VehicleService;
            }());
            VehicleService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"] }
            ]; };
            VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VehicleService);
            /***/ 
        }),
        /***/ "./src/app/site/header/header.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/site/header/header.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".size{\r\n    font-size: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/site/header/header.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/site/header/header.component.ts ***!
          \*************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(router, userAuthService) {
                    this.router = router;
                    this.userAuthService = userAuthService;
                }
                HeaderComponent.prototype.isAuthenticated = function () {
                    this.logged = true;
                    return this.userAuthService.loggedIn;
                };
                HeaderComponent.prototype.user = function () {
                    return this.userAuthService.getUser();
                };
                HeaderComponent.prototype.role = function () {
                    return this.userAuthService.getRole();
                };
                HeaderComponent.prototype.onSignOut = function () {
                    this.userAuthService.logout();
                    this.router.navigate(['/login']);
                };
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/site/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/site/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/site/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/site/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/site/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(userAuthService, authenticationService, router, fb, route) {
                    this.userAuthService = userAuthService;
                    this.authenticationService = authenticationService;
                    this.router = router;
                    this.fb = fb;
                    this.route = route;
                    this.isLoginValid = true;
                    this.isMenuItemIdPresent = false;
                    this.loginForm = this.fb.group({
                        username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9]*')]],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    });
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // if (this.userAuthService.menuItemId != null) {
                    //   this.isMenuItemIdPresent = true;
                    // }
                    this.route.queryParams.subscribe(function (params) {
                        _this.authSource = params['from'];
                    });
                };
                LoginComponent.prototype.onSubmit = function (loginForm) {
                    var _this = this;
                    // this.user = this.loginForm.value.username;
                    // this.pwd = this.loginForm.value.password;
                    console.log(loginForm.value.username);
                    console.log(loginForm.value.password);
                    this.authenticationService.authenticate(loginForm.value.username, loginForm.value.password).subscribe(function (data) {
                        console.log(_this.loginForm.value.username);
                        console.log(_this.loginForm.value.password);
                        // this.authService.logIn(form.value.username, form.value.password);
                        // console.log(data);
                        _this.userAuthService.loggedIn = true;
                        _this.status = _this.userAuthService.loggedIn;
                        console.log("role: " + data.role);
                        console.log("user: " + data.token);
                        console.log("user: " + data.user);
                        console.log("userId: " + data.id);
                        console.log("Logged in...");
                        _this.userAuthService.setToken(data.token);
                        _this.userAuthService.setRole(data.role);
                        _this.userAuthService.setUser(data.user);
                        _this.userAuthService.setId(data.id);
                        _this.router.navigate(['/vehicle']);
                    }, function (error) {
                        _this.isLoginValid = false;
                        // this.router.navigate([this.userAuthService.redirectUrl]);
                        console.log("hey error " + JSON.stringify(error));
                        if (error.status == 401) {
                            _this.error = "Invalid username/password";
                        }
                    });
                    // const username = form.value.username;
                    // const password = form.value.password;
                    // if (username === 'john') { // temporary to show the invalid user login
                    //   this.isLoginValid = false;
                    // } else {
                    //   this.authService.logIn(username, password);
                    //   this.router.navigate([this.authService.redirectUrl]);
                    // }
                };
                Object.defineProperty(LoginComponent.prototype, "username", {
                    get: function () {
                        return this.loginForm.get('username');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LoginComponent.prototype, "password", {
                    get: function () {
                        return this.loginForm.get('password');
                    },
                    enumerable: true,
                    configurable: true
                });
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
                { type: src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/site/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/site/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/site/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/site/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/site/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(fb, router, userService, userAuthService) {
                    this.fb = fb;
                    this.router = router;
                    this.userService = userService;
                    this.userAuthService = userAuthService;
                    this.request = false;
                }
                SignupComponent.prototype.ngOnInit = function () {
                    this.role = [{ id: 2, name: 'USER' }];
                    this.signupForm = this.fb.group({
                        userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]*')]],
                        firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]*')]],
                        lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]*')]],
                        branch: [''],
                        emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
                        age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*')]],
                        gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9+]*')]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
                        roleList: [this.role],
                        confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
                    });
                };
                SignupComponent.prototype.addRoleUser = function () {
                    this.isAdmin = false;
                    this.role = [{ id: 2, name: 'USER' }];
                    // this.userAuthService.setRoleId(2);
                };
                SignupComponent.prototype.addRoleAdmin = function () {
                    this.isAdmin = true;
                    this.role = [{ id: 1, name: 'ADMIN' }];
                    // this.userAuthService.setRoleId(1);
                };
                SignupComponent.prototype.onSignup = function () {
                    var _this = this;
                    console.log("In submit");
                    console.log(this.role);
                    if (this.isAdmin) {
                        this.signupForm.value.roleList = this.role;
                    }
                    console.log(this.signupForm.value.role);
                    this.userService.addUser(this.signupForm.value).subscribe(function (response) {
                        console.log(_this.signupForm.value.role);
                        console.log(_this.signupForm.value);
                        _this.request = true;
                        _this.router.navigate(['/login']);
                    }, function (responseError) {
                        console.log("User Already Exist. Directly go to Login");
                        _this.exist = true;
                        _this.error = responseError.error.errorMessage;
                    });
                };
                SignupComponent.prototype.isExist = function () {
                    return this.exist;
                };
                Object.defineProperty(SignupComponent.prototype, "roleList", {
                    get: function () {
                        return this.signupForm.get('roleList');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "userName", {
                    get: function () {
                        return this.signupForm.get('userName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "branch", {
                    get: function () {
                        return this.signupForm.get('userName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "age", {
                    get: function () {
                        return this.signupForm.get('age');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "gender", {
                    get: function () {
                        return this.signupForm.get('gender');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "contactNo", {
                    get: function () {
                        return this.signupForm.get('contactNo');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "emailId", {
                    get: function () {
                        return this.signupForm.get('emailId');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "password", {
                    get: function () {
                        return this.signupForm.get('password');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "firstName", {
                    get: function () {
                        return this.signupForm.get('firstName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "lastName", {
                    get: function () {
                        return this.signupForm.get('lastName');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignupComponent.prototype, "confirmPassword", {
                    get: function () {
                        return this.signupForm.get('confirmPassword');
                    },
                    enumerable: true,
                    configurable: true
                });
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/site/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/site/view-request/view-request.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/site/view-request/view-request.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvdmlldy1yZXF1ZXN0L3ZpZXctcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/site/view-request/view-request.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/site/view-request/view-request.component.ts ***!
          \*************************************************************/
        /*! exports provided: ViewRequestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestComponent", function () { return ViewRequestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
            var ViewRequestComponent = /** @class */ (function () {
                function ViewRequestComponent(userAuthService, httpClient, userService) {
                    this.userAuthService = userAuthService;
                    this.httpClient = httpClient;
                    this.userService = userService;
                }
                ViewRequestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getAllPendingUsers().subscribe(function (user) {
                        if (user) {
                            console.log(user);
                            _this.user = user;
                            _this.error = '';
                        }
                    }, function (error) {
                        console.log("Request error" + error.error.message);
                        _this.error = error.error.message;
                    });
                };
                ViewRequestComponent.prototype.onAcceptRequest = function (user) {
                    var _this = this;
                    user.active = true;
                    this.userService.updateRequest(user).subscribe(function (data) {
                        _this.user = data;
                        _this.vanish = true;
                        setTimeout(function () {
                            _this.vanish = false;
                        }, 1000);
                        _this.ngOnInit();
                    });
                    // this.userService.updateAcceptRequest(user).subscribe(()=>
                    //   this.userService.getAllPendingUsers().subscribe(
                    //     (user) => {
                    //       if(user){
                    //         console.log(user);
                    //         this.user = user;
                    //         setTimeout(() => {
                    //           this.vanish = false;
                    //         }, 1000);
                    //         return false;
                    //       }
                    //     }
                    //   )
                    // );
                };
                ViewRequestComponent.prototype.onDeclineRequest = function (user) {
                    var _this = this;
                    user.active = false;
                    this.userService.updateRequest(user).subscribe(function (data) {
                        _this.user = data;
                        _this.msg = true;
                        setTimeout(function () {
                            _this.msg = false;
                        }, 1000);
                        _this.ngOnInit();
                    });
                };
                return ViewRequestComponent;
            }());
            ViewRequestComponent.ctorParameters = function () { return [
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            ViewRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-view-request',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/view-request/view-request.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-request.component.css */ "./src/app/site/view-request/view-request.component.css")).default]
                })
            ], ViewRequestComponent);
            /***/ 
        }),
        /***/ "./src/app/vehicle/search/search.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/vehicle/search/search.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/vehicle/search/search.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/vehicle/search/search.component.ts ***!
          \****************************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/vehicle.service */ "./src/app/service/vehicle.service.ts");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(vehicleService, userAuthService, router) {
                    this.vehicleService = vehicleService;
                    this.userAuthService = userAuthService;
                    this.router = router;
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.role = this.userAuthService.getRole();
                };
                SearchComponent.prototype.onSearchText = function (event) {
                    this.vehicleService.filter.next({ name: event.target.value });
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/vehicle/search/search.component.css")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-edit/vehicle-edit.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-edit/vehicle-edit.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1lZGl0L3ZlaGljbGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-edit/vehicle-edit.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-edit/vehicle-edit.component.ts ***!
          \****************************************************************/
        /*! exports provided: VehicleEditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleEditComponent", function () { return VehicleEditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/vehicle.service */ "./src/app/service/vehicle.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VehicleEditComponent = /** @class */ (function () {
                function VehicleEditComponent(vehicleService, route, fb) {
                    this.vehicleService = vehicleService;
                    this.route = route;
                    this.fb = fb;
                }
                VehicleEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.editForm = this.fb.group({
                        id: [],
                        name: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)
                            ]],
                        rent: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
                        model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]],
                        number: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        yearOfManufacture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        insuranceRenewalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        lastServiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        nextServiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        seater: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        vehicleType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        mileage: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                    this.route.params.subscribe(function (params) {
                        var vehicleId = params['id'];
                        _this.vehicleService.getVehicle(vehicleId).subscribe(function (vehicle) {
                            if (vehicle) {
                                _this.editForm.patchValue({
                                    id: vehicleId,
                                    name: vehicle.name,
                                    imageUrl: vehicle.imageUrl,
                                    rent: vehicle.rent,
                                    model: vehicle.model,
                                    number: vehicle.number,
                                    mileage: vehicle.mileage,
                                    yearOfManufacture: vehicle.yearOfManufacture,
                                    insuranceRenewalDate: vehicle.insuranceRenewalDate,
                                    lastServiceDate: vehicle.lastServiceDate,
                                    nextServiceDate: vehicle.nextServiceDate,
                                    seater: vehicle.seater,
                                    vehicleType: vehicle.vehicleType
                                });
                            }
                        });
                    });
                };
                Object.defineProperty(VehicleEditComponent.prototype, "id", {
                    get: function () {
                        return this.editForm.get('id');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "name", {
                    get: function () {
                        return this.editForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "imageUrl", {
                    get: function () {
                        return this.editForm.get('imageUrl');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "rent", {
                    get: function () {
                        return this.editForm.get('rent');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "model", {
                    get: function () {
                        return this.editForm.get('model');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "number", {
                    get: function () {
                        return this.editForm.get('number');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "mileage", {
                    get: function () {
                        return this.editForm.get('mileage');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "yearOfManufacture", {
                    get: function () {
                        return this.editForm.get('yearOfManufacture');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "insuranceRenewalDate", {
                    get: function () {
                        return this.editForm.get('insuranceRenewalDate');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "lastServiceDate", {
                    get: function () {
                        return this.editForm.get('lastServiceDate');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "nextServiceDate", {
                    get: function () {
                        return this.editForm.get('nextServiceDate');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "seater", {
                    get: function () {
                        return this.editForm.get('seater');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VehicleEditComponent.prototype, "vehicleType", {
                    get: function () {
                        return this.editForm.get('vehicleType');
                    },
                    enumerable: true,
                    configurable: true
                });
                // onInsertVehicle(vehicle: Vehicle) {
                //   vehicle = this.editForm.value;
                //   this.vehicleService.addVehicle(vehicle).subscribe(
                //     data => {
                //       console.log('MenuItem inserted successfully.');
                //       this.error = '';
                //       this.saved = true;
                //       console.log("Is saved -> " + this.saved)
                //     }
                //   );
                // }
                VehicleEditComponent.prototype.onSaveClick = function () {
                    var _this = this;
                    console.log(this.editForm.value);
                    this.vehicleService.updateVehicle(this.editForm.value).subscribe(function (data) {
                        console.log('MenuItem update successful.');
                        _this.error = '';
                        _this.saved = true;
                        console.log("Is saved -> " + _this.saved);
                    });
                };
                return VehicleEditComponent;
            }());
            VehicleEditComponent.ctorParameters = function () { return [
                { type: src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            VehicleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vehicle-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-edit/vehicle-edit.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-edit.component.css */ "./src/app/vehicle/vehicle-edit/vehicle-edit.component.css")).default]
                })
            ], VehicleEditComponent);
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-info/vehicle-info.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-info/vehicle-info.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card:hover{\r\n    background-color: #090211;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS92ZWhpY2xlLWluZm8vdmVoaWNsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlL3ZlaGljbGUtaW5mby92ZWhpY2xlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDIxMTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-info/vehicle-info.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-info/vehicle-info.component.ts ***!
          \****************************************************************/
        /*! exports provided: VehicleInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInfoComponent", function () { return VehicleInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user-auth.service */ "./src/app/service/user-auth.service.ts");
            /* harmony import */ var src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/vehicle.service */ "./src/app/service/vehicle.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VehicleInfoComponent = /** @class */ (function () {
                function VehicleInfoComponent(userAuthService, vehicleSrvice, router) {
                    this.userAuthService = userAuthService;
                    this.vehicleSrvice = vehicleSrvice;
                    this.router = router;
                    this.removeVehicle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.viewMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.removed = false;
                }
                VehicleInfoComponent.prototype.ngOnInit = function () {
                    this.role = this.userAuthService.getRole();
                };
                VehicleInfoComponent.prototype.onRemovingVehicle = function (vehicleId) {
                    console.log(vehicleId);
                    this.removeVehicle.emit(vehicleId);
                    this.removed = true;
                };
                VehicleInfoComponent.prototype.viewMoreDetails = function (vehicleId) {
                    this.id = vehicleId;
                    this.viewMore.emit(vehicleId);
                };
                VehicleInfoComponent.prototype.viewLessDetails = function (vehicleId) {
                    vehicleId = null;
                    this.id = vehicleId;
                    this.viewMore.emit(this.id);
                };
                VehicleInfoComponent.prototype.isExpanded = function (vehicleId) {
                    if (vehicleId == this.id) {
                        return true;
                    }
                };
                return VehicleInfoComponent;
            }());
            VehicleInfoComponent.ctorParameters = function () { return [
                { type: src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] },
                { type: src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VehicleInfoComponent.prototype, "vehicle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], VehicleInfoComponent.prototype, "removeVehicle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VehicleInfoComponent.prototype, "vehicleId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], VehicleInfoComponent.prototype, "viewMore", void 0);
            VehicleInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vehicle-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-info/vehicle-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-info.component.css */ "./src/app/vehicle/vehicle-info/vehicle-info.component.css")).default]
                })
            ], VehicleInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-list/vehicle-list.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-list/vehicle-list.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/vehicle/vehicle-list/vehicle-list.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/vehicle/vehicle-list/vehicle-list.component.ts ***!
          \****************************************************************/
        /*! exports provided: VehicleListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function () { return VehicleListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/vehicle.service */ "./src/app/service/vehicle.service.ts");
            var VehicleListComponent = /** @class */ (function () {
                function VehicleListComponent(vehicleService) {
                    this.vehicleService = vehicleService;
                }
                VehicleListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.vehicleService.filter.subscribe(function (obj) {
                        if (obj.name !== '') {
                            var result = _this.temporaryList.filter(function (vehicle) { return vehicle.name.toLowerCase().includes(obj.name.toLowerCase()); });
                            _this.vehicles = result ? result : [];
                        }
                        else {
                            _this.vehicles = __spread(_this.temporaryList);
                        }
                    });
                    this.vehicleService.getAllVehicles().subscribe(function (data) {
                        _this.vehicles = data;
                        _this.temporaryList = data;
                    });
                };
                VehicleListComponent.prototype.removeVehicleFromList = function (vehicleId) {
                    var _this = this;
                    this.vehicleService.deleteVehicle(vehicleId).subscribe(function () {
                        _this.vehicleService.getAllVehicles().subscribe(function (data) {
                            _this.vehicles = data;
                            _this.temporaryList = data;
                        });
                    });
                };
                VehicleListComponent.prototype.viewMore = function (vehicleId) {
                    this.vehicleId = vehicleId;
                };
                VehicleListComponent.prototype.sortByName = function () {
                    this.sort = 'name';
                };
                VehicleListComponent.prototype.sortByRent = function () {
                    this.sort = 'rent';
                };
                VehicleListComponent.prototype.filterBySeater = function (number) {
                    this.filter = { seater: number };
                };
                VehicleListComponent.prototype.filterByType = function (type) {
                    this.filter = { vehicleType: type };
                };
                return VehicleListComponent;
            }());
            VehicleListComponent.ctorParameters = function () { return [
                { type: src_app_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }
            ]; };
            VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vehicle-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-list/vehicle-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle/vehicle-list/vehicle-list.component.css")).default]
                })
            ], VehicleListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.prod.ts": 
        /*!**********************************************!*\
          !*** ./src/environments/environment.prod.ts ***!
          \**********************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var environment = {
                production: true,
                baseUrl: 'http://localhost:8022'
            };
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                baseUrl: 'url'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\vehicle-project\webapp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map