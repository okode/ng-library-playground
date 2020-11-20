# LibraryNg10

## Building
```bash
npm ci
npm run build
```
**We will have to carry out the `npm run build` command every time we apply changes to the library.**

## Linking
This only needs to be done once.
```bash
cd dist/library-ng10
npm link
```

## Assets to export
They should be in the folder `projects/library-ng10/assets/**` and it has to be configured in the `ng-package.json` file:
```json
{
  ...,
  "assets": [
    "./assets/**/*.svg"
  ]
}
```

## Navigation
Navigation between pages should ALWAYS be relative, since a prefix can be configured from the application using library parameters:
```ts
this.router.navigate(['../page'], { relativeTo: this.route });
```

## Initialization parameters
The library parameters are received through the overwritten `forRoot` method in the `library-ng10.module.ts` module:
```ts
static forRoot(libraryConfig: LibraryConfig): ModuleWithProviders<LibraryNg10Module> {
  return {
    ngModule: LibraryNg10Module,
    providers: [
      { provide: LIBRARY_CONFIG, useValue: libraryConfig }
    ]
  };
}
```
In the `library-config.ts` file we have two exports, and `InjectionToken` and the configuration model where we will indicate if a parameter is required or not:
```ts
export const LIBRARY_CONFIG = new InjectionToken<LibraryConfig>('Library configuration');

export interface LibraryConfig {
  logo?: string;
  backPage?: string;
  routesPrefix?: string;
  assetsPath: string;
}
```
To use the parameters received from an application we will have to use the following:
```ts
export class Page {
  libraryConfig: LibraryConfig;

  constructor(@Inject(LIBRARY_CONFIG) config: LibraryConfig = null) {
    this.libraryConfig = config;
  }
}
```

## Image paths
As the path where the library images will be found in the application can be passed as a parameter, it mus be indicated in the HTML as follows:
```html
<img
  src="{{ libraryConfig.assetsPath }}/microphone.svg"
  alt="#"
/>
```

## Throw events to catch them from the application
To throw events with custom names from the library we will use:
```ts
onClick() {
  const event = new Event('library-event');
  dispatchEvent(event);
}
```