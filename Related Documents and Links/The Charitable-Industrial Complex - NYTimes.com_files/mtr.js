/**
 * Default creatives
 */

(function(root, factory) {
    'use strict';
    // exports for NYT5
    if (typeof define === "function" && define.amd) {
        define('auth/gateway/creatives', ['jquery/nyt'], function($) {
            return factory($);
        });
    }

    // exports for NYT4
    else if (typeof root.NYTD === 'object') {
        NYTD.GatewayCreatives = factory(NYTD.jQuery);
    }

} (this, function($) {
    var self = this;
    var passThroughUrl = encodeURIComponent(window.location.protocol + '//') + window.location.host + encodeURIComponent(window.location.pathname) + window.location.search;

    return {
        defaultPayCreative:  [
           '<div style="color: #000 !important; text-align: left !important; padding: 10px 10px 10px 15px; border: 5px solid #8f8c89 ; width: 751px ; margin: 0 auto ; height: 375px ; background: #ffffff ; -moz-border-radius: .8em !important; -webkit-border-radius: .8em !important; border-radius: .8em !important;">',
               '<div>',
                    '<p style="font-family: georgia, verdana, serif !important; font-size: 27px !important; font-weight: bold !important; font-style: normal !important; margin: 10px 0 0 0; line-height: 130% !important;">',
                        'Thank you for visiting NYTimes.com',
                    '</p>',
                    '<p style="font-family: georgia, verdana, serif !important; font-weight: bold !important; font-size: 17px !important; margin: 17px 0 0 0 !important; line-height: 130% !important; font-style: normal !important;">',
                        'We hope you&#8217;ve enjoyed your 10 free articles this month.',
                    '</p>',
              '</div>',
              '<div>',
                   '<div style="width: 460px; margin-right: 5px; float: left;">',
                        '<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 22px 0 0 0; font-size: 15px !important; line-height: 140% !important;">',
                          'You can come back next month for another 10 free articles, or <br />choose unlimited access with a Digital Subscription and continue <br />to enjoy the world&#8217;s best journalism, anytime, anywhere and on <br />any device. Subscribing is quick and easy.',
                        '</p>',
                        '<br /><br /><br />',
                        '<a data-content-collection="GWtoDSLP"  data-content-placement="1"  style="cursor: pointer; position: relative; margin: 15px 0 15px 0; background: url(http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/btn-middle.gif) repeat-x 0 0; display: block; width: 230px !important; height: 34px !important; text-align: center !important; text-decoration: none;" href="http://www.nytimes.com/subscriptions/Multiproduct/lp3826.html?campaignId=3J4RL" alt="" >',
                           '<span style="position: absolute; background: url(http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/btn-ends.gif) no-repeat left top; height: 34px !important; width: 7px !important; display: block; top: 0; left: -1px;"></span>',
                           '<span style="font-family: arial, helvetica, sans-serif !important; font-weight: bold !important; font-size: 15px !important; padding-top: 7px; color: #fff; text-transform: uppercase; display: block; line-height: 130% !important; ">See My Options &#9658;</span>',
                           '<span style="position: absolute; background: url(http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/btn-ends.gif) no-repeat left -42px; height: 34px; width: 7px; display: block; top: 0; right: -1px;"></span>',
                        '</a>',
                    '</div>',
                    '<div style="width: 280px; float: left; margin: 35px 0 0 0;">',
                        '<img src="http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/devices-white.jpg" alt="" width="280" height="150" alt="The New York Times Digital Platforms"/>',
                    '</div>',
                    '<div style="clear: both; margin: 0; padding-top: 10px;">',
                        '<div style="float: right; width: 220px; text-align: right;">',
                            '<img src="http://graphics8.nytimes.com/subscriptions/gateway/gw1/img/nyt-logo-white.gif" alt="The New York Times" width="195" height="31"/>',
                        '</div>',
                        '<div style="float: left; width: 501px; position: relative;">',
                            '<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 0 0 5px 0; font-size: 13px !important; line-height: 140%;">',
                                'Already a Home Delivery Subscriber? Get your free, unlimited access ',
                                '<a data-content-collection="GWtoHDLP"  style="color: #blue; text-decoration: underline; color: #002c5e; cursor:pointer; font-size: 13px !important;" href="https://myaccount.nytimes.com/link/homedelivery">here</a>.',
                            '</p>',
                            '<p style="font-family: georgia, verdana, serif !important; font-style: normal !important; margin: 0 0 5px 0; font-size: 13px !important; line-height: 140% !important;">',
                               'Already a Digital Subscriber? ',
                                '<a class="sitewideLogInModal login-modal-trigger" style="color: #blue; text-decoration: underline; color: #002c5e; cursor:pointer; font-size: 13px !important;" id="NYTDGWY_login" href="https://myaccount.nytimes.com/auth/login">Log in here</a>.',
                            '</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('\n'),

        defaultRegiCreative:  [
            '<div style="width:775px !important; height:402px !important; margin: 0 auto; background-color:#FFF; position: relative !important;">',
                '<div id="register-at-btn" style="position: absolute !important; top:165px !important; left:259px !important; display: block; width:260px !important; height:100px !important;">',
                    '<a href="#" style="padding:6px 100px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:16px !important;">Register</a>',
                '</div>',
                '<div style="position: absolute !important; top:250px !important; left:21px !important; width:733px !important; height: 131px !important; background-color:#f2f2f2 !important; border-top: 1px solid #c0c0c0 !important;">',
                    '<div style="float:left;">',
                        '<p style="padding-left: 152px !important;font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important; margin-top:15px;">Already registered?</p>',
                        '<p style="padding-left: 152px !important;font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important; margin-top:-10px;"><a data-content-collection="RWtoLogin" href="https://myaccount.nytimes.com/auth/login" style="text-decoration:none;color:#5874c0;font-weight: bold;">Log In &raquo;</a></p>',
                    '</div>',
                    '<div style="float:left;">',
                        '<p style="padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:15px; color: #2e2e2e; margin-top:15px; line-height:18.75px;">Or, subscribe now and get<br />unlimited access to all of our articles.<br /><span style="font-weight:bold !important">Just 99¢ for your first 4 weeks.</span></p>',
                        '<p style="padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:15px; color: #2e2e2e; margin-top:-10px; line-height:18.75px;"><a data-content-collection="RWtoDSLP"  data-content-placement="1" href="http://www.nytimes.com/subscriptions/Multiproduct/lp5558.html?campaignId=368YY" style="text-decoration:none;color:#5874c0;font-weight: bold !important; margin-top:12px !important;">See subscription options &raquo;</a></p>',
                        '<p style="margin-top:20px !important;margin-bottom:none !important;padding-left: 100px !important;font-family: Arial, Helvetica, sans-serif;font-size:13px; line-height:16.25px;"><a data-content-collection="RWtoTOS" href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html" style="color:#5874c0;">Terms of Service</a> | <a data-content-collection="RWtoPP" href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html" style="color:#5874c0;">Privacy Policy</a></p>',
                    '</div>',
                '</div>',
                '<div id="register-at-box" style="position: absolute !important; top:151px !important; left:207px !important; display: none; width:360px !important; height:310px !important; background-color: #FFF !important; border: 1px solid #dedede !important; -webkit-box-shadow: 0 0 7px #ccc !important; -moz-box-shadow: 0 0 7px #ccc !important; box-shadow: 0 0 7px #ccc !important;">',
                    '<div style="width:340px !important; height:20px !important; margin:auto !important; padding-top: 7px !important; border-bottom: 1px solid #c0c0c0 !important; position: relative !important; margin-bottom: 16px !important;">',
                        '<a id="close-register-at-box" href="#" style="position: absolute !important; display: block !important; top:0 !important; right: 0 !important; width: 54px !important; height: 26px !important;"><img src="http://graphics8.nytimes.com/subscriptions/regiwall/close.png" alt="CLOSE" border="0"/></a><span style="font-family: Arial, Helvetica, sans-serif !important;font-size:10px !important; color: #2e2e2e !important;">REGISTER AT NYTIMES.COM</span>',
                    '</div>',
                    '<div style="float:left;display:inline;width:128px !important;text-align:right !important;padding-bottom:10px !important;padding-right:10px !important;padding-top:3px !important;">',
                        '<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important;">E-Mail:</span>',
                    '</div>',
                    '<form id="gateway_form" method="post" action="https://myaccount.nytimes.com/register?URI=' + passThroughUrl + '&amp;ssp=1">',
                        '<input id="regiWall_isContinue" type="hidden" name="is_continue" value="false">',
                        '<input id="regiWallToken" type="hidden" name="token">',
                        '<input id="regiWallExpires" type="hidden" name="expires">',
                        '<div style="float:left !important;display:inline !important;width:200px !important;padding-bottom:10px !important;">',
                            '<input id="regiwall_email_field" type="email" name="email_address" size="32" style="border: 1px solid #bdbab8 !important; width:160px !important;line-height:18px !important; height:20px;">',
                        '</div>',
                        '<div style="float:left !important;clear:both !important;display:inline !important;width:138px !important;text-align:right !important;padding-top: 3px !important;padding-bottom:10px !important;">',
                            '<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important;padding-right:10px !important;">Password:</span>',
                        '</div>',
                        '<div style="float:left !important;display:inline !important;width:200px !important;padding-bottom:10px !important;">',
                            '<input id="regiwall_password1_field" type="password" name="password1" size="32" style="border: 1px solid #bdbab8; width:160px;line-height:18px !important;height:20px;">',
                        '</div>',
                        '<div style="float:left !important;clear:both !important;display:inline !important;width:138px !important;text-align:right !important;padding-top: 3px !important;padding-bottom:10px !important;">',
                            '<span style="font-family: Arial, Helvetica, sans-serif;font-size:11px; color: #2e2e2e;padding-right:10px;">Retype Password:</span>',
                        '</div>',
                        '<div style="float:left;display:inline;width:200px;padding-bottom:10px !important;">',
                            '<input id="regiwall_password2_field" type="password" name="password2" size="32" style="border: 1px solid #bdbab8 !important; width:160px !important;line-height:18px !important;height:20px;">',
                        '</div>',
                        '<div style="clear:both !important; width:200px !important;margin-left:138px !important;">',
                            '<!--<input type="checkboxXXX" name="receive-updates" style="float:left !important; margin:0 5px 20px 0 !important;">-->',
                            '<input id="gateway_update_box" type="checkbox" name="subscribe[]" value="MM" checked="false" style="float:left !important; margin:0 5px 20px 0 !important;">',
                            '<p style="font-family: Arial, Helvetica, sans-serif !important;font-size:11px !important; color: #2e2e2e !important; line-height:13.75px">Receive occasional updates and special offers for The New York Times\'s products and services.</p>',
                            '<p style="font-family: Verdana, Geneva, sans-serif !important;font-size:9px !important; color: #2e2e2e !important;margin-bottom_XXX:16px !important; line-height:11.25px">Already have an NYTimes.com<br />account? <a data-content-collection="RWtoLogin" href="https://myaccount.nytimes.com/auth/login" style="text-decoration:none !important;color:#004276 !important;">Log In</a>.</p>',
                            '<!--<a href="#" style="padding:6px 16px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:12px !important;">Create My Account</a>-->',
                            '<button id="gateway_form_submit" type="submit" style="padding:6px 16px !important;background-color:#5874c0 !important;color:#FFF !important;text-decoration: none !important;font-family: Arial, Helvetica, sans-serif !important;font-size:12px !important;">Create My Account</button>',
                        '</div>',
                        '<div id="regiWallEmptyEmailError"     class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please enter your e-mail address.</div>',
                        '<div id="regiWallInvalidEmailError"   class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please enter a valid e-mail address.</div>',
                        '<div id="regiWallPasswordMatchError"  class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Passwords entries must match.</div>',
                        '<div id="regiWallPasswordLengthError" class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Passwords must be between 5 and 15 characters.</div>',
                        '<div id="regiWallRequiredEmptyError"  class="regiWallError" style="padding-left:100px; color:#bb111d; display:none">Please fill in all the fields.</div>',

                    '</form>',
                '</div>',
                '<div style="width:773px !important; height: 400px !important; border: 1px solid #000 !important;">',
                    '<div style="width:734px !important; margin:auto !important; border-bottom: 1px solid #c0c0c0 !important;">',
                        '<img src="http://graphics8.nytimes.com/subscriptions/regiwall/Times-logo.png" alt="The New York Times" border="0" style="padding-left: 261px !important;"/>',
                    '</div>',
                    '<div style="text-align:center !important;margin-top: 28px !important;">',
                        '<span style="font-family: Times, serif !important;font-size:26px !important; color: #5874c0 !important;">To continue reading this article, please log in or register for free.</span><br/>',
                        '<span style="font-family: Arial, Helvetica, sans-serif !important;font-size:15px !important; color: #2e2e2e !important;">As a registered user, you\'ll also enjoy recommendations and the ability to save, comment, and share.</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('\n')
    };
}));

/**
 * Gateway
 * Loads paywall and regiwall creatives
 */
(function(root, factory) {
    'use strict';

    // exports for NYT5
    if (typeof define === "function" && define.amd) {
        define('auth/gateway', ['jquery/nyt', 'auth/gateway/creatives'], function($, creatives) {
            return factory($, creatives, 'NYT5');
        });
    }

    // exports for NYT4
    else if (typeof root.NYTD === 'object') {
        NYTD.Gateway = factory(NYTD.jQuery, NYTD.GatewayCreatives, 'NYT4')
    }

} (this, function($, creatives, nytVersion) {

    return function(wallType) {

        var stg = window.location.host.indexOf('.stg.') > 0;
        var wwwHost = stg ? 'http://www.stg.nytimes.com' : 'http://www.nytimes.com';
        var imageHost = stg ? 'http://static.stg.nytimes.com' : 'http://graphics8.nytimes.com';

        var REGI = 'regi';
        var PAY = 'pay';
        var self = this;
        var overlayCreative;

        if(nytVersion === 'NYT5') {
            overlayCreative = [
                '<div id="overlay" class="z-index-gateway-overlay" style="',
                    'visibility: visible;',
                    'background: transparent;',
                    'background:-moz-linear-gradient(center bottom , #fff, rgba(255,255,255,0));',
                    'background:-ms-linear-gradient(top, transparent, white);',
                    'background: -webkit-gradient(linear, left bottom, left top, from(#fff), to(transparent));',
                    'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00ffffff\', endColorstr=\'#ffffff\',GradientType=0 ); ',
                    'position:fixed; width:100%; height:0px; bottom:0; left:0; display: none">',
                '</div>'
            ].join('');
        }
        else if (nytVersion === 'NYT4') {
            overlayCreative = [
                '<div id="overlay" style="',
                    'z-index:1000;',
                    'background: transparent;',
                    'background:-moz-linear-gradient(center bottom , #000, transparent);',
                    'background:-ms-linear-gradient(top, transparent, black);',
                    'background: -webkit-gradient(linear, left bottom, left top, from(#000), to(transparent));',
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00000010\', endColorstr=\'#000000\');',
                    'position:fixed; width:100%; height:0px; bottom:0; left:0; display: none">',
                '</div>'
            ].join('');
        };

        var getCookie = function(name) {
            return (new RegExp(name + '=([^;]+)', 'i')).test(unescape(document.cookie)) ? RegExp.$1 : null;
        };

        var getMeterPageCount = function() {
            if (!getMeterPageCount.ret) { 
                var cookie = getCookie('nyt-m') || getFromLocalStorage('nyt-m') || window.name || '';
                var match = cookie.match(/v=i.([0-9]+)/);
                getMeterPageCount.ret = (match && match[1]) ? parseInt(match[1], 10) : null;
            }    
            return getMeterPageCount.ret;
        };
        
        var getPageType = function() {
            if (!getPageType.ret) { 
                var pt = $("meta[name='PT']")[0];
                pt = (pt && pt.content) || null;
                getPageType.ret = pt.replace(/ /g, '');
            }
            return  getPageType.ret; 
        };

        /**
         * Adds the overlay to the page
         *
         * @method addOverlay
         * @private
         *
         * @return {Void}
         */
        var addOverlay = function() {
            display(overlayCreative,
                function() {
                    var supportsTransitions = document.body.style.webkitTransition !== undefined ||
                               document.body.style.MozTransition !== undefined ||
                               document.body.style.OTransition !== undefined ||
                               document.body.style.msTransition !== undefined;

                    // recalculates overlay when users resize window
                    var fixOverlayHeight = function() {
                        $("#overlay").css('height', getGatewayHeight());
                    };

                    // recalculates every time window resizes
                    $(window).on('resize', function() {
                        fixOverlayHeight();
                    });
                    // fixes background for IE
                    if (!supportsTransitions) {
                        $('#overlay').css('background-image', 'url(' + imageHost + '/images/global/backgrounds/transparentBG.gif)');
                    }
                    // fixes Overlay Height for initial load
                    fixOverlayHeight();
                }
            );
        };

        this.webtrendsTrack = function(action, args, desc) {
           if ('TAGX' in window) {
                TAGX.EventProxy.trigger(action, args, desc);
            } else {
                setTimeout(function() {
                    self.webtrendsTrack(action, args, desc);
                }, 1000);
            }
        };

        var filterObject = function(obj, arr) {
            var result = {};
            $.each(obj, function(k,v) { if(arr.indexOf(k) > -1) { result[k] = v; } });
            return result;
        };

        var updateQueryStringParameter = function(uri, key, value) {
            var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i"),
                returnVal;
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                returnVal = uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                returnVal = uri + separator + key + "=" + value;
            }

            return returnVal;
        }

        var processUrlHrefForTagx = function($anchor, paramObj) {
            var url = $anchor.attr("href"),
                goToPage,
                goToMatch,
                paramObj,
                param;

            if (!url) { return; }

            url = decodeURIComponent(url);
            goToMatch = url.match('[?|&]goto=([^;]+)');
            goToPage = (goToMatch && goToMatch[1]) || null;

            if (!goToPage) {
                for (param in paramObj) {
                    url = updateQueryStringParameter(url, param, paramObj[param]);
                }
            }
            else {
                for (param in paramObj) {
                    goToPage = updateQueryStringParameter(goToPage, param, paramObj[param]);
                }
                url = updateQueryStringParameter(url, "goto", encodeURIComponent(goToPage));
            }
            $anchor.attr("href", url);
        }

        var edition = unescape(document.cookie).match('NYT-Edition=([^;]+)');

        var trackingParams = {
            et: {
                common: {
                    'version':            'meter at ' +  getMeterPageCount(),
                    'region':             'FixedCenter',
                    'pgtype':             getPageType()
                },
                load: {
                    'module':             'Gateway',
                    'action':             'Impression',
                    'eventName':          'Impression'
                },
                modalLogin: {
                    'module':             'Gateway-Login',
                    'action':             'click',
                    'eventName':          'login-click'
                },
                modalRegi: {
                    'module':             'Gateway-Regi',
                    'action':             'click',
                    'eventName':          'regi-click'
                },
                links: {
                    'module':             'Gateway-Links',
                    'action':             'click',
                    'contentCollection':  'gateway-links-click'
                }
            }
        };

        if(wallType === REGI) {
            var regiwallOverride = {
                et: {
                    load: {
                        'module':             'RegiWall',
                        'eventName':          'Impression'
                    },
                    modalLogin: {
                        'module':             'RegiWall-Login',
                        'eventName':          'login-click'
                    },
                    modalRegi: {
                        'module':             'RegiWall-Regi',
                        'eventName':          'regi-click'
                    },
                    links: {
                        'module':             'RegiWall-Links',
                        'contentCollection':  'regiwall-links-click'
                    }
                }
            };
            $.extend(trackingParams, regiwallOverride);
        }

        var addClickTracking = function() {
            $("#gatewayUnit a").each(function() {
                var tp = trackingParams;
                if($(this).hasClass('login-modal-trigger')) {
                    $(this).on('click', function() {
                        var tagxArgs = $.extend({}, tp.et.common, tp.et.modalLogin);
                        self.webtrendsTrack('gateway-login-click', tagxArgs, 'interaction');
                    });
                }
                else if($(this).hasClass('registration-modal-trigger')) {
                    $(this).on('click', function() {
                        var tagxArgs = $.extend({}, tp.et.common, tp.et.modalRegi);
                        self.webtrendsTrack('gateway-regi-click', tagxArgs, 'interaction');
                    });
                }
                else {
                    var paramsFromLink = filterObject($(this).data(), ['contentCollection', 'contentPlacement']);
                    var tagxArgs = $.extend({}, tp.et.common, tp.et.links, paramsFromLink);
                    processUrlHrefForTagx($(this), tagxArgs);
                }
            });
        };

        var runWhenReady = function(testFunction, inFunction, mlsecs, reps) {
            setTimeout(function z() {
                if(testFunction()) { inFunction(); }
                else if(--reps)    { setTimeout(z, mlsecs); }
            }, mlsecs);
        };

        /**
         * Send parameters to upt tracker.
         *
         * @method uptTrack
         * @private
         *
         * @param {String} arguments the key value pairs of parameters to send to webtrends
         * @return {Void}
         */
        var uptTrack = function(value, dataObj) {
            dataObj = dataObj || {};
            runWhenReady (
                function() { return (window.NYTD && NYTD.UPTracker && NYTD.UPTracker.track) },
                function() {
                    NYTD.UPTracker.track({ eventType : value, data: dataObj });

                },
                100, 50
            );
        };

        /**
         * Gets the ADX Setup url based on the edition cookie and paywall type
         *
         * @method getAdxSetupUrl
         * @private
         *
         * @return {String} The adx setup url for the gateway creative
         */
        var getAdxSetupUrl = function() {
            //var edition = unescape(document.cookie).match('NYT-Edition=([^;]+)');
            // if it's the paywall, return gateway setup url
            if (wallType === PAY) {
                return (edition && edition[1] == "edition|GLOBAL") ? "gateway-global.nytimes.com" : "gateway.nytimes.com";
            }
            // if it's the regiwall, return regiwall setup url
            else {
                return (edition && edition[1] == "edition|GLOBAL") ? "regiwall-global.nytimes.com" : "regiwall.nytimes.com";
            }
        };

        /**
         * Calculates an element that provides reference on what should be covered by the overlay.
         * If masthead is returned, for instance, this means everything below the masthead should
         * be covered by the overlay.
         * Areas covered by the overlay are not clickable, therefore we generally want to
         * keep the subnavigation, navigation and masthead free.
         *
         * @method getReferenceForClickableArea
         * @private
         *
         * @return {String} The adx setup url for the gateway creative
         */
        var getReferenceForClickableArea = function() {
            // Forced placement anchor. Overrides all other classes
            var gatewayAnchor = $('.gateway-anchor').first();
            // NYT5 "navigation"
            var nyt5masthead = $('#masthead .container').first();
            // nyt4 navigation
            var mainNav = $('.navigation').first();
            // nyt4 subnavigation
            var secondaryNav = mainNav.next('.subNavigation');
            // sitewide masthead
            var masthead = $('#masthead');

            if (gatewayAnchor.length > 0) {
                return gatewayAnchor;
            }
            if (nyt5masthead.length > 0) {
                return nyt5masthead;
            }
            if (secondaryNav.length > 0) {
                return secondaryNav;
            }
            else if (mainNav.length > 0) {
                return mainNav;
            }
            else if (masthead.length > 0){
                return masthead;
            }
            // can't find anything, cover entire body
            return $(document.body);
        };

        /**
         * Calculates the height of the overlay. It should be from the bottom of the visible
         * viewport up to the referenceForClickableArea element
         *
         * @method getGatewayHeight
         * @private
         *
         * @return {Function} The function that calculates the gateway height
         */
        var getGatewayHeight = function() {
            var clickableNavHeight = 0;
            var clickableArea = getReferenceForClickableArea();

            if(clickableArea.offset() === null) {
                return "70%";
            }
            else {
                return $(window).height() - (clickableArea.offset().top + clickableArea.height());
            }
        };

        /**
         * If body is ready, displays html at main (if exists) or body and call callback.
         * If body is not ready, set a timer to check until it is.
         *
         * @method display
         * @private
         *
         * @param {String} html The markup to add to the page
         * @param {Function} callback Optional Function to call when the markup was added to the page
         *
         * @return {Function} The function that calculates the gateway height
         */
        var display = function(html, callback) {
            if (!document.body || !document.body.firstChild) {
                setTimeout(function(){
                    display(html, callback);
                }, 100);
                return;
            }
            var scriptTags = html.match(/<script[^>]*>[^<]*<\/script>/gi) || [];
            var deleteArray = [];
            $.each(scriptTags, function() {
                var scriptSrc = this.match(/src=\"[^\"]*\"/);
                   if(scriptSrc) {
                    scriptSrc = scriptSrc[0];
                    scriptSrc = scriptSrc.substring(5, scriptSrc.length - 1);
                    $.ajaxSetup({ cache: true });
                    $.ajax({
                        url: scriptSrc,
                        dataType: 'script'
                    });
                    deleteArray.push(this);
                }
                else if(this.match(/type *= *\"text\/html\"/)) {
                    // do nothing
                }
                else {
                    deleteArray.push(this);
                }
            });
            
            $.each(deleteArray, function() {
                var pattern = new RegExp(this);
                html = html.replace(pattern, '');
            });
            $('body').append(html);

            if (callback) callback();
        };

        /**
         * Calls adx to get the gateway creative and adds markup to the page.
         * If adx doesn't respond in 5 seconds, add default gateway markup.
         *
         * @method addCreative
         * @private
         *
         * @param {String} html The markup to add to the page
         * @param {Function} callback Optional Function to call when the markup was added to the page
         *
         * @return {Function} The function that calculates the gateway height
         */
        var addCreative = function() {
            var timeout = 5000; // 5 seconds
            var defaultTimer;
            var isDefaultLoaded = false;

            var success = function(resp) {
                var creatives = '';

                clearTimeout(defaultTimer);

                // checks if this took so long we've already loaded
                // the default gateway
                if (isDefaultLoaded) return;

                // if the adx response is broken, error out
                if (!resp || !resp.ads || typeof resp.ads.Gateway !== 'object') return error();

                // adds markup to the page
                $.each(resp.ads, function(key, record) {
                    creatives += record.creative;
                });

                displayCreatives(creatives);
                runWhenReady (
                    function() { return $('#gatewayCreative').length; },
                    function() { addClickTracking(); },
                    100, 50
                );
            };

            var error = function() {
                // clear the timeout so we don't call this function twice
                // in the case adx response was broken
                clearTimeout(defaultTimer);
                isDefaultLoaded = true;

                // load default creative; defaults to paywall creative
                displayCreatives((wallType === REGI) ? creatives.defaultRegiCreative : creatives.defaultPayCreative);
                runWhenReady (
                    function() { return $('#gatewayCreative').length; },
                    function() { addClickTracking(); },
                    100, 50
                );

                uptTrack((wallType === REGI) ? 'defaultRegiwall' : 'defaultGwy');
            };

            var processToken = function(response) {
                var inputFieldsValid = validateFormOnSubmit();
                $('#regiWallToken').val(response.data.token);
                $('#regiWallExpires').val(new Date().getTime() + 930000);

                if (inputFieldsValid) {
                    setTimeout(function () {
                        document.getElementById('gateway_form').submit();
                    }, 0);
                }
            };

            var setListenersOnCreative = function() {
                if(wallType === REGI) {
                    $("#register-at-btn a").click(function(event) {
                        event.preventDefault();
                        $("#register-at-btn").hide();
                        $(".regiWallError").css("display","none");
                        $("#register-at-box").show();
                    });

                    $("#close-register-at-box").click(function(event) {
                        event.preventDefault();
                        $("#register-at-box").hide();
                        $("#register-at-btn").show();
                    });

                    $('#gateway_form_submit').on('click', function () {
                        var callbackName = String(String.fromCharCode(97 + Math.round(Math.random() * 25))+(new Date()).getTime()),
                            script = document.createElement('script');

                        script.src = 'http://www.nytimes.com/svc/profile/token.jsonp?callback=' + callbackName;
                        window[callbackName] = processToken;
                        document.getElementsByTagName('head')[0].appendChild(script);
                        return false;
                    });
                    $('#regiwall_email_field, #regiwall_password1_field, #regiwall_password2_field').on('blur', validateInputOnBlur);
                }
            };

            var displayCreatives = function(creatives) {
                // adds the overlay to the page
                addOverlay();

                // adds the creative to the page
                var gatewayCreativeStyle = "width:100%; position:fixed; bottom: 80px; display: none; left:0;"
                if (nytVersion === 'NYT4') {
                    gatewayCreativeStyle += " z-index: 1000000040;"
                }
                creatives = (['<div id="gatewayCreative" class="z-index-gateway-overlay" style="' + gatewayCreativeStyle + '">',
                                '<div id="gatewayUnit" style="position:relative">']
                                    .concat(creatives).concat([
                                '</div>',
                             '</div>'])).join('');

                // when we finally get the creative, fade in both overlay and creative
                display(creatives,
                    function() {
                        setTimeout(function(){
                            $('#overlay').fadeIn();
                            $('#gatewayCreative').fadeIn();
                            setListenersOnCreative();
                        }, 200);
                    }
                );
            };

            function handleInputError(fieldId) {
                $("#regiWallEmptyEmailError, #regiWallInvalidEmailError, #regiWallPasswordMatchError, #regiWallPasswordLengthError, #regiWallRequiredEmptyError").hide();
                $(fieldId).show();
            }

            var validateInputOnBlur = function (e) {
                var $field = $(e.target);
                var fieldId = $field.attr('id');

                switch (fieldId) {
                    // e-mail
                    case 'regiwall_email_field':
                        if ($field.val() !== '') {
                            $('#regiWallEmptyEmailError').css('display', 'none');
                            if ($field.val().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) { // TODO: is it universal enough???
                                $('#regiWallInvalidEmailError').css('display', 'none');
                            }
                            else {
                                $('#regiWallInvalidEmailError').css('display', 'block');
                            }
                        }
                        else {
                            $('#regiWallEmptyEmailError').css('display', 'block');
                            $('#regiWallInvalidEmailError').css('display', 'none');
                        }
                        break;

                    // password fields
                    case 'regiwall_password1_field': /* falls through */
                    case 'regiwall_password2_field':

                        var pass1val = $('#regiwall_password1_field').val();
                        var pass2val = $('#regiwall_password2_field').val();
                        var pass1Len = pass1val.length;
                        var pass2Len = pass2val.length;
                        var $passMatchError = $('#regiWallPasswordMatchError');
                        var $passLengthError = $('#regiWallPasswordLengthError');

                        if (fieldId === 'regiwall_password1_field') {
                            // if entered passwords were equal
                            if ($('#regiwall_password2_field').val().length > 0 &&
                                $field.val() === pass2val) {
                                $passMatchError.css('display', 'none');
                            }
                            else if (pass2val > 0) {
                                $passMatchError.css('display', 'block');
                            }
                        }
                        else if (fieldId === 'regiwall_password2_field') {
                            if ($field.val() === pass1val) {
                                $passMatchError.css('display', 'none');
                            }
                            else {
                                $passMatchError.css('display', 'block');
                            }
                        }

                        if (pass1Len >= 5 && pass1Len <= 15 && pass2Len >= 5 && pass2Len <= 15) {
                            $passLengthError.css('display', 'none');
                        }
                        else if (pass1Len > 0 && pass2Len > 0) {
                            $passLengthError.css('display', 'block');
                        }

                        break;
                    // no default
                }
            };

            var validateFormOnSubmit = function() {
                var inputsValidFlag = 1,
                    $email = $('#regiwall_email_field'),
                    $pass1 = $('#regiwall_password1_field'),
                    $pass2 = $('#regiwall_password2_field'),
                    emailVal = $email.val(),
                    pass1Val = $pass1.val(),
                    pass2Val = $pass2.val(),
                    pass1ValLen = pass1Val.length,
                    pass2ValLen = pass2Val.length;

                if ($.trim(emailVal) === '' && $.trim(pass1Val) === '' && $.trim(pass2Val) === '') {
                    inputsValidFlag = 0;
                    handleInputError('regiWallRequiredEmptyError');
                }
                else if ($.trim(emailVal) === '') {
                    inputsValidFlag = 0;
                    handleInputError('regiWallEmptyEmailError');
                }
                else if (!emailVal.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
                    inputsValidFlag = 0;
                    handleInputError('regiWallInvalidEmailError');
                }
                else if (pass1Val === '') {
                    inputsValidFlag = 0;
                    handleInputError('regiWallRequiredEmptyError');
                }
                else if (pass1Val !== pass2Val) {
                    inputsValidFlag = 0;
                    handleInputError('regiWallPasswordMatchError');
                }
                else if ((pass1ValLen < 5 || pass1ValLen > 15) || (pass2ValLen < 5 || pass2ValLen > 15)) {
                    inputsValidFlag = 0;
                    handleInputError('regiWallPasswordLengthError');
                }
                return inputsValidFlag;
            }

            $.ajax({
                url: wwwHost + '/adx/bin/adxrun.html?v=3&jsonp=?',
                dataType: 'jsonp',
                data: {
                    page: getAdxSetupUrl(),
                    positions: 'Gateway',
                    keywords: (typeof define === "function" && define.amd) ? 'nyt5' : 'nyt4'
                },
                success: success
            });

            defaultTimer = setTimeout(error, timeout);
        };

        /**
         * Use webtrends to track gateway appearance
         *
         * @method trackGateway
         * @private
         *
         * @return {Void}
         */
        var trackGateway = function() {
            if(wallType === REGI) {
                var tagxArgs = $.extend(
                    {},
                    trackingParams.et.common,
                    trackingParams.et.load
                );
                self.webtrendsTrack('regiwall-load', tagxArgs, 'impression');

            }
            else {
                var tagxArgs = $.extend(
                    {},
                    trackingParams.et.common,
                    trackingParams.et.load
                );
                self.webtrendsTrack('gateway-load', tagxArgs, 'impression');
            }
        };

        /**
         * Handles loading the gateway and performing basic avoidance loopholes function
         *
         * @method Gateway
         * @private
         *
         * @return {Object}
         */
        var blockContent = function() {

            /**
             * Remove avoidance methods and content from the page.
             *
             * @method monitorAvoidance
             * @private
             */
            var monitorAvoidance = function() {
                stopScrolling();
                removeNYTClean();
                scrap();
            };

            /**
             * Prevents users from scrolling so they can't see the content beneath the overlay
             *
             * @method stopScrolling
             * @private
             *
             * @return {Void}
             */
            var stopScrolling = function() {
                // scroll to the top of the page
                window.scroll(0,0);
                // hides overflow
                $('body').css({'overflow': 'hidden', 'margin': '0 0 85px 0', 'padding-right': '15px'});
                $('html').css({'overflow':'hidden'});
                // unbind touch and keypress evnets
                $(document).off('keypress keydown keyup touchmove');
                // stop arrow key navigation
                $(document).on('keypress keydown keyup', function(e) {
                    if (e.keyCode in {"37": "LEFT", "38": "UP", "39": "RIGHT", "40": "DOWN", "36": "HOME", "35": "END", "33": "PAGEUP", "34": "PAGEDOWN"}) {
                        e.preventDefault();
                        return false;
                    }
                });
                // stop swipe navigation
                $(document).on('touchmove', function(e) {
                    e.preventDefault();
                });
                // remove Prototype event binders
                // remove when NYT4 is legacy
                if (window.Event && typeof Event.stopObserving === 'function') {
                    Event.stopObserving(document, 'keydown');
                    Event.stopObserving(document, 'keyup');
                    Event.stopObserving(document, 'keypress');
                    Event.stopObserving(window, 'keydown');
                    Event.stopObserving(window, 'keyup');
                    Event.stopObserving(window, 'keypress');
                }
            };

            /**
             * Removes content from the page and places a call to action button
             *
             * @method scrap
             * @private
             */
            var scrap = function() {
                $(['#article .articleInline',
                  '#article #readerscomment',
                  '#article .articleFooter',
                  '#article .authorIdentification',
                  '#article #articleExtras',
                  '#article .articleBottomExtra',
                  '#article .emailAlertModule',
                  '#article #pageLinks',
                  '#twitter-widget-0',
                  '.videoplayerContainer',
                  'iframe',
                  '.slideShowModule',
                  '#subscribeCallToAction',
                  '#story figure'].join(',')).remove();

                $(['#article .articleBody p',
                  '#content .entry-content p',
                  '#content .postContent p',
                  '#story .story-body-text'].join(',')).each(function(i, el){
                    var limit = 1;
                    el = $(el);
                    if (i === 0) {
                        var txt = el.html();
                        if (txt.length && txt.length < 400) limit = 2;
                    }
                    if (i == limit) {
                        var calltoActionButton = $('<p id="subscribeCallToAction" style="text-align: center; margin-top: 28px; font-family: arial,helvetica,sans-serif; font-size: 1.2em; font-weight: bold;"><a  data-content-collection="GWtoDSLP" data-content-placement="1" class="applicationButtonLt" href="http://www.nytimes.com/articlegate" style="width: 250px; padding: 7px 25px !important; font-weight: bold; color: #004276; text-decoration: none"><span>To see the full article, subscribe here.</span></a></p>');
                        calltoActionButton.insertAfter(el);
                    }
                    else {
                        if (i > limit) { el.remove(); }
                    }
                });
            };

            /**
             * Checks if the page has NYTClean;
             * if so, and reloads
             *
             * @method removeNYTClean
             * @private
             */
            var removeNYTClean = function() {
                $('script').each(function() {
                    if ($(this).attr('src') && $(this).attr('src').toLowerCase().indexOf('euri.ca') > 0) {
                        trackAvoidance('NYTClean');
                        window.location.reload();
                        return false;
                    }
                });
            };

            var runWhenReady = function(testFunction, inFunction, mlsecs, reps) {
                setTimeout(function z() {
                    if(testFunction()) { inFunction(); }
                    else if(--reps)    { setTimeout(z, mlsecs); }
                }, mlsecs);
            };

            /**
             * Sends upt tracking for avoidance methods
             *
             * @method trackAvoidance
             * @private
             *
             * @param  {String} typeOfAvoidance The type of avoidance method to track
             * @return {Void}
             */
            var trackAvoidance = function(typeOfAvoidance){
                uptTrack("domHack", { type : typeOfAvoidance });
            };

            monitorAvoidance();
            setInterval(monitorAvoidance, 1000);

        };

        /**
         * start everything
         */
        blockContent();
        addCreative();
        trackGateway();
    };

}));


/**
 * Mtr
 *
 * handles loading and interpreting the meter
 *
 * @method mtr
 * @private
 *
 * @return {Object}
 */
(function(root, factory) {
    'use strict';

    // exports for NYT5
    if (typeof define === "function" && define.amd) {
        define(['jquery/nyt', 'auth/gateway'], function($, Gateway) {
            return factory($, Gateway);
        });
    }

    // exports for NYT4
    else if (typeof root.NYTD === 'object') {
        NYTD.Meter = factory(NYTD.jQuery, NYTD.Gateway);
    }

} (this, function($, Gateway) {


    'use strict';

    var urlHash, cookieHash, gatewayType, currentCleanUrl, initialCheckMeterOptions;

    var stg = window.location.host.indexOf('.stg.') > 0;
    var wwwHost = stg ? 'http://www.stg.nytimes.com' : 'http://www.nytimes.com';
    var jsHost = stg ? 'http://static.stg.nytimes.com' : 'http://graphics8.nytimes.com';
    var imageHost = stg ? 'http://static.stg.nytimes.com' : 'http://graphics8.nytimes.com';
    var myaccountHost = stg? 'http://myaccount.stg.nytimes.com' : 'http://myaccount.nytimes.com';

    var backupMeterSvc = '//meter-svc.nytimes.com/meter-echo.js?callback=?';
    var meterSvc = '//meter-svc.nytimes.com/meter.js?callback=?';
    var gatewayScript = jsHost + '/js/gwy.js';

    var meterServiceCallbackList = [];
    var meter = {loaded: false};

    /**
     * Attempts to load cookie from browser cache
     * When no cookie is present, backup meter service returns a
     * 304 which will force the browser to look at the local cache, which
     * will execute the callback.
     * We add a timeout to execute a regular checkMeter call because jsonp doesn't
     * throw errors.
     *
     * @private
     *
     * @return {Void}
     */
    var loadCookieFromBackupMeter = function() {
        pingBackupMeter();
        setTimeout(function() {
           checkMeter(initialCheckMeterOptions);
        }, 1500);
    };

    /**
     * Backs up the current meter value as a file in the browser cache
     * @private
     *
     * @return {Void}
     */
    var pingBackupMeter = function() {
        //addScript(backupMeterSvc);
        $.ajax({
            dataType: 'jsonp',
            url: backupMeterSvc,
            jsonpCallback: 'NYT_meterBackupCallback'
        });
    };

    /**
     * Function callback when the backup meter service responds
     * @public
     *
     * @return {Void}
     */
    var meterBackupCallback = function(resp) {
        if (!resp) return;
        if (getCookie('nyt-m')) return;
        if (resp && resp["nyt-m"]) {
            setCookie('nyt-m', resp['nyt-m'], 715);
        }
    };
    // sets window reference for meter backup callback
    // see https://confluence.em.nytimes.com/pages/viewpage.action?pageId=17216651
    window.NYT_meterBackupCallback = meterBackupCallback;

    /**
     * Removes gateway hash from url
     * @private
     *
     * @return {Void}
     */
    var removeGatewayHash = function() {
        window.location.replace(window.location.href.replace(/(\?|&)gwh=([^&]+)/g, '').replace(/(\?|&)gwt=([^&]+)/g, ''));
    };

    /**
     * Add gateway hash to url and reloads the page
     * @method addGatewayHash
     * @private
     *
     * @return {Void}
     */
    var addGatewayHash = function(hash, hitPaywall, hitRegiwall) {
        var anchor, url, wallType;
        wallType = hitPaywall ? 'pay' : 'regi';
        anchor = unescape(window.location.href).split('#');
        anchor = anchor.length > 1 ? '#' + anchor[1] : null;
        hash = 'gwh=' + hash + '&gwt=' + wallType;
        url = window.location.search ? window.location.href + '&' + hash :  window.location.href + '?' + hash;
        url = anchor ? url.replace(anchor, '') + anchor : url;
        window.location.replace(url);
    };

    /**
     * Get data from local storage
     * @method getFromLocalStorage
     * @private
     *
     * @param {String} key The key to be retrieved
     * @return {String}
     */
    var getFromLocalStorage = function(key) {
        try { return hasLocalStorage() && window.localStorage.getItem("nyt-m"); }
        catch(e) { return null; }
    };

    /**
     * Verifies if browser can handle local storage
     * @method hasLocalStorage
     * @private
     *
     * @return {Boolean}
     */
    var hasLocalStorage = function() {
        // excludes IE8 users due to bug 78654
        if (/MSIE 8.0/.test(navigator.userAgent)) { return false; }
        try { return ('localStorage' in window && window.localStorage !== null); }
        catch(e) { return false; }
    };

    /**
     * Sets key, value to local storage
     * @method setToLocalStorage
     * @private
     *
     * @param {String} key The name of the value to be stores
     * @param {String} value The value to be stored
     */
    var setToLocalStorage = function(key, value) {
        if(hasLocalStorage()){
            try { window.localStorage.setItem(key, value); }
            catch(e) { }
        }
    };

    /**
     * Get cookie
     * @method getCookie
     * @private
     *
     * @param {String} name The cookie name to be retrieved
     * @return {String} the cookie value
     */
    var getCookie = function(name) {
        return (new RegExp(name + '=([^;]+)', 'i')).test(unescape(document.cookie)) ? RegExp.$1 : null;
    };

    /**
     * Sets cookie
     *
     * @method setCookie
     * @public
     *
     * @param key {String} the name of the cookie
     * @param value {String} value of the cookie
     * @param expires {otional -- number of days}
     * @path  {optional}
     * @domain {optional}
     *
     * @return {void}
     */
    var setCookie = function (name, value, expires) {
        var today = new Date();
        today.setTime(today.getTime());

        if(expires) { expires = expires * 1000 * 60 * 60 * 24; }
        var expires_date = new Date(today.getTime() + (expires));

        var cookieStr = name + "=" + value + ";path=/" +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "" ) + ";domain=.nytimes.com";
        document.cookie = cookieStr;
    };


    /**
     * Expires the cookie in key
     *
     * @method expireCookie
     * @public
     *
     * @param key {String} cookie name to expire
     *
     * @return {void}
     */
    var expireCookie = function(key) {
        setCookie(key, '', (new Date()).getTime()-10000);
    };

    /**
     * Gets meter cookie
     * Tries cookie and other backup methods (local storage, window name, etc)
     * @method getMeterCookie
     * @private
     *
     * @return {String}
     */
    var getMeterCookie = function() {
        var cookie = getCookie('nyt-m') || getFromLocalStorage('nyt-m') || window.name || '';
        setCookie('nyt-m', cookie, 730);
        backupMeterCookie(cookie);
        return cookie;
    };

    /**
     * Backs up meter cookie so we can retrieve it later if the user deletes
     * the cookies
     * @method backupMeterCookie
     * @private
     *
     * @param {String} cookie The cookie value to back up
     * @return {String}
     */
    var backupMeterCookie = function(cookie) {
        setToLocalStorage('nyt-m', cookie);
        window.name = cookie;
    };

    /**
     * Gets hash from cookie
     * @method getCookieHash
     * @private
     *
     * @return {String}
     */
    var getCookieHash = function() {
        return getMeterCookie().substr(0,32);
    };

    /**
     * Returns the kind of wall (regi, pay)
     * @method getWallFlag
     * @private
     *
     * @return {String} regi, pay
     */
    var getGatewayType = function() {
        var gwt = (/gwt=([^&]+)/.test(unescape(window.location.search.substring(1))) ? RegExp.$1 : '');
        if (gwt === 'regi') { return 'regi'; }
        return 'pay';
    };

    /**
     * Gets hash from url (gwh=...)
     * @method getUrlHash
     * @private
     *
     * @return {String}
     */
    var getUrlHash = function() {
        return (/gwh=([^&]+)/.test(unescape(window.location.search.substring(1))) ? RegExp.$1 : '');
    };

    /**
     * Load Gateway into page
     * @private
     *
     * @return {Void}
     */
    var getMeterPageCount = function() {
        // TODO memoize this
        var match = getMeterCookie().match(/v=i.([0-9]+)/);
        return (match && match[1]) ? parseInt(match[1], 10) : null;
    };

    /**
     * Remove all hashes and query strings from url
     * @public
     *
     * @param  {String} url the url to clean
     * @return {String}
     */
    var cleanUrl = function(url) {
        return window.location.href.replace(/\b\?.+/g, '').replace(/\b\#.+/g, '');
    };

    /**
     * Makes escape key stop working
     * @private
     * @param  {Event} e the keypress event
     */
    var onEscapeKey = function(e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            return false;
        }
    };

    /**
     * When the page changes url, we automatically dispatch a meter call
     * @method onUrlChange
     * @private
     *
     * @return {Void}
     */
    var onUrlChange = function() {
        var newUrl = cleanUrl(window.location.href);
        if (currentCleanUrl != newUrl) {
            checkMeter({url: window.location.href, referrer: currentCleanUrl});
            currentCleanUrl = newUrl;
        }
    };

    /**
     * Loads the meter service with specified parameters
     * @public
     *
     * @param {Object} options: Optional, options to call the meter service
     *        @param {String} options.url: Optional, the url for the page who's calling the meter.
     *               If left blank, defaults to window.location.href
     *        @param {Function} options.callback: Optional, function for callback when the
     *               meter service finishes loading
     *        @param {Function} options.referrer: Optional, url referral
     * @return {Void}
     */
    var checkMeter = function(options) {

        // define priority list to load cookie from if current cookie is invalid
        // localStorage and window.name (we use pop so it's defined in inverse order)
        var meterCookieBackupPriorityList = [getFromLocalStorage('nyt-m'), window.name];

        var callMeterService = function(options) {
            // if check meter is called without a url, use the current location
            var url = options.url || window.location.href;
            // if check meter is called without a referrer, use the current window to avoid
            // carrying over a social referrer or blank url
            // also checks for both spellings, 'referrer' and 'referer'
            var referrer = (options.referrer === null || options.referrer === undefined) ? window.location.href : options.referrer;

            if (options.callback) meterServiceCallbackList.push(options.callback);

            $.ajax({
                dataType: 'jsonp',
                url: meterSvc,
                data: {
                    url: url,
                    // meter service uses the correct spelling, 'referer', whereas
                    // W3C uses the incorrect spelling, as in document.referrer
                    referer: referrer
                },
                success: function(response) {

                    var payload;
                    var meterCount = getMeterPageCount();

                    // if nyt-m is not valid, attempt to load meter again with backup cookies
                    if (response.isCookieValid === false && meterCookieBackupPriorityList.length > 0) {
                        setCookie('nyt-m', meterCookieBackupPriorityList.pop(), 730);
                        callMeterService(options);
                        return;
                    }

                    // backup the meter cookie we've just received
                    pingBackupMeter();

                    // add tracking metatag
                    $('head').append('<meta name="WT.z_cad" content="' + (response.counted ? '1' : '0') + '" /> ');

                    // if we hit the paywall or the regiwall, load it
                    // do not proceed as the page will reload...
                    if (response.hitPaywall || response.hitRegiwall) {
                        addGatewayHash(response.hash, response.hitPaywall, response.hitRegiwall);
                        return;
                    }

                    // sets meter as loaded
                    meter.loaded = true;
                    meter.final = true;
                    meter.meterOn = response.meter;
                    meter.gatewayOn = response.gateway;
                    meter.hitPaypall = response.hitPaypall;
                    meter.hitRegiwall = response.hitRegiwall;
                    meter.cookieValid = response.isCookieValid;
                    meter.pageCount = meterCount;
                    meter.url = url;

                    // execute callbacks that where waiting for meter to load
                    $.each(meterServiceCallbackList, function(index, callback) { callback(meter); });
                    meterServiceCallbackList = [];

                    // notify listeners that meter has loaded
                    $(document).trigger('NYTD:MeterLoaded', meter);
                    $(document).trigger('NYTD:MeterFinal', meter);

                    // stop blocking the escape key
                    $(document).off('keydown', onEscapeKey);

                }
            });
        };

        // makes escape key stop working while we're trying to load the meter
        $(document).on('keydown', onEscapeKey);

        options = options || {};

        // sets loaded as false, since we're requesting meter again
        meter.loaded = false;

        // call meter service with current options
        callMeterService(options);

    };

    /**
     * Load Gateway into page
     * @private
     *
     * @return {Void}
     */
    var loadGateway = function() {
        meter.final = true;
        $(document).trigger('NYTD:MeterFinal', meter);

        pingBackupMeter();
        // adds gateway
        if (Gateway) {
            new Gateway(getGatewayType());
        }
        else {
            $.ajax({
                url: gatewayScript,
                dataType: 'script',
                success: function() {
                    new NYTD.Gateway(getGatewayType());
                }
            });
        }
    };

    // listens for popstate events and calls the meter accordingly
    $(document).on('popstate', onUrlChange);

    // initializes current clean url, stripping it out of hashtags, query strings, etc.
    currentCleanUrl = cleanUrl(window.location.href);

    // check current state on load
    urlHash = getUrlHash();
    cookieHash = getCookieHash();
    initialCheckMeterOptions = {url: window.location.href, referrer: document.referrer};
    // handles page state at load time
    if (!getMeterCookie()) {
        loadCookieFromBackupMeter();
    }
    else if (!urlHash) {
        checkMeter(initialCheckMeterOptions);
    }
    else if (urlHash && !cookieHash || urlHash !== cookieHash) {
        removeGatewayHash();
    }
    else if (urlHash && cookieHash && urlHash === cookieHash) {
        loadGateway();
    }

    /**
     * Return globals
     */
    meter.check = checkMeter;
    return meter;

}));

