import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


// JIT i18n
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { getTranslationProviders } from './app/i18n-providers';

// import { AppModule } from './app/app.module';

// // if (environment.production) {
// //   enableProdMode();
// // }

// getTranslationProviders().then(providers => {
//   const options = { providers };
//   platformBrowserDynamic().bootstrapModule(AppModule, options);
// });



// // platformBrowserDynamic().bootstrapModule(AppModule);
