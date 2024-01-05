import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from 'src/app/common/feature-flags.service';


@Directive({
  selector: '[featureFlag]'
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string;
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    const isEnabled = this.featureFlagService.isEnabled(this.featureFlag);
    if (isEnabled) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
