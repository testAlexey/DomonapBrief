$(document).ready(function () {    var i = 0;    var j = 0;    // ------------------------------------------------------------    var siteTypeSection = $('.select-site-type');    var listOfSiteTypes = siteTypeSection.find('ul').children();    for (i = 0; i < listOfSiteTypes.length; i++) {        $(listOfSiteTypes[i]).find('input').on('click', function (e) {            var cssDisplayStyle = siteTypeSection.find('.other')[0].checked ? 'block' : 'none';            siteTypeSection.find('#other-description').css('display', cssDisplayStyle);            for (j = 0; j < listOfSiteTypes.length; j++) {                $(listOfSiteTypes[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    // ------------------------------------------------------------    var ourTask = $('.select-our-task');    var listOfOurTask = ourTask.find('ul').children();    for (i = 0; i < listOfOurTask.length; i++) {        $(listOfOurTask[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfOurTask.length; j++) {                $(listOfOurTask[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    /**     * ------------------------------------------------------------     */    var chooseTheType = $('.choose-the-type');    var listOfChooseTheType = chooseTheType.find('ul').children();    for (i = 0; i < listOfChooseTheType.length; i++) {        $(listOfChooseTheType[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfChooseTheType.length; j++) {                $(listOfChooseTheType[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    var timeForTheProject = $('.select-time-for-the-project');    var listOftimeForTheProject = timeForTheProject.find('ul').children();    for (i = 0; i < listOftimeForTheProject.length; i++) {        $(listOftimeForTheProject[i]).find('input').on('click', function (e) {            for (j = 0; j < listOftimeForTheProject.length; j++) {                $(listOftimeForTheProject[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var ProjectBudget = $('.select-project-budget');    var listOfprojectBudget = ProjectBudget.find('ul').children();    for (i = 0; i < listOfprojectBudget.length; i++) {        $(listOfprojectBudget[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfprojectBudget.length; j++) {                $(listOfprojectBudget[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var supportOfTheSite = $('.select-support-of-the-site');    var listOfsupportOfTheSite = supportOfTheSite.find('ul').children();    for (i = 0; i < listOfsupportOfTheSite.length; i++) {        $(listOfsupportOfTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfsupportOfTheSite.length; j++) {                $(listOfsupportOfTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    // ---------------------------------------------------------------------    // TODO: IS CORRECT OPTION    // ---------------------------------------------------------------------    var theTargetAudience = $('.select-the-target-audience');    var listOfTheTargetAudience = theTargetAudience.find('ul').children();    for (i = 0; i < listOfTheTargetAudience.length; i++) {        $(listOfTheTargetAudience[i]).find('input').on('click', function (e) {            var cssDisplayStyle = theTargetAudience.find('.other')[0].checked ? 'block' : 'none';            theTargetAudience.find('#other-description-target').css('display', cssDisplayStyle);            for (j = 0; j < listOfTheTargetAudience.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    // ---------------------------------------------------------------------    iterator = 0;    var supportOfTheSite = $('.select-support-of-the-site');    var listOfsupportOfTheSite = supportOfTheSite.find('ul').children();    for (i = 0; i < listOfsupportOfTheSite.length; i++) {        $(listOfsupportOfTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfsupportOfTheSite.length; j++) {                $(listOfsupportOfTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectFormStyle = $('.select-form-style');    var listOfFormStyle = selectFormStyle.find('ul').children();    for (i = 0; i < listOfFormStyle.length; i++) {        $(listOfFormStyle[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfFormStyle.length; j++) {                $(listOfFormStyle[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectDesignWebsite = $('.design-website');    var listOfDesignWebsite = selectDesignWebsite.find('ul').children();    for (i = 0; i < listOfDesignWebsite.length; i++) {        $(listOfDesignWebsite[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfDesignWebsite.length; j++) {                $(listOfDesignWebsite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectBeforeStatingForm = $('.before-stating-form');    var listOfBeforeStatingForm = selectBeforeStatingForm.find('ul').children();    for (i = 0; i < listOfBeforeStatingForm.length; i++) {        $(listOfBeforeStatingForm[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfBeforeStatingForm.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectWebsiteLayout = $('.website-layout');    var listOfWebsiteLayout = selectWebsiteLayout.find('ul').children();    for (i = 0; i < listOfWebsiteLayout.length; i++) {        $(listOfWebsiteLayout[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfWebsiteLayout.length; j++) {                $(listOfWebsiteLayout[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectVisitorsAttention = $('.visitors-attention');    var listOfVisitorsAttention = selectVisitorsAttention.find('ul').children();    for (i = 0; i < listOfVisitorsAttention.length; i++) {        $(listOfVisitorsAttention[i]).find('input').on('click', function (e) {            var cssDisplayStyle = selectVisitorsAttention.find('.other')[0].checked ? 'block' : 'none';            selectVisitorsAttention.find('#other-description-visitors').css('display', cssDisplayStyle);            for (j = 0; j < listOfVisitorsAttention.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var differenceBetweenMainAndInternal = $('.difference-between-main-and-internal');    var listdifferenceBetweenMainAndInternal = differenceBetweenMainAndInternal.find('ul').children();    for (i = 0; i < listdifferenceBetweenMainAndInternal.length; i++) {        $(listdifferenceBetweenMainAndInternal[i]).find('input').on('click', function (e) {            var cssDisplayStyle = differenceBetweenMainAndInternal.find('.other')[0].checked ? 'block' : 'none';            differenceBetweenMainAndInternal.find('#other-description-difference').css('display', cssDisplayStyle);            for (j = 0; j < listdifferenceBetweenMainAndInternal.length; j++) {                $(listdifferenceBetweenMainAndInternal[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectOrientationToPlatforms = $('.orientation-to-platforms');    var listOfOrientationToPlatforms = selectOrientationToPlatforms.find('ul').children();    for (i = 0; i < listOfOrientationToPlatforms.length; i++) {        $(listOfOrientationToPlatforms[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfOrientationToPlatforms.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectGraphicMaterials = $('.graphic-materials');    var listOfSelectGraphicMaterials = selectGraphicMaterials.find('ul').children();    for (i = 0; i < listOfSelectGraphicMaterials.length; i++) {        $(listOfSelectGraphicMaterials[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfSelectGraphicMaterials.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectYouAreSelling = $('.you-are-selling');    var listOfYouAreSelling = selectYouAreSelling.find('ul').children();    for (i = 0; i < listOfYouAreSelling.length; i++) {        $(listOfYouAreSelling[i]).find('input').on('click', function (e) {            for (j = 0; j < listOfYouAreSelling.length; j++) {                $(listOfYouAreSelling[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfCategories = $('.number-of-categories');    var listNumberOfCategories = selectNumberOfCategories.find('ul').children();    for (i = 0; i < listNumberOfCategories.length; i++) {        $(listNumberOfCategories[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfCategories.length; j++) {                $(listNumberOfCategories[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfLevels = $('.number-of-levels');    var listNumberOfLevels = selectNumberOfLevels.find('ul').children();    for (i = 0; i < listNumberOfLevels.length; i++) {        $(listNumberOfLevels[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfLevels.length; j++) {                $(listNumberOfLevels[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfGoods = $('.number-of-goods');    var listNumberOfGoods = selectNumberOfGoods.find('ul').children();    for (i = 0; i < listNumberOfGoods.length; i++) {        $(listNumberOfGoods[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfGoods.length; j++) {                $(listNumberOfGoods[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectRegistrationOfBuyers = $('.registration-of-buyers');    var listRegistrationOfBuyers = selectRegistrationOfBuyers.find('ul').children();    for (i = 0; i < listRegistrationOfBuyers.length; i++) {        $(listRegistrationOfBuyers[i]).find('input').on('click', function (e) {            for (j = 0; j < listRegistrationOfBuyers.length; j++) {                $(listRegistrationOfBuyers[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectIsTheBuyerAllowed = $('.is-the-buyer-allowed');    var listIsTheBuyerAllowed = selectIsTheBuyerAllowed.find('ul').children();    for (i = 0; i < listIsTheBuyerAllowed.length; i++) {        $(listIsTheBuyerAllowed[i]).find('input').on('click', function (e) {            for (j = 0; j < listIsTheBuyerAllowed.length; j++) {                $(listIsTheBuyerAllowed[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectSavingPurchaseHistory = $('.saving-purchase-history');    var listSavingPurchaseHistory = selectSavingPurchaseHistory.find('ul').children();    for (i = 0; i < listSavingPurchaseHistory.length; i++) {        $(listSavingPurchaseHistory[i]).find('input').on('click', function (e) {            for (j = 0; j < listSavingPurchaseHistory.length; j++) {                $(listSavingPurchaseHistory[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectCumulativeDiscount = $('.cumulative-discount');    var listCumulativeDiscount = selectCumulativeDiscount.find('ul').children();    for (i = 0; i < listCumulativeDiscount.length; i++) {        $(listCumulativeDiscount[i]).find('input').on('click', function (e) {            for (j = 0; j < listCumulativeDiscount.length; j++) {                $(listCumulativeDiscount[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectDiscountAccounting = $('.discount-accounting');    var listDiscountAccounting = selectDiscountAccounting.find('ul').children();    for (i = 0; i < listDiscountAccounting.length; i++) {        $(listDiscountAccounting[i]).find('input').on('click', function (e) {            for (j = 0; j < listDiscountAccounting.length; j++) {                $(listDiscountAccounting[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    var iterator = 0;    var selectPaymentMethods = $('.payment-methods');    var listOfPaymentMethods = selectPaymentMethods.find('ul').children();    for (i = 0; i < listOfPaymentMethods.length; i++) {        $(listOfPaymentMethods[i]).find('input').on('click', function (e) {            var cssDisplayStyle = selectPaymentMethods.find('.other')[0].checked ? 'block' : 'none';            selectPaymentMethods.find('#other-description-payment').css('display', cssDisplayStyle);            for (j = 0; j < listOfPaymentMethods.length; j++) {                $(listOfPaymentMethods[j]).find('label').css('color', '#b7bdc2');                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectCurrencies = $('.what-currencies');    var listCurrencies = selectCurrencies.find('ul').children();    for (i = 0; i < listCurrencies.length; i++) {        $(listCurrencies[i]).find('input').on('click', function (e) {            for (j = 0; j < listCurrencies.length; j++) {                $(listCurrencies[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    var iterator = 0;    var selectAcceptingOrders = $('.accepting-orders');    var listAcceptingOrders = selectAcceptingOrders.find('ul').children();    for (i = 0; i < listAcceptingOrders.length; i++) {        $(listAcceptingOrders[i]).find('input').on('click', function (e) {            var cssDisplayStyle = selectAcceptingOrders.find('.other')[0].checked ? 'block' : 'none';            selectAcceptingOrders.find('#other-description-accepting-orders').css('display', cssDisplayStyle);            for (j = 0; j < listAcceptingOrders.length; j++) {                $(listAcceptingOrders[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    var iterator = 0;    var selectCommodityAccounting = $('.commodity-accounting');    var listCommodityAccounting = selectCommodityAccounting.find('ul').children();    for (i = 0; i < listCommodityAccounting.length; i++) {        $(listCommodityAccounting[i]).find('input').on('click', function (e) {            var cssDisplayStyle = selectCommodityAccounting.find('.other')[0].checked ? 'block' : 'none';            selectCommodityAccounting.find('#other-description-commodity-accounting').css('display', cssDisplayStyle);            for (j = 0; j < listCommodityAccounting.length; j++) {                $(listCommodityAccounting[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfVisits = $('.number-of-visits');    var listNumberOfVistits = selectNumberOfVisits.find('ul').children();    for (i = 0; i < listNumberOfVistits.length; i++) {        $(listNumberOfVistits[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfVistits.length; j++) {                $(listNumberOfVistits[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectPurposeOfTheSite = $('.purpose-of-the-site');    var listPurposeOfTheSite = selectPurposeOfTheSite.find('ul').children();    for (i = 0; i < listNumberOfVistits.length; i++) {        $(listPurposeOfTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listPurposeOfTheSite.length; j++) {                $(listPurposeOfTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectControlSystem = $('.control-system');    var listControlSystem = selectControlSystem.find('ul').children();    for (i = 0; i < listControlSystem.length; i++) {        $(listControlSystem[i]).find('input').on('click', function (e) {            var cssDisplayStyle = selectControlSystem.find('.other')[0].checked ? 'block' : 'none';            selectControlSystem.find('#other-description-control-system').css('display', cssDisplayStyle);            for (j = 0; j < listControlSystem.length; j++) {                $(listControlSystem[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfPages = $('.number-of-pages');    var listNumberOfPages = selectNumberOfPages.find('ul').children();    for (i = 0; i < listNumberOfPages.length; i++) {        $(listNumberOfPages[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfPages.length; j++) {                $(listNumberOfPages[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectSectionsOfTheSite = $('.sections-of-the-site');    var listSectionOfTheSite = selectSectionsOfTheSite.find('ul').children();    for (i = 0; i < listSectionOfTheSite.length; i++) {        $(listSectionOfTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listSectionOfTheSite.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectUserRegistration = $('.user-registration');    var listUserRegistration = selectUserRegistration.find('ul').children();    for (i = 0; i < listUserRegistration.length; i++) {        $(listUserRegistration[i]).find('input').on('click', function (e) {            for (j = 0; j < listUserRegistration.length; j++) {                $(listUserRegistration[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectNumberOfVisitOnTheSite = $('.number-of-visits-on-the-site');    var listNumberOfVisitOnTheSite = selectNumberOfVisitOnTheSite.find('ul').children();    for (i = 0; i < listNumberOfVisitOnTheSite.length; i++) {        $(listNumberOfVisitOnTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listNumberOfVisitOnTheSite.length; j++) {                $(listNumberOfVisitOnTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectVideoOnTheSite = $('.video-on-the-site');    var listVideoOnTheSite = selectVideoOnTheSite.find('ul').children();    for (i = 0; i < listVideoOnTheSite.length; i++) {        $(listVideoOnTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listVideoOnTheSite.length; j++) {                $(listVideoOnTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectBrandCompanyBook = $('.brand-company-book');    var listBrandCompanyBook = selectBrandCompanyBook.find('ul').children();    for (i = 0; i < listBrandCompanyBook.length; i++) {        $(listBrandCompanyBook[i]).find('input').on('click', function (e) {            for (j = 0; j < listBrandCompanyBook.length; j++) {                $(listBrandCompanyBook[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectLogo = $('.logo');    var listLogo = selectLogo.find('ul').children();    for (i = 0; i < listLogo.length; i++) {        $(listLogo[i]).find('input').on('click', function (e) {            for (j = 0; j < listLogo.length; j++) {                $(listLogo[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectFillingTheSite = $('.filling-the-site');    var listFillingTheSite = selectFillingTheSite.find('ul').children();    for (i = 0; i < listFillingTheSite.length; i++) {        $(listFillingTheSite[i]).find('input').on('click', function (e) {            for (j = 0; j < listFillingTheSite.length; j++) {                $(listFillingTheSite[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectCopyright = $('.copywriting');    var listCopyright = selectCopyright.find('ul').children();    for (i = 0; i < listCopyright.length; i++) {        $(listCopyright[i]).find('input').on('click', function (e) {            for (j = 0; j < listCopyright.length; j++) {                $(listCopyright[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectOptimizationTask = $('.optimization-task');    var listOptimizationTask = selectOptimizationTask.find('ul').children();    for (i = 0; i < listOptimizationTask.length; i++) {        $(listOptimizationTask[i]).find('input').on('click', function (e) {            for (j = 0; j < listOptimizationTask.length; j++) {                $(listOptimizationTask[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }    iterator = 0;    var selectSiteForms = $('.site-forms');    var listSiteForms = selectSiteForms.find('ul').children();    for (i = 0; i < listSiteForms.length; i++) {        $(listSiteForms[i]).find('input').on('click', function (e) {            for (j = 0; j < listSiteForms.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectMarketingServices = $('.marketing-services');    var listMarketingServices = selectMarketingServices.find('ul').children();    for (i = 0; i < listMarketingServices.length; i++) {        $(listMarketingServices[i]).find('input').on('click', function (e) {            for (j = 0; j < listMarketingServices.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectLongTermSupport = $('.long-term-support');    var listLongTermSupport = selectLongTermSupport.find('ul').children();    for (i = 0; i < listLongTermSupport.length; i++) {        $(listLongTermSupport[i]).find('input').on('click', function (e) {            for (j = 0; j < listLongTermSupport.length; j++) {                var el = $(listOfTheTargetAudience[j]);                var isChecked = el.find('input')[0].checked;                el.find('label').css('color', isChecked ? '#3c434d' : '#b7bdc2');            }        });    }    iterator = 0;    var selectTasksOfSearchOptimization = $('.tasks-of-search-optimization');    var listTasksOfSearchOptimization = selectTasksOfSearchOptimization.find('ul').children();    for (i = 0; i < listTasksOfSearchOptimization.length; i++) {        $(listTasksOfSearchOptimization[i]).find('input').on('click', function (e) {            for (j = 0; j < listTasksOfSearchOptimization.length; j++) {                $(listTasksOfSearchOptimization[j]).find('label').css('color', '#b7bdc2');            }            $(e.currentTarget.parentElement).find('label').css('color', '#3c434d');        });    }});/*  return;*//*var sityTypeItems = $('.get-site-type').children();var pagesDifferenceItems = $('.get-pages-difference').children();// TODO: Правильно переименовать по примеру сверхуvar listSityTypeItems_3 = $('.get-site-type_3').children();var listSityTypeItems_4 = $('.get-site-type_4').children();var listSityTypeItems_5 = $('.get-site-type_5').children();for (var i = 0; i < sityTypeItems.length; i++) {    $(sityTypeItems[i]).on('click', function () {        $('#description-of-site-style')[0].style.display = $('.get-site-type-other')[0].checked ? 'block' : 'none';    });}for (var j = 0; j < listSityTypeItems_2.length; j++) {    $(listSityTypeItems_2[j]).on('click', function () {        $('#more_4')[0].style.display = $('.get-site-type_2-two')[0].checked ? 'block' : 'none';    });}for (var k = 0; k < listSityTypeItems_3.length; k++) {    $(listSityTypeItems_3[k]).on('click', function () {        $('#more_6')[0].style.display = $('.get-site-type_three')[0].checked ? 'block' : 'none';    });}for (var n = 0; n < listSityTypeItems_4.length; n++) {    $(listSityTypeItems_4[n]).on('click', function () {        $('#more_7')[0].style.display = $('.get-site-type_four')[0].checked ? 'block' : 'none';    });}// TODO: 456for (var t = 0; t < listSityTypeItems_5.length; t++) {    $(listSityTypeItems_5[t]).on('click', function () {        $('#more_8')[0].style.display = $('.get-site-type_five')[0].checked ? 'block' : 'none';    });}});*/$(function () {    $('[data-toggle="tooltip"]').tooltip()});$(function () {    $(".input input").focus(function () {        $(this).parent(".input").each(function () {            $("label", this).css({                "line-height": "18px",                "font-size": "12px",                "font-weight": "100",                "top": "0px"            });            $(".spin", this).css({                "width": "100%"            })        });    }).blur(function () {        $(".spin").css({            "width": "0px"        });        if ($(this).val() == "") {            $(this).parent(".input").each(function () {                $("label", this).css({                    "line-height": "30px",                    "font-size": "16px",                    "font-weight": "300",                    "top": "35px"                })            });        }    });});/*function showMe(box) {    var vis = (box.checked) ? "block" : "none";    document.getElementById('more').style.display = vis;}*//*function showMe_2(box) {    var vis = (box.checked) ? "block" : "none";    document.getElementById('more_3').style.display = vis;}function showMe_3(box) {    var vis = (box.checked) ? "block" : "none";    document.getElementById('more_5').style.display = vis;}*/