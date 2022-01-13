# <img src="https://user-images.githubusercontent.com/86418674/149336502-d2c0b204-5bea-47e9-ad6c-5960e97ba38a.png"  width="40"/> 큐브이스케이프 (CubeEscape) 웹
```
큐브이스케이프 (CubeEscape) 배포용 웹페이지 제작 프로젝트
```
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>


<!-- TABLE OF CONTENTS -->
## 목차
* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Contributors](#Contributors)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Project Management](#project-management)


<!-- ABOUT THE PROJECT -->

## About The Project

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React]()
* [MongoDB]()
* [Node.js]()


### Contributor

<table>
  <tr align="center">
    <td><a href="https://github.com/flowersayo">김서연</a></td>
    <td><a href="https://github.com/hanby-choi">최한비</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://github.com/flowersayo.png" width="150"></td>
    <td><img src="https://github.com/hanby-choi.png" width="150"></td>
</table>


### development tools
 <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
  `Notion Home` :  https://www.notion.so/8cd29a83b76848238a5d0edccfbbaecc


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
* 
```sh
npm install 
cd client 
npm install
```
Type " npm install " inside the root directory ( Download Server Dependencies )
<br/>
Type " npm install " inside the client directory ( Download Front-end Dependencies )

### Installation


1. Clone the repo
```sh
git clone https://github.com/gdscewha-3rd/Project-CubeEscapeWeb.git
```

2. make dev.js file inside config folder and put mongoDB info into dev.js file

- dev.js
```
module.exports = {
    mongoURI: {mongoURI}
}
```

You can watch the tutorial for this to start

https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q?view_as=subscriber


# Project Management

## page routing
- `/` : 홈
- `/register` : 회원가입
- `/intro` : 게임소개
- `/hint` : 힌트
- `/forum` : 게시판(커뮤니티)
- `/review` : 플레이 리뷰(후기)
- `/report` : 문의 (버그 제보)


```
   <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/intro" component={Auth(IntroPage, null)} />
          <Route exact path="/hint" component={Auth(HintPage, null)} />
          <Route exact path="/forum" component={Auth(ForumPage, null)} />
          <Route exact path="/review" component={Auth(ReviewPage, null)} />
          <Route exact path="/report" component={Auth(ReportPage, null)} />
         
        </Switch>
 ```
   
