const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '亢奋',
        artist: '艾热 AIR',
        url: 'https://m10.music.126.net/20250214162723/d0d869f2e4972315ef4eadc2cb82e56f/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14051943566/98b6/9bb9/6769/95ed8affacc68e74318ca85116770d8b.m4a?vuutv=zOOhd/kCEF+1/SiU+2SnDxcLu6gKIJK5uU2eU7AGbAk7eS/3MHnCnWDHg3fU3UeTXy6MB2g4yJGA15YJ4UDoNQDue8yPV/bQd0OS8Obc5Dk=',
        cover: 'https://p1.music.126.net/AKwTdOfUFg7pBtUSyB9z-w==/109951164524519969.jpg?param=34y34',
    }, 
	]
});
