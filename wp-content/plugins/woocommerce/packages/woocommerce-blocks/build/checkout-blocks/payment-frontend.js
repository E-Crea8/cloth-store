(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[38],{129:function(e,t,c){"use strict";var n=c(0),o=c(1),a=(c(8),c(4)),s=c.n(a),r=(c(161),c(130));t.a=e=>{let{children:t,className:c,screenReaderLabel:a,showSpinner:l=!1,isLoading:i=!0}=e;return Object(n.createElement)("div",{className:s()(c,{"wc-block-components-loading-mask":i})},i&&l&&Object(n.createElement)(r.a,null),Object(n.createElement)("div",{className:s()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},t),i&&Object(n.createElement)("span",{className:"screen-reader-text"},a||Object(o.__)("Loading…",'woocommerce')))}},130:function(e,t,c){"use strict";var n=c(0);c(157),t.a=()=>Object(n.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},157:function(e,t){},161:function(e,t){},21:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:s,wrapperProps:r={}}=e;const l=null!=c,i=null!=o;return!l&&i?(t=s||"span",r={...r,className:a()(r.className,"screen-reader-text")},Object(n.createElement)(t,r,o)):(t=s||n.Fragment,l&&i&&c!==o?Object(n.createElement)(t,r,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,r,c))}},222:function(e,t){},223:function(e,t,c){"use strict";var n=c(0);t.a=e=>{let{label:t,secondaryLabel:c,description:o,secondaryDescription:a,id:s}=e;return Object(n.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(n.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(n.createElement)("span",{id:s&&s+"__label",className:"wc-block-components-radio-control__label"},t),c&&Object(n.createElement)("span",{id:s&&s+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},c)),Object(n.createElement)("div",{className:"wc-block-components-radio-control__description-group"},o&&Object(n.createElement)("span",{id:s&&s+"__description",className:"wc-block-components-radio-control__description"},o),a&&Object(n.createElement)("span",{id:s&&s+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},225:function(e,t,c){"use strict";var n=c(10),o=c.n(n),a=c(0),s=c(4),r=c.n(s);c(8),c(226),t.a=e=>{let{children:t,className:c,headingLevel:n,...s}=e;const l=r()("wc-block-components-title",c),i="h"+n;return Object(a.createElement)(i,o()({className:l},s),t)}},226:function(e,t){},227:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(223);t.a=e=>{let{checked:t,name:c,onChange:o,option:r}=e;const{value:l,label:i,description:d,secondaryLabel:p,secondaryDescription:m}=r;return Object(n.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${c}-${l}`},Object(n.createElement)("input",{id:`${c}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:c,value:l,onChange:e=>o(e.target.value),checked:t,"aria-describedby":a()({[`${c}-${l}__label`]:i,[`${c}-${l}__secondary-label`]:p,[`${c}-${l}__description`]:d,[`${c}-${l}__secondary-description`]:m})}),Object(n.createElement)(s.a,{id:`${c}-${l}`,label:i,secondaryLabel:p,description:d,secondaryDescription:m}))}},233:function(e,t){},234:function(e,t,c){"use strict";var n=c(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step",'woocommerce'),defaultDescription:c=Object(n.__)("Step description text.",'woocommerce'),defaultShowStepNumber:o=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:o}}}},236:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0),o=(c(8),c(160));c(222);const a=e=>{let{errorMessage:t="",propertyName:c="",elementId:a=""}=e;const{getValidationError:s,getValidationErrorId:r}=Object(o.b)();if(!t||"string"!=typeof t){const e=s(c)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:r(a)},t))}},237:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(12),r=c(227);c(238),t.a=Object(s.withInstanceId)(e=>{let{className:t="",instanceId:c,id:o,selected:s,onChange:l=(()=>{}),options:i=[]}=e;const d=o||c;return i.length&&Object(n.createElement)("div",{className:a()("wc-block-components-radio-control",t)},i.map(e=>Object(n.createElement)(r.a,{key:`${d}-${e.value}`,name:"radio-control-"+d,checked:e.value===s,option:e,onChange:t=>{l(t),"function"==typeof e.onChange&&e.onChange(t)}})))})},238:function(e,t){},239:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return r}));var n=c(17),o=c(205);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethods:t,expressPaymentMethods:c,paymentMethodsInitialized:a,expressPaymentMethodsInitialized:s}=Object(o.b)(),r=Object(n.a)(t),l=Object(n.a)(c);return{paymentMethods:e?l:r,isInitialized:e?s:a}},s=()=>a(!1),r=()=>a(!0)},240:function(e,t){},241:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(1),o=c(9),a=c(6),s=c(19),r=c(22),l=c(0),i=c(212),d=c(160),p=c(32);const m=()=>{const{cartCoupons:e,cartIsLoading:t}=Object(r.a)(),{addErrorNotice:c}=Object(p.a)(),{addSnackbarNotice:m}=(()=>{const{notices:e,createSnackbarNotice:t,removeSnackbarNotice:c,setIsSuppressed:n}=Object(i.b)(),o=Object(l.useRef)(e);Object(l.useEffect)(()=>{o.current=e},[e]);const a=Object(l.useMemo)(()=>({removeNotices:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.current.forEach(t=>{null!==e&&t.status!==e||c(t.id)})},removeSnackbarNotice:c}),[c]),s=Object(l.useMemo)(()=>({addSnackbarNotice:function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(e,c)}}),[t]);return{notices:e,...a,...s,setIsSuppressed:n}})(),{setValidationErrors:b}=Object(d.b)();return{appliedCoupons:e,isLoading:t,...Object(o.useSelect)((e,t)=>{let{dispatch:o}=t;const r=e(a.CART_STORE_KEY),l=r.isApplyingCoupon(),i=r.isRemovingCoupon(),{applyCoupon:d,removeCoupon:p,receiveApplyingCoupon:u}=o(a.CART_STORE_KEY);return{applyCoupon:e=>{d(e).then(t=>{!0===t&&m(Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.','woocommerce'),e),{id:"coupon-form"})}).catch(e=>{b({coupon:{message:Object(s.decodeEntities)(e.message),hidden:!1}}),u("")})},removeCoupon:e=>{p(e).then(t=>{!0===t&&m(Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.','woocommerce'),e),{id:"coupon-form"})}).catch(e=>{c(e.message,{id:"coupon-form"}),u("")})},isApplyingCoupon:l,isRemovingCoupon:i}},[c,m])}}},245:function(e,t,c){"use strict";var n=c(10),o=c.n(n),a=c(0),s=c(4),r=c.n(s);const l=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var i=e=>{let{id:t,src:c=null,alt:n=""}=e;return c?Object(a.createElement)("img",{className:l(t),src:c,alt:n}):null},d=c(65);const p=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}];var m=c(35);c(240),t.a=e=>{let{icons:t=[],align:c="center",className:n}=e;const s=(e=>{const t={};return e.forEach(e=>{let c={};"string"==typeof e&&(c={id:e,alt:e,src:null}),"object"==typeof e&&(c={id:e.id||"",alt:e.alt||"",src:e.src||null}),c.id&&Object(m.d)(c.id)&&!t[c.id]&&(t[c.id]=c)}),Object.values(t)})(t);if(0===s.length)return null;const l=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===c,"wc-block-components-payment-method-icons--align-right":"right"===c},n);return Object(a.createElement)("div",{className:l},s.map(e=>{const t={...e,...(c=e.id,p.find(e=>e.id===c)||{})};var c;return Object(a.createElement)(i,o()({key:"payment-method-icon-"+e.id},t))}))}},257:function(e,t){},258:function(e,t,c){"use strict";var n=c(16),o=c.n(n),a=c(0),s=c(1),r=c(3),l=(c(8),c(2)),i=c(92);class d extends r.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return{errorMessage:e.message,hasError:!0}}render(){const{hasError:e,errorMessage:t}=this.state,{isEditor:c}=this.props;if(e){let e=Object(s.__)("This site is experiencing difficulties with this payment method. Please contact the owner of the site for assistance.",'woocommerce');(c||l.CURRENT_USER_IS_ADMIN)&&(e=t||Object(s.__)("There was an error with this payment method. Please verify it's configured correctly.",'woocommerce'));const n=[{id:"0",content:e,isDismissible:!1,status:"error"}];return Object(a.createElement)(i.StoreNoticesContainer,{notices:n})}return this.props.children}}d.defaultProps={isEditor:!1},t.a=d},264:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(225);c(233);const r=e=>{let{title:t,stepHeadingContent:c}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(s.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:o,legend:s,description:l,children:i,disabled:d=!1,showStepNumber:p=!0,stepHeadingContent:m=(()=>{})}=e;const b=s||o?"fieldset":"div";return Object(n.createElement)(b,{className:a()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":d}),id:t,disabled:d},!(!s&&!o)&&Object(n.createElement)("legend",{className:"screen-reader-text"},s||o),!!o&&Object(n.createElement)(r,{title:o,stepHeadingContent:m()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},297:function(e,t,c){"use strict";var n=c(7),o=c(0),a=c(4),s=c.n(a),r=c(12),l=c(46);t.a=function({icon:e,children:t,label:c,instructions:a,className:i,notices:d,preview:p,isColumnLayout:m,...b}){const[u,{width:h}]=Object(r.useResizeObserver)();let g;"number"==typeof h&&(g={"is-large":h>=480,"is-medium":h>=160&&h<480,"is-small":h<160});const O=s()("components-placeholder",i,g),j=s()("components-placeholder__fieldset",{"is-column-layout":m});return Object(o.createElement)("div",Object(n.a)({},b,{className:O}),u,d,p&&Object(o.createElement)("div",{className:"components-placeholder__preview"},p),Object(o.createElement)("div",{className:"components-placeholder__label"},Object(o.createElement)(l.a,{icon:e}),c),!!a&&Object(o.createElement)("div",{className:"components-placeholder__instructions"},a),Object(o.createElement)("div",{className:j},t))}},303:function(e,t,c){"use strict";var n=c(0),o=c(24);const a=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{fill:"currentColor",d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}));t.a=a},308:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var n=c(1),o=c(40),a=c(0),s=c(4),r=c.n(s),l=c(24),i=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),d=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)("path",{d:"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"})),p=c(303),m=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(a.createElement)("path",{d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{fill:"#000",fillRule:"nonzero",d:"M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z"}),Object(a.createElement)("path",{stroke:"#000",strokeLinecap:"round",d:"M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8"}))),b=c(98),u=c(35);c(257);const h={bank:i,bill:d,card:p.a,checkPayment:m};var g=e=>{let{icon:t="",text:c=""}=e;const n=!!t,o=Object(a.useCallback)(e=>n&&Object(u.d)(e)&&Object(u.e)(h,e),[n]),s=r()("wc-block-components-payment-method-label",{"wc-block-components-payment-method-label--with-icon":n});return Object(a.createElement)("span",{className:s},o(t)?Object(a.createElement)(b.a,{srcElement:h[t]}):t,c)},O=c(245),j=c(2),v=c(30),y=c.n(v),k=c(129),E=c(236),_=c(22),w=c(241),f=c(29),S=c(31),N=c(205),C=c(44),P=c(33);const M=(e,t)=>{const c=[],o=(t,c)=>{const n=c+"_tax",o=Object(u.e)(e,c)&&Object(u.d)(e[c])?parseInt(e[c],10):0;return{key:c,label:t,value:o,valueWithTax:o+(Object(u.e)(e,n)&&Object(u.d)(e[n])?parseInt(e[n],10):0)}};return c.push(o(Object(n.__)("Subtotal:",'woocommerce'),"total_items")),c.push(o(Object(n.__)("Fees:",'woocommerce'),"total_fees")),c.push(o(Object(n.__)("Discount:",'woocommerce'),"total_discount")),c.push({key:"total_tax",label:Object(n.__)("Taxes:",'woocommerce'),value:parseInt(e.total_tax,10),valueWithTax:parseInt(e.total_tax,10)}),t&&c.push(o(Object(n.__)("Shipping:",'woocommerce'),"total_shipping")),c},x=()=>{const{isCalculating:e,isComplete:t,isIdle:c,isProcessing:s,onCheckoutBeforeProcessing:r,onCheckoutValidationBeforeProcessing:l,onCheckoutAfterProcessingWithSuccess:i,onCheckoutAfterProcessingWithError:d,onSubmit:p,customerId:m}=Object(S.b)(),{currentStatus:b,activePaymentMethod:u,onPaymentProcessing:h,setExpressPaymentError:v,shouldSavePayment:x}=Object(N.b)(),{shippingErrorStatus:R,shippingErrorTypes:I,shippingRates:T,shippingRatesLoading:z,selectedRates:A,setSelectedRates:V,isSelectingRate:L,onShippingRateSuccess:H,onShippingRateFail:$,onShippingRateSelectSuccess:D,onShippingRateSelectFail:F,needsShipping:B}=Object(C.b)(),{billingData:W,shippingAddress:Y,setShippingAddress:G}=Object(P.b)(),{cartItems:U,cartFees:J,cartTotals:K,extensions:q}=Object(_.a)(),{appliedCoupons:Q}=Object(w.a)(),{noticeContexts:X,responseTypes:Z}=Object(f.c)(),ee=Object(a.useRef)(M(K,B)),te=Object(a.useRef)({label:Object(n.__)("Total",'woocommerce'),value:parseInt(K.total_price,10)});Object(a.useEffect)(()=>{ee.current=M(K,B),te.current={label:Object(n.__)("Total",'woocommerce'),value:parseInt(K.total_price,10)}},[K,B]);const ce=Object(a.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";y()("setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",{alternative:"",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),v(e)}),[v]);return{activePaymentMethod:u,billing:{appliedCoupons:Q,billingData:W,cartTotal:te.current,cartTotalItems:ee.current,currency:Object(o.getCurrencyFromPriceResponse)(K),customerId:m,displayPricesIncludingTax:Object(j.getSetting)("displayCartPricesIncludingTax",!1)},cartData:{cartItems:U,cartFees:J,extensions:q},checkoutStatus:{isCalculating:e,isComplete:t,isIdle:c,isProcessing:s},components:{LoadingMask:k.a,PaymentMethodIcons:O.a,PaymentMethodLabel:g,ValidationInputError:E.a},emitResponse:{noticeContexts:X,responseTypes:Z},eventRegistration:{onCheckoutAfterProcessingWithError:d,onCheckoutAfterProcessingWithSuccess:i,onCheckoutBeforeProcessing:r,onCheckoutValidationBeforeProcessing:l,onPaymentProcessing:h,onShippingRateFail:$,onShippingRateSelectFail:F,onShippingRateSelectSuccess:D,onShippingRateSuccess:H},onSubmit:p,paymentStatus:b,setExpressPaymentError:ce,shippingData:{isSelectingRate:L,needsShipping:B,selectedRates:A,setSelectedRates:V,setShippingAddress:G,shippingAddress:Y,shippingRates:T,shippingRatesLoading:z},shippingStatus:{shippingErrorStatus:R,shippingErrorTypes:I},shouldSavePayment:x}}},350:function(e,t){},386:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(4),a=c.n(o),s=c(22),r=c(29),l=c(110),i=c(264),d=c(31),p=c(87),m=c(239),b=c(1),u=c(21),h=c(205),g=c(297),O=c(56),j=c(116),v=c(98),y=c(303),k=c(2),E=c(18);c(350);const _=()=>Object(n.createElement)(g.a,{icon:Object(n.createElement)(v.a,{srcElement:y.a}),label:Object(b.__)("Payment methods",'woocommerce'),className:"wc-block-checkout__no-payment-methods-placeholder"},Object(n.createElement)("span",{className:"wc-block-checkout__no-payment-methods-placeholder-description"},Object(b.__)("Your store does not have any payment methods configured that support the checkout block. Once you have configured a compatible payment method it will be shown here.",'woocommerce')),Object(n.createElement)(O.a,{isSecondary:!0,href:k.ADMIN_URL+"admin.php?page=wc-settings&tab=checkout",target:"_blank",rel:"noopener noreferrer"},Object(b.__)("Configure Payment Methods",'woocommerce'))),w=()=>Object(n.createElement)(j.a,{isDismissible:!1,className:a()("wc-block-checkout__no-payment-methods-notice","woocommerce-message","woocommerce-error")},Object(b.__)("There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.",'woocommerce'));var f=()=>{const{isEditor:e}=Object(E.a)();return e?Object(n.createElement)(_,null):Object(n.createElement)(w,null)},S=c(308),N=c(32),C=c(38),P=c(12),M=c(227),x=Object(P.withInstanceId)(e=>{let{className:t,instanceId:c,id:o,selected:s,onChange:r,options:l=[]}=e;const i=o||c;return l.length&&Object(n.createElement)("div",{className:a()("wc-block-components-radio-control",t)},l.map(e=>{const t="object"==typeof e&&"content"in e,c=e.value===s;return Object(n.createElement)("div",{className:"wc-block-components-radio-control-accordion-option",key:e.value},Object(n.createElement)(M.a,{name:"radio-control-"+i,checked:c,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&c&&Object(n.createElement)("div",{className:a()("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!c})},e.content))}))}),R=c(14),I=(c(8),c(258)),T=e=>{let{children:t,showSaveOption:c}=e;const{isEditor:o}=Object(E.a)(),{shouldSavePayment:a,setShouldSavePayment:s}=Object(h.b)(),{customerId:r}=Object(d.b)();return Object(n.createElement)(I.a,{isEditor:o},t,r>0&&c&&Object(n.createElement)(R.CheckboxControl,{className:"wc-block-components-payment-methods__save-card-info",label:Object(b.__)("Save payment information to my account for future purchases.",'woocommerce'),checked:a,onChange:()=>s(!a)}))},z=()=>{const{setActivePaymentMethod:e,activeSavedToken:t,isExpressPaymentMethodActive:c,customerPaymentMethods:o}=Object(h.b)(),{paymentMethods:s}=Object(m.b)(),{activePaymentMethod:l,...i}=Object(S.a)(),{noticeContexts:d}=Object(r.c)(),{removeNotice:p}=Object(N.a)(),{dispatchCheckoutEvent:b}=Object(C.a)(),{isEditor:u}=Object(E.a)(),g=Object.keys(s).map(e=>{const{edit:t,content:c,label:o,supports:a}=s[e],r=u?t:c;return{value:e,label:"string"==typeof o?o:Object(n.cloneElement)(o,{components:i.components}),name:"wc-saved-payment-method-token-"+e,content:Object(n.createElement)(T,{showSaveOption:a.showSaveOption},Object(n.cloneElement)(r,{activePaymentMethod:l,...i}))}}),O=Object(n.useCallback)(t=>{e(t),p("wc-payment-error",d.PAYMENTS),b("set-active-payment-method",{value:t})},[b,d.PAYMENTS,p,e]),j=0===Object.keys(o).length&&1===Object.keys(s).length,v=a()({"disable-radio-control":j});return c?null:Object(n.createElement)(x,{id:"wc-payment-method-options",className:v,selected:t?null:l,onChange:O,options:g})},A=c(237);const V=e=>{let{method:t,expires:c}=e;return Object(b.sprintf)(
/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
Object(b.__)("%1$s ending in %2$s (expires %3$s)",'woocommerce'),t.brand,t.last4,c)},L=e=>{let{method:t}=e;return Object(b.sprintf)(
/* translators: %s is the name of the payment method gateway. */
Object(b.__)("Saved token for %s",'woocommerce'),t.gateway)};var H=()=>{var e,t;const{customerPaymentMethods:c,activePaymentMethod:o,setActivePaymentMethod:a,activeSavedToken:s}=Object(h.b)(),{paymentMethods:l}=Object(m.b)(),i=Object(S.a)(),{noticeContexts:d}=Object(r.c)(),{removeNotice:p}=Object(N.a)(),{dispatchCheckoutEvent:b}=Object(C.a)(),u=Object(n.useMemo)(()=>Object.keys(c).flatMap(e=>c[e].map(t=>{const c="cc"===e||"echeck"===e,n=t.method.gateway;return{name:"wc-saved-payment-method-token-"+n,label:c?V(t):L(t),value:t.tokenId.toString(),onChange:e=>{a(n,{token:e,payment_method:n,[`wc-${n}-payment-token`]:e.toString(),isSavedToken:!0}),p("wc-payment-error",d.PAYMENTS),b("set-active-payment-method",{paymentMethodSlug:n})}}})).filter(Boolean),[c,a,p,d.PAYMENTS,b]),g=s&&l[o]&&null!==(e=l[o])&&void 0!==e&&e.savedTokenComponent?Object(n.cloneElement)(null===(t=l[o])||void 0===t?void 0:t.savedTokenComponent,{token:s,...i}):null;return u.length>0?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(A.a,{id:"wc-payment-method-saved-tokens",selected:s,options:u}),g):null},$=()=>{const{isInitialized:e,paymentMethods:t}=Object(m.b)(),{customerPaymentMethods:c}=Object(h.b)();return e&&0===Object.keys(t).length?Object(n.createElement)(f,null):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(H,null),Object.keys(c).length>0&&Object(n.createElement)(u.a,{label:Object(b.__)("Use another payment method.",'woocommerce'),screenReaderLabel:Object(b.__)("Other available payment methods",'woocommerce'),wrapperElement:"p",wrapperProps:{className:["wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned"]}}),Object(n.createElement)(z,null))},D=()=>Object(n.createElement)($,null),F=c(234),B={...Object(F.a)({defaultTitle:Object(b.__)("Payment options",'woocommerce'),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(l.withFilteredAttributes)(B)(e=>{let{title:t,description:c,showStepNumber:o,children:l,className:m}=e;const{isProcessing:b}=Object(d.b)(),{cartNeedsPayment:u}=Object(s.a)(),{noticeContexts:h}=Object(r.c)();return u?Object(n.createElement)(i.a,{id:"payment-method",disabled:b,className:a()("wc-block-checkout__payment-method",m),title:t,description:c,showStepNumber:o},Object(n.createElement)(p.a,{context:h.PAYMENTS},Object(n.createElement)(D,null)),l):null})},92:function(e,t,c){}}]);