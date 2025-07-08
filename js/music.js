const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '亢奋',
        artist: '艾热 AIR',
        url: 'http://music.163.com/song/media/outer/url?id=1407594567.mp3',
        cover: 'https://p1.music.126.net/AKwTdOfUFg7pBtUSyB9z-w==/109951164524519969.jpg?param=34y34',
    }, 
    {
        name: '鼻塞',
        artist: '陈一豪Clear / INDEcompany',
        url: 'http://music.163.com/song/media/outer/url?id=2714340376.mp3',
        cover: 'https://p2.music.126.net/POtte5sgkL1WN6S9yap0kQ==/109951171367489486.jpg?param=34y34', 
    }, 
    {
        name: '喜鹊',
        artist: 'Capper / LEGGO',
        url: 'http://music.163.com/song/media/outer/url?id=2610629046.mp3',
        cover: 'https://p2.music.126.net/GX6tMnRMfobKiy3NJrD4og==/109951169846410884.jpg?param=130y130',
    },
	]
});
