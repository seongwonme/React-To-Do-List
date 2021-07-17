# Todo List
React, Emotion을 이용하여 작업하였습니다. 버튼들을 활용해 내용 삭제 및 비활성화 재활성화가 가능합니다.

**![todolist](https://images.velog.io/images/mzsw/post/bed0e070-056e-46a2-ac11-0989514e7c53/todolist.png)**  


## 주요 특징 및 개선사항

1. 최초 V 버튼 클릭 시 해당 내용이 목록 최하단으로 이동하며 비활성화 색상으로 변합니다.
2. V 버튼 재클릭 시 목록의 최상단으로 내용이 이동하며 활성화 색상으로 변합니다.
3. X 버튼 클릭 시 목록에서 제거됩니다.
4. TOC.js 파일의 컴포넌트를 2개로 분리하여 컨테이너 컴포넌트를 사용하여 리팩토링하였습니다.


## 컴포넌트 요약
```
App : 모든 컴포넌트들의 데이터를 State로 관리하고 Input과 TOC(목록) 컴포넌트를 호출합니다.
components/Create : form 기능을 제공하고 버튼 클릭 시 입력한 내용을 props 함수의 파라미터로 제공합니다.
components/TOC : 추가한 내용을 목록으로 가공하여 출력합니다. X or V 버튼 클릭 시 해당 컴포넌트의 
인덱스와 버튼 정보를 상위 컴포넌트로 제공합니다.
```
## Getting Started
```
https://github.com/seongwonme/React-To-Do-List.git
cd To-Do-list
```

### Installing

아래 사항들로 현 프로젝트에 관한 모듈들을 설치할 수 있습니다.
Run the following commands into the project folder to install project dependencies.

```
npm init
npm install
```

## Built With

* [ReactJS](https://reactjs.org/)
* [EmotionJS](https://emotion.sh/docs/introduction)

## Author(s)

* **Lee Seong Won** - *Junior Web Developer* - [GitHub account](https://github.com/seongwonme)

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
