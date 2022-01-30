import { AfterViewInit, OnDestroy, EventEmitter, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class FullpageDirective implements AfterViewInit, OnDestroy {
    private platformId;
    private renderer;
    id: any;
    options: any;
    ref: EventEmitter<{}>;
    fullpage_api: any;
    constructor(platformId: Object, renderer: Renderer2);
    ngAfterViewInit(): void;
    initFullpage(): void;
    addBuildFunction(): void;
    destroyFullpage(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FullpageDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<FullpageDirective, "[fullpage]", never, { "id": "id"; "options": "options"; }, { "ref": "ref"; }, never>;
}
export declare class AnchorLinkDirective {
    href: string;
    onClick(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AnchorLinkDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<AnchorLinkDirective, "[href]", never, { "href": "href"; }, {}, never>;
}

//# sourceMappingURL=fullpage.directive.d.ts.map