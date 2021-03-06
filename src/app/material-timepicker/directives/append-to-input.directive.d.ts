import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class AppendToInputDirective implements AfterViewInit {
    private renderer;
    inputElement: any;
    private _direction;
    private _inputCords;
    private readonly element;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    private readonly inputCords;
    private readonly direction;
    ngAfterViewInit(): void;
    changePosition(): void;
    private append;
    private setStyle;
    private defineElementYByDirection;
}
