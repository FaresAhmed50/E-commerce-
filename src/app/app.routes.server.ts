import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'navbar',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Server,


  }
];
