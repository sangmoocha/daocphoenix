## 프로그램 설치  [2020-12-28]
- Vue (TypeScript), Vuetify 설치
- Vuetify ERROR 수정
    - @/plugins/vuetify.ts
    ```
        //import Vuetify from "vuetify/lib/framework";
        // framework 존재하지 않음. 아래와 같이 수정 
        import Vuetify from "vuetify/lib";
    ```