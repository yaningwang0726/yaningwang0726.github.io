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
	]
});
