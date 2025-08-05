import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



//   ng build --base-href /simplerent/
// npx angular-cli-ghpages --dir=dist/simplerent
