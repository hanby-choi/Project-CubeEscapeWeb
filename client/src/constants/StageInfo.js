import stageImage from '../components/images/stageImage'

const stageInfo=[
    {stageId:1,stageName:'The Cube',stageText:`정신을 차려보니 알 수 없는 큐브공간 속에 갇혀있었다. 
    위 아래 양 옆 좌우를 모두 둘러봐도 정사각형 모양밖에 보이지 않는다.  
    이질적으로 보이는 것이라고는 상단의 벽걸이 모니터뿐이다.
    나는 누구이고 도대체 누가 나를 여기에 가둔거지?
    "이곳은 3X3 CUBE, 나는 이곳의 관리인 C지."`,
    hint:{question :['키패드 해제하기','상자열기','문밖으로 나가기'] ,
    answer:[`모니터와 상호작용하면 “관리인이 사물을 다방면으로 주시하라고 했었지?”, “큰 것이 먼저오는 게 순리라고도 했던 거 같아.” 와 같이 관리인 C의 말을 회상할 수 있다. 두가지 조언을 참고삼아 큐브공간 내부에 비치된 큐브 블럭들을 다각도로 자세히 살펴보면 숫자의 형상을 띄고 있는 것을 확인 할 수 있다. 이 네가지 숫자들을 큰 숫자들이 먼저오도록 배치해주면 된다.`
    ,`좁아지는 공간속에서 제한시간내에 상자에 있는 자물쇠를 해제하고 열쇠를 꺼내지 못하면 게임오버에 이르게 된다. 상자 비밀번호에 관한 힌트가 적혀있는 쪽지를 살펴보자. 쪽지에서는 큐브에 몇개의 공간이 있냐고 물어보고 있다. 포스터를 통해 큐브 공간의 크기(정사각형 개수)를 확인한 후 그것을 세자리로 입력하여 열쇠를 획득한다. `
    ,"획득한 열쇠를 문과 상호작용시킨다. 이때 페이드 아웃효과가 적용되어 바로 다음 스테이지로 이동되는 것이 아니라 시간이 조금 걸림에 유의하도록 하자. "]},
    stageImage:stageImage.stage1Image,difficulty:3,recommendTo:''},
    {stageId:2,stageName:'The White Gallery',stageText:'죽을뻔한 위기에서 벗어나 도착한 다음 공간은 어딘가 사방이 온통 하얀 흰색 갤러리. ',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage2Image,difficulty:5},
    {stageId:3,stageName:'The Christmas',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage3Image,difficulty:4},
    {stageId:4,stageName:'The Liar',stageText:`피노키오들은 자신들을 만들어준 제페토 할아버지를 죽입니다. 
    그리고 그 방에 들어간 사람들은 다들 피노키오들의 새 주인이 되고 아무도 살아남지 못했습니다.
    피노키오들은 거짓말을 아주 잘하고 플레이어는 그 거짓말을 분별해야합니다.
    “진실을 찾지 못하는자에게는 오직 죽음뿐”`,hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage4Image,difficulty:4},
    {stageId:5,stageName:'The River Of Oblivion',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage5Image,difficulty:5},
    {stageId:6,stageName:'The Nightmare',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage6Image,difficulty:4},
    {stageId:7,stageName:'The Reverse',stageText:'모든것이 거꾸로인 공간 “발을 조금이라도 잘못딛는 순간 넌 끝없는 나락속으로 떨어지고 말걸”',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage7Image,difficulty:3},
    {stageId:8,stageName:'The Unconcious',stageText:'관리인 C의 무의식의 세계. 도대체 그에겐 무슨일이 있었던 걸까.',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage8Image,difficulty:1},
    {stageId:9,stageName:'The Game',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage9Image,difficulty:5},
    {stageId:10,stageName:'The Fate',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage10Image,difficulty:1},
    {stageId:11,stageName:'The Maze',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage11Image,difficulty:2},
    {stageId:12,stageName:'The Weight Of Vice',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage12Image,difficulty:5},
    {stageId:13,stageName:'The Unknown',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage13Image,difficulty:3}
]

export default stageInfo;