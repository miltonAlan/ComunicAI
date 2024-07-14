Requerimientos:
- Crear cuenta en GitHub
    - Usuarios:
        - codingWhileAlive
        - 
        -
    Software:
        - VS Code (ultima version)
        - Git (ultima version)
        - Node.js (escoger la version LTS)
        - Android Studio (ultima version 12 jul 2024 )
            - Android Studio Koala | 2024.1.1
        - Extension para abrir emulador desde vs code
            - https://www.youtube.com/watch?v=as_HHSFT304&ab_channel=DeepDiveDevs
------------------------------------------------------------------------------------
- Prueba de ambiente antes de desarrollo
    - https://www.youtube.com/watch?v=T-fhSE8n2CA
------------------------------------------------------------------------------------
Preparacion ambiente definitivo
------------------------------------------------------------------------------------
configurar variable:
    - ANDROID_HOME
version java
    - 17
instalar gradle (Gradle 8.9)
    - https://gradle.org/install/

Ejecucion proyecto
    - activar micro en el emulador
    - dependencias
        - yarn install
        - npx expo prebuild -p android
        - npx expo run:android

------------------------------------------------------------------------------------
creacion apk con EAS
https://www.youtube.com/watch?v=FBv4PrW5wqY&t=665s&ab_channel=CodewithBetoenEspa%C3%B1ol
- npm install -g eas-cli
- eas build:configure
- eas build -p android --profile preview