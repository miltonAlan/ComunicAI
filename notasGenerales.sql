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
------------------------------------------------------------------------------------
-BACKEND
------------------------------------------------------------------------------------
1 Instalar CLI de nest
    - npm i -g @nestjs/cli

2. primero esta (nivel de la carpeta 'back')
    - yarn install

en caso de que les falte alguna dependencia (opcional)
    - yarn add openai
    - yarn add dotenv
    - yarn add cors
3. crear el .env (en la carpeta back)

4. iniciar server
    - yarn start --watch

prueba de endpoints
    - ejemplo enviarle cualquier texto a gpt (POST)
        - http://localhost:3000/ask
            {"question": "que haces, estas vivo?"}

    - endpoint de interpretacion (POST)
        - http://localhost:3000/interpret
            {
              "originalMessage": "hoy fui al mercad y compr unos frut",
              "originalLanguage": "es",
              "destinationLanguage": "pt"
            }


------------------------------------------------------------------------------------
-- NOTAS MILTON (ignorar)
------------------------------------------------------------------------------------
mi aplicacion esta estructura de la siguiente forma
- el front esta construido en react native y tiene la siguiente apariencia:
    - la pantalla principal esta dividida en dos partes:
        - en cada parte hay un microfono y un cuadro de texto que permite mostrar el texto de lo que logro captar el microfono
        - el proposito de la aplicacion es que muchas veces la captura y transcripcion de voz a texto no es muy precisa por ende si una persona trata de traducir lo que captura el micro de forma textual en otro idioma no va a funcionar o va a dar un mensaje incompleto o sesgado
        - la aplicacion tiene la misma funcionalidad de un traductor convencional con el adicional que con la ayuda de gpt 3.5 turbo se dara sentido a lo captado con el microfono o se completaran las palabras/frases que se capten a medias para tener una conversacion mas fluida entre dos personas que hablan distintos idiomas
- el back recibira en texto de cada vez que el usuario habla por el microfono y pulsa un boton en medio de la pantalla con el simbolo de IA para dar a entender que se interpretara con inteligencia artificial
    - la comunicacion entre back y front sera mediante endpoints usando nest js
    - necesito la logica, explicacion de archivos necesarios y metodos para manejar esta interpretacion
    - considera que esta aplicacion va a manejar varios idiomas por ende uno de los parametros que reciba cada endpoint sera el idioma origen
    - debes agregar la logica o indicarme como guardar la conversacion entre las dos personas para que el hilo de conversacion de gpt3.5 turbo pueda entender el contexto
    - referente al hilo de conversacion debes indicarme si debo guardar esa conversacion en una base de datos o no es necesario 
