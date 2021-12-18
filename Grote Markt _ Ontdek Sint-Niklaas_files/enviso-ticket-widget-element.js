import{h as e,_ as t}from"../../lit-element-c3a34c4d.js";import{_ as i}from"../../asyncToGenerator-851657ca.js";import{_ as s,p as n,c as o}from"../../decorators-ce493718.js";import{u as r}from"../../until-d8ab4e47.js";import{E as a}from"../../enviso-base-element-7720bae3.js";import"../../styling-service-949bd6a8.js";import{k as d}from"../../enviso-core-resolver-a0ffcb6f.js";import"../../language-service-4beb8b03.js";import"../../ticketing-widget-api-service-3fed8a17.js";import"../../rest-service-ef467820.js";import{a as l}from"../../ui-helpers-76fea19f.js";import{E as p}from"../../ui-helper-db91afe6.js";import{g as m}from"../../ui-helper-f0df7268.js";import{g as c,C as h}from"../../checkout-steps-04bc0503.js";import{c as f}from"../../basket-analytics-helper-c18f4185.js";import{b as v}from"../../enviso-element-decorators-7913d71d.js";import"../common/enviso-button-element.js";import"./enviso-ticket-order-complete-step-element.js";import"./enviso-offer-overview-element.js";import"./enviso-offer-info-dialog-element.js";import"./enviso-ticket-flow-element.js";import"../basket/enviso-basket-flow-element.js";import"../basket/enviso-basket-button-element.js";import"../basket/enviso-basket-expiry-countdown-element.js";import"../auth/enviso-profile-element.js";import"../../visibility-service-4d0e548d.js";import"../../enviso-base-resolver-9f88e729.js";import"../../formatting-306884c5.js";import"../../timespan-58e96bff.js";import"../../enviso-ticketing-widget-api-resolver-12184266.js";import"../../json-d85853e6.js";import"../../memoize-ee256513.js";import"../../enumerable-decorator-bdddda34.js";import"../common/enviso-dialog-element.js";import"../common/enviso-icon-element.js";import"../common/enviso-tab-context-element.js";import"../../persisted-value-a31d28a8.js";import"../../persistence-service-7e916cee.js";import"../../class-map-e99c11c0.js";import"../../ui-helpers-1bd973f9.js";import"../../ticketing-widget-view-d95c7912.js";import"./enviso-offer-card-element.js";import"./enviso-offer-filters-element.js";import"../../enviso-accordion-item-element-0f84fc26.js";import"../../if-defined-02e607fe.js";import"../common/enviso-calendar-element.js";import"../common/enviso-responsive-element.js";import"../common/enviso-calendar-month-element.js";import"../common/enviso-calendar-legend-element.js";import"../common/enviso-dropdown-button-element.js";import"../common/enviso-expand-element.js";import"../common/enviso-multiselect-element.js";import"../common/enviso-numeric-up-down-element.js";import"../common/enviso-loader-element.js";import"../errors/enviso-api-error-element.js";import"../../enviso-step-element-834852ed.js";import"../basket/enviso-individual-visitor-info-element.js";import"./enviso-time-selection-step-element.js";import"./enviso-time-selection-element.js";import"./enviso-timeslot-element.js";import"../common/enviso-loader-overlay-element.js";import"./enviso-ticket-selection-step-element.js";import"./enviso-ticket-selection-element.js";import"./enviso-ticket-item-element.js";import"./enviso-payment-step-element.js";import"../payment/enviso-payment-element.js";import"../payment/enviso-v1-payment-element.js";import"../../ui-helpers-334b9bd8.js";import"../payment/enviso-v2-payment-element.js";import"../basket/enviso-basket-items-element.js";import"../basket/enviso-basket-overview-element.js";import"../basket/enviso-basket-discount-element.js";import"../basket/enviso-basket-fees-element.js";import"../basket/enviso-basket-my-info-element.js";import"../basket/enviso-customer-info-element.js";import"../../ui-helper-3302c70e.js";import"../common/enviso-checkbox-element.js";import"../basket/enviso-dynamic-form-element.js";import"../../has-changed-3935f133.js";import"../../ui-helpers-ff982b26.js";import"../common/enviso-textbox-element.js";import"../common/enviso-flag-element.js";import"../common/enviso-textarea-element.js";import"../common/enviso-date-element.js";import"../common/enviso-radio-element.js";import"../common/enviso-country-select-element.js";import"../../countries-06628f09.js";import"../common/enviso-select-element.js";import"../common/enviso-notice-element.js";import"../../enviso-dropdown-menu-item-element-e770d71e.js";import"../auth/enviso-sign-up-form-element.js";import"../auth/enviso-sign-in-form-element.js";var u,k,b,g,y,w,j,O,C,I,E,x;!function(e){e[e.OfferOverview=0]="OfferOverview",e[e.TicketFlow=1]="TicketFlow",e[e.BasketFlow=2]="BasketFlow",e[e.PaymentComplete=3]="PaymentComplete"}(x||(x={}));var B=class extends a{constructor(){super(),this.email="",this.orderId="",this.step=x.OfferOverview,this.isFirstOfferOverviewLoad=!0,this.settingsChangedEventListener=e=>this.onSettingsChangedEventListener(e),this.basketExpiredEventListener=()=>this.onBasketExpiredEvent(),this.basketChangedEventListener=()=>this.onBasketChangedEvent(),this.showOfferSpecs=!1,this.includedOfferIds=[],this.excludedOfferIds=[],this.indicateLastTickets=!1,this.lastTicketsPercentage=25,this.showDatePopup=!1,this.payingOrder=!1,this.showOfferPeriod=!1,this.orderFailedError=void 0,this.hideNumbers=!1,this.basketExpired=!1,this.disableAutoVisitTimeSelection=!1,p.resolve()}get configuredOfferId(){var e;return null!==(e=this.offerId)&&void 0!==e?e:this.settings.offerId}get multipleOffers(){return!(this.configuredOfferId&&this.numberOfOffers().then((e=>1===e)))}numberOfOffers(){var e=this;return i((function*(){return yield l().fetchOffers(e.language.code,e.includedOfferIds,e.excludedOfferIds).then((e=>e.length))}))()}render(){var i;switch(this.step===x.OfferOverview&&this.configuredOfferId&&(this.selectedOfferId=this.configuredOfferId,this.step=x.TicketFlow),this.step){case x.OfferOverview:i=e(u||(u=t(['\n                    <enviso-responsive max-width="744" responsive-class="mobileHeader">\n                        <header class="enviso-ticket-widget-offers-header">','</header>\n                    </enviso-responsive>\n                    <enviso-notice class="margin-top-1em" ?hidden="','">\n                        <enviso-icon name="clock"></enviso-icon>','\n                    </enviso-notice>\n                    <enviso-offer-overview class="enviso-ticket-widget-offers"\n                        .includedOfferIds="','"\n                        .excludedOfferIds="','"\n                        @buyticketsclick="','"\n                        ?show-date-popup="','"\n                        .indicateLastTickets="','"\n                        .lastTicketsPercentage="','">\n                    </enviso-offer-overview>'])),this.t("Plan your visit"),!this.basketExpired,this.t("Unfortunately your order has expired. Please try ordering again."),this.includedOfferIds,this.excludedOfferIds,(e=>this.onBuyTicketsClicked(e)),this.showDatePopup&&this.isFirstOfferOverviewLoad,this.indicateLastTickets,this.lastTicketsPercentage);break;case x.TicketFlow:i=e(k||(k=t(["\n                    <nav>\n                    ",'\n                    </nav>\n                    <header class="enviso-ticket-widget-offer-name">\n                        ','\n                    </header>\n                    <enviso-ticket-flow offer-id="','" ?hide-numbers="','" ?show-offer-specs="','" ?show-offer-period="','" .indicateLastTickets="','" .lastTicketsPercentage="','" .preferredDates="','" @reservationscreated="','" @step-changed="','" ?auto-select-visit-time="','">\n                        <div slot="continueShopping" class="enviso-continue-shopping">\n                            ',"\n                        </div>\n                    </enviso-ticket-flow>"])),this.multipleOffers?r(l().fetchOffers(this.language.code,this.includedOfferIds,this.excludedOfferIds).then((i=>{if(i.length>1)return e(b||(b=t(['<enviso-button icon-name="back-arrow-open" class="enviso-ticket-widget-offer-back-link" @click="','">',"</enviso-button>"])),(()=>this.onBackToOfferOverviewClicked()),this.t("Plan your visit"))}))):"",r(l().fetchOfferDetail(this.selectedOfferId,this.language.code).then((i=>e(g||(g=t(["\n                            <span>",'</span>\n                            <enviso-button icon-name="info-squared" icon-only @click="','">',"</enviso-button>\n                        "])),i.localizedName,(()=>this.onMoreInfoClick(i)),this.t("More info"))))),this.selectedOfferId,this.hideNumbers,this.showOfferSpecs,this.showOfferPeriod,this.indicateLastTickets,this.lastTicketsPercentage,this.preferredDates,(()=>this.onReservationsCreated()),(()=>this.onStepChanged()),!this.disableAutoVisitTimeSelection,this.multipleOffers?r(l().fetchOffers(this.language.code,this.includedOfferIds,this.excludedOfferIds).then((i=>{if(i.length>1)return e(y||(y=t(['\n                                    <enviso-button class="btnPreviousStep" icon-name="back-arrow" @click="','">\n                                        ',"\n                                    </enviso-button>\n                                    "])),(()=>this.continueShopping()),this.t("Plan your visit"))}))):"");break;case x.BasketFlow:var s;i=e(w||(w=t(["\n                    ",'\n                    <header class="enviso-ticket-widget-offer-name">\n                        <span>','</span>\n                    </header>\n                    <enviso-basket-flow ?hide-numbers="','" .terms="','" .newsletter="','"\n                        @ordercreated="','" @orderfailed="','"\n                        @paymentverified="','" @paymentfailed="','" @paymentverificationfailed="','"\n                        @step-changed="','">\n                        <div slot="continueShopping">\n                            <enviso-button class="btnPreviousStep" icon-name="back-arrow" @click="','">\n                                ','\n                            </enviso-button>\n                        </div>\n                        <div slot="above-basket-items">\n                            <slot name="above-basket-items">\n                            </slot>\n                        </div>\n                        <div slot="below-basket-items">\n                            <slot name="below-basket-items">\n                            </slot>\n                        </div>\n                    </enviso-basket-flow>'])),this._if(!this.payingOrder,e(j||(j=t(['\n                    <nav>\n                        <enviso-button icon-name="back-arrow-open" class="enviso-ticket-widget-offer-back-link" @click="','">',"</enviso-button>\n                    </nav>\n                    "])),(()=>this.continueShopping()),this.t("Continue shopping"))),this.t("Checkout"),this.hideNumbers,null!==(s=this.terms)&&void 0!==s?s:"",this.newsletter,this.onOrderCreated,this.onOrderFailed,this.onPaymentVerified,this.onPaymentFailed,this.onPaymentVerificationFailed,this.onStepChanged,(()=>this.continueShopping()),this.t("Continue shopping"));break;case x.PaymentComplete:var n;i=e(O||(O=t(['\n                    <enviso-ticket-order-complete-step .orderId="','" .email="','" ?failed="','" status="','" order-failed-error="','">\n                    </enviso-ticket-order-complete-step>'])),this.orderId,this.email,!!this.orderFailedError,this.paymentStatus,null!==(n=this.orderFailedError)&&void 0!==n?n:"")}return super.applyStyle(e(C||(C=t(['\n        <style>\n            :host\n            {\n                display: block;\n\n                /* Enables absolute positioning of basket button within */\n                position: relative;\n            }\n\n            :host([show-date-popup])\n            {\n                min-height: 34em\n            }\n\n            [hidden]\n            {\n                display: none;\n            }\n\n            .margin-top-1em\n            {\n                margin-top: 1em;\n            }\n\n            #enviso-basket-button\n            {\n                float: right;\n                margin: 0.5em;\n            }\n\n            .enviso-ticket-widget-offers-header\n            {\n                font-size: 2em;\n                font-weight: bold;\n                color: var(--enviso-primary-color, #113974);\n                line-height: 1.5em;\n            }\n\n            .enviso-ticket-widget-offers\n            {\n                margin-top: 1.5em;\n            }\n\n            .enviso-ticket-widget-offer-name\n            {\n                font-size: 1.5em;\n                line-height: 1.5em;\n                min-height: 1.5em;\n                margin-bottom: 1em;\n            }\n\n            .enviso-ticket-widget-offer-back-link\n            {\n                height: 2em;\n                padding: 0;\n            }\n\n            .mobileHeader\n            {\n                text-align: center;\n            }\n\n            .mobileHeader .enviso-ticket-widget-offers-header\n            {\n                margin: 0 1.5em;\n            }\n\n            .btnPreviousStep\n            {\n                display: block;\n                margin-top: 13px;\n                margin-bottom: 13px;\n            }\n\n            .enviso-continue-shopping\n            {\n                display: inline-block;\n            }\n\n            .internal-enviso-profile-button\n            {\n                float: right;\n            }\n        </style>\n        <section>\n            <slot name="above-ticket-widget"></slot>\n            ',"\n            ","\n            ",'\n        </section>\n        <enviso-offer-info-dialog>\n        </enviso-offer-info-dialog>\n        <slot name="below-ticket-widget"></slot>\n        '])),this._if(this.showAuth,e(I||(I=t(['\n            <enviso-profile class="internal-enviso-profile-button" .terms="','" .privacy="','"></enviso-profile>\n            '])),this.terms,this.privacy)),this._if(this.canShowBasketButton,e(E||(E=t(['\n            <enviso-basket-button\n                id="enviso-basket-button"\n                @click="','">\n            </enviso-basket-button>'])),this.onBasketButtonClick)),i))}firstUpdated(e){super.firstUpdated(e),this.updateComplete.then((()=>{this.isMerchantReturn&&(this.step=x.BasketFlow,this.requestUpdate())}))}connectedCallback(){super.connectedCallback(),this.settings.addEventListener("change",this.settingsChangedEventListener),m().addEventListener("change",this.basketChangedEventListener),m().addEventListener("expire",this.basketExpiredEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.settings.removeEventListener("change",this.settingsChangedEventListener),m().removeEventListener("change",this.basketChangedEventListener),m().removeEventListener("expire",this.basketExpiredEventListener)}get steps(){return this.$("steps")}get isMerchantReturn(){return!!d("payload")||!!d("paymentReference")}get canShowBasketButton(){return!this.hideCartButton&&(this.step===x.OfferOverview||this.step===x.TicketFlow)}onBasketButtonClick(){this.step=x.BasketFlow,this.requestUpdate("step").then((()=>this.scrollIntoView()))}onPaymentVerified(e){var t=e.detail;this.onPaymentComplete(t.paymentStatus,!0)}onPaymentFailed(e){var t=e.detail;this.onPaymentComplete(t.paymentStatus,!1)}onPaymentVerificationFailed(){this.onPaymentComplete("open",!0)}onPaymentComplete(e,t){var i,s;if(this.payingOrder=!1,this.paymentStatus=e,t){this.step=x.PaymentComplete,this.requestUpdate("step").then((()=>this.scrollIntoView())),this.orderId=m().orderNumber.getValue(),this.email=null===(i=m().customer.getValue())||void 0===i?void 0:i.email;var n=null===(s=m().checkedOutItems.getValue())||void 0===s?void 0:s.flatMap(f);c().reportPurchaseComplete(this.orderId,n),c().reportCheckoutStep(h.CheckoutPaymentMethod),m().customer.clearValue(),m().checkedOutItems.clearValue()}}onSettingsChangedEventListener(e){"offerId"===e.detail.name&&this.requestUpdate()}onBasketChangedEvent(){m().expiryDate&&(this.basketExpired=!1,this.requestUpdate("basketExpired"))}onBasketExpiredEvent(){this.basketExpired=!0,this.step=x.OfferOverview,this.isFirstOfferOverviewLoad=!1,this.requestUpdate().then((()=>this.scrollIntoView()))}onOrderFailed(e){this.orderFailedError=e.detail.error,this.step=x.PaymentComplete,this.requestUpdate()}onBuyTicketsClicked(e){this.selectedOfferId=e.detail.offer.id,this.preferredDates=e.detail.selectedDates,this.step=x.TicketFlow,this.requestUpdate().then((()=>this.scrollIntoView()))}onBackToOfferOverviewClicked(){c().reportCheckoutStep(h.TicketSelection),this.selectedOfferId=null,this.step=x.OfferOverview,this.isFirstOfferOverviewLoad=!1,this.requestUpdate().then((()=>this.scrollIntoView()))}onMoreInfoClick(e){this.$$("enviso-offer-info-dialog").show(e)}onReservationsCreated(){this.selectedOfferId=null,this.step=x.BasketFlow,this.requestUpdate().then((()=>this.scrollIntoView()))}continueShopping(){switch(this.step){case x.TicketFlow:c().reportCheckoutStep(h.TicketSelection);break;case x.BasketFlow:c().reportCheckoutStep(h.CheckoutOrderOverview)}this.step=x.OfferOverview,this.selectedOfferId=null,this.isFirstOfferOverviewLoad=!1,this.requestUpdate().then((()=>this.scrollIntoView()))}onOrderCreated(){this.payingOrder=!0}onStepChanged(){this.scrollIntoView()}};s([n({type:String,attribute:!0})],B.prototype,"terms",void 0),s([n({type:String,attribute:!0})],B.prototype,"privacy",void 0),s([n({type:Boolean,attribute:!0})],B.prototype,"newsletter",void 0),s([n({type:Boolean,attribute:"show-offer-specs"})],B.prototype,"showOfferSpecs",void 0),s([n({type:Boolean,attribute:"show-auth"})],B.prototype,"showAuth",void 0),s([n({type:Number,attribute:"offer-id"})],B.prototype,"offerId",void 0),s([n({type:Array,attribute:"included-offer-ids"})],B.prototype,"includedOfferIds",void 0),s([n({type:Array,attribute:"excluded-offer-ids"})],B.prototype,"excludedOfferIds",void 0),s([n({type:Boolean,attribute:"hide-cart-button"})],B.prototype,"hideCartButton",void 0),s([n({type:Boolean,attribute:"indicate-last-tickets"})],B.prototype,"indicateLastTickets",void 0),s([n({type:Number,attribute:"last-tickets-percentage"})],B.prototype,"lastTicketsPercentage",void 0),s([n({type:Boolean,attribute:"show-date-popup",reflect:!0})],B.prototype,"showDatePopup",void 0),s([n({type:Boolean,attribute:!1})],B.prototype,"payingOrder",void 0),s([n({type:Boolean,attribute:"show-offer-period"})],B.prototype,"showOfferPeriod",void 0),s([n({type:String,attribute:!1})],B.prototype,"orderFailedError",void 0),s([n({type:Boolean,attribute:"hide-numbers"})],B.prototype,"hideNumbers",void 0),s([n({type:Boolean,attribute:!1})],B.prototype,"basketExpired",void 0),s([n({converter:v,attribute:"preferred-dates"})],B.prototype,"preferredDates",void 0),s([n({attribute:"disable-auto-visit-time-selection",type:Boolean})],B.prototype,"disableAutoVisitTimeSelection",void 0),B=s([o("enviso-ticket-widget")],B);export{B as EnvisoTicketWidgetElement};