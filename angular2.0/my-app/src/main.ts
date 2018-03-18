import { enableProdMode } from '@angular/core'; //用来关闭angular的开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//使用哪个模块来启动整个应用

import { AppModule } from './app/app.module'; //
import { environment } from './environments/environment';//打包配置。对多环境的支持

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
