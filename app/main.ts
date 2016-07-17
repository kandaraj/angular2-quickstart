import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import 'rxjs/Rx';
import { HTTP_PROVIDERS }  from '@angular/http';

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
