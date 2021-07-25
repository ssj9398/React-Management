## Management System
- React로 만드는 고객 관리 시스템

### React 개발환경설치
1. nodejs 설치
    - node -v 버전 확인

2. `npm install -g create-react-app` 글로벌 패키지 형태로 설치
    - create react app 패키지
    - create-react-app management  management라는 리액트앱 설치
    - [공식문서](https://create-react-app.dev/docs/getting-started)
3. yarn start 리액트 프로젝트 실행
-안되면 `npm install -g yarn` 설치 후 하면 됨

----------------------------
### React 문법
  - react 에서는 jsx문법을 따르기 때문에 class는 className을 써야함

  - map을 사용할때는 key속성을 넣어줘야함
각원소 구분을 위해
----------------------------
### Material 웹디자인 프레임워크 사용
- https://material-ui.com/components/tables/

// with npm

`npm install @material-ui/core`

// with yarn

`yarn add @material-ui/core`

----------------------------
### node.js express 서버 구축

    - 리액트, 노드 같이 실행 할 수 있게 package.json으로 명시해줌


`npm install -g nodemon` 설치

`npm install nodemon body-parser express` 모듈 설치

- node server.js 서버 실행

----------------------------
### REST API구축
1. `yarn dev` : 프로젝트(react,nodejs 같이) 실행
    - 에러시 windows posershell 에서 권한을 바꿔줘야함
    - state : 데이터가 변경 될 수 있을때
    - props : 데이터 변경이 없을 때 사용

2. Proxy
    - 2.0이후 버전 부터는 proxy설정을 다르게 해줘야 한다.
https://create-react-app.dev/docs/proxying-api-requests-in-development/
----------------------------
### React가 LifeCycle

1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()

- props or state가 변경이 되면 shouldComponentUpdate()가 사용됨

----------------------------
### mysql 설치
`npm install --save mysql`

### 서버통신
`npm install --save axios`
- React Form태그를 nodejs와 통신 위해 액시오스 설치


### 파일전송
- 파일을 전달하고자 할때는 content-type을 추가해 주어야 한다.
```javascript
const config = {
            headers: {
                'content-type':'multipart/form-data'
            }
        }
```

### 파일 처리를 위한 라이브러리
`npm install --save multer`

----------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
