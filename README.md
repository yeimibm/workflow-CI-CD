# Workflow CI/CD hacia VPS

Mini aplicacion web estatica para demostrar un flujo basico de CI/CD con GitHub Actions. Cada push a la rama principal valida el proyecto, construye el sitio en `dist/` y lo despliega automaticamente hacia una VPS por SSH.

## Arquitectura basica

```mermaid
flowchart TD
    Dev[Push a GitHub] --> Actions[GitHub Actions]
    Actions --> Install[Instala dependencias con pnpm]
    Install --> Validate[Valida HTML, CSS y JavaScript]
    Validate --> Build[Construye sitio estatico en dist]
    Build --> SSH[Conecta por SSH a la VPS]
    SSH --> Copy[Copia archivos a /var/www/html]
    Copy --> Web[Sitio publicado en la VPS]
```


| Archivo | Funcion |
| --- | --- |
| `test/static-site.test.ts` | Validaciones automaticas del contenido y estructura. |
| `.github/workflows/deploy.yml` | Pipeline de CI/CD. |

## Que hace el pipeline

El workflow se ejecuta con cada push a `main` o `master`:

## Como se despliega hacia la VPS

El despliegue usa dos acciones:

- `appleboy/ssh-action`: prepara el directorio remoto y valida el resultado.
- `appleboy/scp-action`: copia el contenido de `dist/` hacia `${{ secrets.VPS_PATH }}`.

