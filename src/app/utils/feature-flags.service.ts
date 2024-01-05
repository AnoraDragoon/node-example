import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplicationId, FeatureFlag } from '../main/back-end/ref';
import { HttpClient } from '@angular/common/http';

interface FeatureFlags {
  [key: string]: boolean
}

export type FeatureFlagDictionay = { [key: string]: FeatureFlag}

export type FeatureFlagDictionaries = { [key in keyof typeof ApplicationId]?: FeatureFlagDictionay; }

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {

  private baseUrl = environment.apiUrl + '/ref/feature-flags';

  private featureFlags: FeatureFlags = {};

  private _isLoaded = false;
  get isLoaded(): boolean {
    return this._isLoaded;
  }

  constructor(private http: HttpClient) { }

  isEnabled(feature: string): boolean {
    if (!this._isLoaded) return true;
    const isEnabled = this.featureFlags[feature];
    if (isEnabled === undefined) {
      const subKeys = this.getSubKeys(feature);
      for (const subKey of subKeys) {
        if (this.featureFlags[subKey] === false) {
          this.featureFlags[feature] = false;
          return false;
        }
      }
      this.featureFlags[feature] = true;
      return true;
    }
    else {
      return isEnabled;
    }
  }

  getSubKeys(key: string): string[] {
    const tokens = key.split('.');
    const subKeys: string[] = [];
    while (tokens.length > 0) {
      const subKey = tokens.join('.');
      subKeys.push(subKey);
      tokens.pop();
    }
    return subKeys;
  }

  async loadApplicationFeatureFlags(): Promise<void> {
    const appFeatureFlags = await this.getApplicationFeatureFlags();
    this.featureFlags = {};
    for (const featureFlagKey of Object.getOwnPropertyNames(appFeatureFlags)) {
      this.featureFlags[featureFlagKey] =  appFeatureFlags[featureFlagKey].isEnabled;
    }

    for (const featureFlagKey of Object.getOwnPropertyNames(this.featureFlags)) {
      const subKeys = this.getSubKeys(featureFlagKey);
      for (const subKey of subKeys) {
        if (this.featureFlags[subKey] === false) {
          this.featureFlags[featureFlagKey] = false;
          break;
        }
      }
    }
    this._isLoaded = true;
  }

  getAllFeatureFlags(): Promise<FeatureFlagDictionaries> {
    return this.http.get<FeatureFlagDictionaries>(this.baseUrl).toPromise();
  }

  private getApplicationFeatureFlags(): Promise<FeatureFlagDictionay> {
    const url = `${this.baseUrl}?applicationId=${ApplicationId.Promociona}`;
    return this.http.get<FeatureFlagDictionay>(url).toPromise();
  }

  updateFeatureFlag(featureFlag: FeatureFlag) : Promise<FeatureFlag> {
    return this.http.post<FeatureFlag>(this.baseUrl, featureFlag).toPromise();
  }
}
