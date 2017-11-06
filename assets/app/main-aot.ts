import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/assets/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
