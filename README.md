# 프로그램 설치  [2020-12-28]
## Vue, Vuetify 설치 및 설정
- Vue (TypeScript), Vuetify 설치
- Vuetify ERROR 수정
  - @/plugins/vuetify.ts
  ```ts
    //import Vuetify from "vuetify/lib/framework";
    // framework 존재하지 않음. 아래와 같이 수정 
    import Vuetify from "vuetify/lib";
  ```
  > 이전 버전의 경우 type 오류가 발생할 경우 tsconfig.json에 아래와 같이`vuetify`을 등록해야 한다.
  ```json
    "types": [
      "webpack-env",
      "vuetify"
    ],
  ```
## Firebase 설치 및 설정 
- 플러그인과 함께 사용하기 위한 타입 확장 [원문 보기](https://kr.vuejs.org/v2/guide/typescript.html)
  > 플러그인은 Vue에 전역 혹은 인스턴스 property와 컴포넌트 옵션을 추가할 수 있습니다. 이러한 경우 TypeScript에서 플러그인을 컴파일하려면 유형 선언이 필요합니다. 다행스럽게도 TypeScript에는 이미 존재하는 타입을 보충하기 위한 module augmentation이라는 기능이 있습니다.

  - 예를 들어, instance property인 $myProperty를 string 타입으로 선언하고자 하는 경우:
    ```
      // 1. 'vue'를 보충된 타입 선언 전에 import해야 합니다.
      import Vue from 'vue';
      // firebase
      import firebae from 'firebase/app';

      // 2. 보충하고자 하는 타입이 있는 파일을 지정하세요.
      //    Vue의 constructor type은 types/vue.d.ts에 있습니다.
      declare module 'vue/types/vue' {
        // 3. Vue에 보강할 내용을 선언하세요.
        interface Vue {
          $firebase: typeof firebase;
        }
      }
    ```
  >  위의 코드를 선언 파일 형태로 (my-property.d.ts 처럼) include하면, `$myProperty`를 Vue 인스턴스 내에서 사용할 수 있습니다.

## [메일 링크 인증 하기](https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0)  [2020-12-29]
  - views와 components의 차이
    > router에서 보여주는 component 파일은 views 폴더에 넣는다. 그 외에는 components 폴더이다.
  