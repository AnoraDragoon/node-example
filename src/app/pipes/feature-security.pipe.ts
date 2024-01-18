import { Pipe, PipeTransform } from '@angular/core';
import { FeatureFlagsService } from 'src/app/common/feature-flags.service';

@Pipe({
    name: 'featureSecurity'
})
export class FeatureSecurityPipe implements PipeTransform {

    constructor(private featureFlagsService: FeatureFlagsService) { }

    transform(value: string): boolean {
        return this.featureFlagsService.isEnabled(value);
    }
}
