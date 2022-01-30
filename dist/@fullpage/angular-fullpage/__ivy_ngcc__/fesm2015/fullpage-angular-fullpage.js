import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
let fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}
class FullpageDirective {
    /**
     * @param {?} platformId
     * @param {?} renderer
     */
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) ;
    }
    /**
     * @return {?}
     */
    initFullpage() {
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpage_api);
    }
    /**
     * @return {?}
     */
    addBuildFunction() {
        this.fullpage_api.build = () => {
            /** @type {?} */
            const activeSection = this.fullpage_api.getActiveSection();
            /** @type {?} */
            const activeSlide = this.fullpage_api.getActiveSlide();
            this.destroyFullpage();
            if (activeSection) {
                this.renderer.addClass(activeSection.item, 'active');
            }
            if (activeSlide) {
                this.renderer.addClass(activeSlide.item, 'active');
            }
            this.initFullpage();
        };
    }
    /**
     * @return {?}
     */
    destroyFullpage() {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            this.fullpage_api.destroy('all');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyFullpage();
    }
}
FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
FullpageDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
FullpageDirective.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 }
];
FullpageDirective.propDecorators = {
    id: [{ type: Input }],
    options: [{ type: Input }],
    ref: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FullpageDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fullpage]'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.Renderer2 }]; }, { ref: [{
            type: Output
        }], id: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
class AnchorLinkDirective {
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
}
AnchorLinkDirective.ɵfac = function AnchorLinkDirective_Factory(t) { return new (t || AnchorLinkDirective)(); };
AnchorLinkDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { href: "href" } });
AnchorLinkDirective.propDecorators = {
    href: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AnchorLinkDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[href]'
            }]
    }], null, { 
    /**
     * @param {?} event
     * @return {?}
     */
    onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], href: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AngularFullpageModule {
}
AngularFullpageModule.ɵfac = function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); };
AngularFullpageModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AngularFullpageModule });
AngularFullpageModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AngularFullpageModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [FullpageDirective, AnchorLinkDirective],
                exports: [FullpageDirective, AnchorLinkDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AngularFullpageModule, AnchorLinkDirective as ɵb, FullpageDirective as ɵa };

//# sourceMappingURL=fullpage-angular-fullpage.js.map