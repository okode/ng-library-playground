# LibraryNg10

## Developing
### Building
```bash
npm run build
```
**We will have to carry out the `npm run build` command every time we apply changes to the library.**

### Linking
This only needs to be done once.
```bash
cd dist/library-ng10
npm link
```
With this we can include the library within the `node_modules` folder of the application since we will not have it in NPM.

## Configuration
### Assets to export
They should be in the folder `projects/library-ng10/assets/**` and it has to be configured in the `ng-package.json` file:
```json
{
  ...,
  "assets": [
    "./assets/**/*.svg"
  ]
}
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

## Navigation
Navigation between pages should ALWAYS be relative, since a prefix can be configured from the application using library parameters:
```ts
this.router.navigate(['../page'], { relativeTo: this.route });
```

## Throw events to catch them from the application
To throw events with custom names from the library we will use:
```ts
onClick() {
  const event = new Event('library-event');
  dispatchEvent(event);
}
```

# AppNg10

## Developing
### Linking
```bash
npm link library-ng10
npm run start
```
With this we can include the library within the `node_modules` folder of the application since we will not have it in NPM.

## Configuration
### Copy library assets
We have to indicate in the `angular.json` file where the library assets are located and ALWAYS indicate it above the app assets:
```json
"architect": {
  "build": {
    ...,
    "options": {
      ...,
      "assets": [
        ...,
        {
          "glob": "*",
          "input": "node_modules/library-ng10/assets",
          "output": "assets/library-ng10"
        },
        "src/assets"
      ],
      ...,
    },
  }
}
```
The `output` parameter is where the library assets will be located, it is recommended to use a subfolder to avoid possible conflicts with the names of the files.

### Library initialization
The module initialization must be in the `app.module.ts` file:
```ts
@NgModule({
  ...,
  imports: [
    ...,
    LibraryNg10Module.forRoot(
      {
        logo: 'assets/mapfre-logo.svg',
        backPage: 'home',
        routesPrefix: 'vehicle-accidents',
        assetsPath: 'assets/library-ng10'
      }
    )
  ],
  ...,
})
export class AppModule { }
```
The `assetsPath` parameter must be the same value as the `output`. The others are optional, in case `routesPrefix` is ​​not indicated, it will take the default value `lib-sinisters`.

## Overwrite a library asset
To overwrite an asset we will have to create in the application the same path that we define in the `output` parameter and include the file that we want to overwrite with the same name.

## Catch events from the library
To catch events with custom names from the library we will use:
```ts
addEventListener('library-event', (event) => {
  ...
});
```
