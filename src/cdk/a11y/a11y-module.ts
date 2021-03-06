/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {PlatformModule} from '@angular/cdk/platform';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ARIA_DESCRIBER_PROVIDER, AriaDescriber} from './aria-describer/aria-describer';
import {CdkMonitorFocus, FOCUS_MONITOR_PROVIDER} from './focus-monitor/focus-monitor';
import {CdkTrapFocus, FocusTrapFactory} from './focus-trap/focus-trap';
import {InteractivityChecker} from './interactivity-checker/interactivity-checker';
import {LIVE_ANNOUNCER_PROVIDER} from './live-announcer/live-announcer';

@NgModule({
  imports: [CommonModule, PlatformModule],
  declarations: [CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkTrapFocus, CdkMonitorFocus],
  providers: [
    InteractivityChecker,
    FocusTrapFactory,
    AriaDescriber,
    LIVE_ANNOUNCER_PROVIDER,
    ARIA_DESCRIBER_PROVIDER,
    FOCUS_MONITOR_PROVIDER,
  ]
})
export class A11yModule {}
