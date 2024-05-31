import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/baseicon';
import { UniqueComponentId } from 'primeng/utils';
import * as i0 from "@angular/core";
export class UploadIcon extends BaseIcon {
    pathId;
    ngOnInit() {
        this.pathId = 'url(#' + UniqueComponentId() + ')';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: UploadIcon, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: UploadIcon, isStandalone: true, selector: "UploadIcon", usesInheritance: true, ngImport: i0, template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: UploadIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'UploadIcon',
                    standalone: true,
                    imports: [BaseIcon],
                    template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL3VwbG9hZC91cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXdCbEQsTUFBTSxPQUFPLFVBQVcsU0FBUSxRQUFRO0lBQ3BDLE1BQU0sQ0FBUztJQUVmLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN0RCxDQUFDO3VHQUxRLFVBQVU7MkZBQVYsVUFBVSw2RkFsQlQ7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQlQ7OzJGQUVRLFVBQVU7a0JBdEJ0QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQlQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAncHJpbWVuZy9iYXNlaWNvbic7XG5pbXBvcnQgeyBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1VwbG9hZEljb24nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW0Jhc2VJY29uXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiIFthdHRyLmFyaWEtaGlkZGVuXT1cImFyaWFIaWRkZW5cIiBbYXR0ci5yb2xlXT1cInJvbGVcIiBbY2xhc3NdPVwiZ2V0Q2xhc3NOYW1lcygpXCI+XG4gICAgICAgICAgICA8ZyBbYXR0ci5jbGlwLXBhdGhdPVwicGF0aElkXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTYuNTg5NDIgOS44MjE5N0M2LjcwMTY1IDkuOTM0MDUgNi44NTMyOCA5Ljk5NzkzIDcuMDEyIDEwQzcuMTcwNzEgOS45OTc5MyA3LjMyMjM0IDkuOTM0MDUgNy40MzQ1OCA5LjgyMTk3QzcuNTQ2ODEgOS43MDk5IDcuNjEwNzkgOS41NTg0OSA3LjYxMjg2IDkuNFYyLjA0Nzk4TDkuNzkyMDQgNC4yMjQwMkM5Ljg0NzUyIDQuMjgwMTEgOS45MTM2NSA0LjMyNDU3IDkuOTg2NTcgNC4zNTQ3OUMxMC4wNTk1IDQuMzg1MDIgMTAuMTM3NyA0LjQwMDM5IDEwLjIxNjcgNC40MDAwMkMxMC4yOTU2IDQuNDAwMzkgMTAuMzczOCA0LjM4NTAyIDEwLjQ0NjcgNC4zNTQ3OUMxMC41MTk3IDQuMzI0NTcgMTAuNTg1OCA0LjI4MDExIDEwLjY0MTMgNC4yMjQwMkMxMC43NTM4IDQuMTExNTIgMTAuODE3IDMuOTU5MDIgMTAuODE3IDMuODAwMDJDMTAuODE3IDMuNjQxMDIgMTAuNzUzOCAzLjQ4ODUyIDEwLjY0MTMgMy4zNzYwMkw3LjQ1MTI3IDAuMTkwNjE4QzcuNDQ2NTYgMC4xODU1ODQgNy40NDE3NiAwLjE4MDYyMiA3LjQzNjg3IDAuMTc1NzM2QzcuMzI0MTkgMC4wNjMyMTQgNy4xNzEzNiAwIDcuMDEyIDBDNi44NTI2NCAwIDYuNjk5ODEgMC4wNjMyMTQgNi41ODcxMiAwLjE3NTczNkM2LjU4MTgxIDAuMTgxMDQ1IDYuNTc2NiAwLjE4NjQ0MyA2LjU3MTUgMC4xOTE5MjdMMy4zODI4MiAzLjM3NjAyQzMuMjc2NjkgMy40ODk3NiAzLjIxODkgMy42NDAyIDMuMjIxNjUgMy43OTU2NEMzLjIyNDQgMy45NTEwOCAzLjI4NzQ2IDQuMDk5MzkgMy4zOTc1NSA0LjIwOTMyQzMuNTA3NjQgNC4zMTkyNSAzLjY1NjE2IDQuMzgyMjIgMy44MTE4MiA0LjM4NDk2QzMuOTY3NDkgNC4zODc3IDQuMTE4MTQgNC4zMzAwMSA0LjIzMjA0IDQuMjI0MDJMNi40MTExMyAyLjA0ODA3VjkuNEM2LjQxMzIxIDkuNTU4NDkgNi40NzcxOCA5LjcwOTkgNi41ODk0MiA5LjgyMTk3Wk0xMS45OTUyIDE0SDIuMDI4ODNDMS43NTEgMTMuOTg4NyAxLjQ3ODEzIDEzLjkyMjggMS4yMjU4NCAxMy44MDYxQzAuOTczNTQ1IDEzLjY4OTQgMC43NDY3NzkgMTMuNTI0MSAwLjU1ODUxNyAxMy4zMTk3QzAuMzcwMjU0IDEzLjExNTQgMC4yMjQxOSAxMi44NzYgMC4xMjg2ODEgMTIuNjE1MkMwLjAzMzE3MjMgMTIuMzU0NSAtMC4wMDk5MDYwNSAxMi4wNzc1IDAuMDAxOTEwOSAxMS44VjkuNDAwMDVDMC4wMDE5MTA5IDkuMjQwOTIgMC4wNjUyMTYgOS4wODgzMSAwLjE3NzkgOC45NzU3OUMwLjI5MDU4NCA4Ljg2MzI2IDAuNDQzNDE2IDguODAwMDUgMC42MDI3NzUgOC44MDAwNUMwLjc2MjEzNCA4LjgwMDA1IDAuOTE0OTY2IDguODYzMjYgMS4wMjc2NSA4Ljk3NTc5QzEuMTQwMzMgOS4wODgzMSAxLjIwMzY0IDkuMjQwOTIgMS4yMDM2NCA5LjQwMDA1VjExLjhDMS4xODI5NSAxMi4wMzc2IDEuMjU0NjMgMTIuMjc0IDEuNDAzNzkgMTIuNDYwMkMxLjU1Mjk2IDEyLjY0NjMgMS43NjgxNyAxMi43NjgxIDIuMDA0NzkgMTIuOEgxMS45OTUyQzEyLjIzMTggMTIuNzY4MSAxMi40NDcgMTIuNjQ2MyAxMi41OTYyIDEyLjQ2MDJDMTIuNzQ1MyAxMi4yNzQgMTIuODE3IDEyLjAzNzYgMTIuNzk2MyAxMS44VjkuNDAwMDVDMTIuNzk2MyA5LjI0MDkyIDEyLjg1OTYgOS4wODgzMSAxMi45NzIzIDguOTc1NzlDMTMuMDg1IDguODYzMjYgMTMuMjM3OCA4LjgwMDA1IDEzLjM5NzIgOC44MDAwNUMxMy41NTY1IDguODAwMDUgMTMuNzA5NCA4Ljg2MzI2IDEzLjgyMjEgOC45NzU3OUMxMy45MzQ3IDkuMDg4MzEgMTMuOTk4IDkuMjQwOTIgMTMuOTk4IDkuNDAwMDVWMTEuOEMxNC4wMjIgMTIuMzU2MyAxMy44MjUxIDEyLjg5OTYgMTMuNDUgMTMuMzExNkMxMy4wNzQ5IDEzLjcyMzYgMTIuNTUyIDEzLjk3MSAxMS45OTUyIDE0WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8Y2xpcFBhdGggW2lkXT1cInBhdGhJZFwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkSWNvbiBleHRlbmRzIEJhc2VJY29uIHtcbiAgICBwYXRoSWQ6IHN0cmluZztcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhdGhJZCA9ICd1cmwoIycgKyBVbmlxdWVDb21wb25lbnRJZCgpICsgJyknO1xuICAgIH1cbn1cbiJdfQ==