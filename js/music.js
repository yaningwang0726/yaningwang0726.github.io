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
        name: '杜鹃',
        artist: '李佳隆',
        url: 'http://music.163.com/song/media/outer/url?id=2064487982.mp3',
        cover: 'https://p1.music.126.net/PhBNYTX3FDNoVmONk6W28w==/109951168743738121.jpg?param=130y130',
    }, 
	]
});
