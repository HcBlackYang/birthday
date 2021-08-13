// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给冯薪羽",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "一位亲爱的朋友",  // 同上...
        "今天是你的生日",
        "认识你将近一年",
        "我了解到",
        "你活泼开朗，积极向上",
        "每次去图书馆都发现",
        "你早已到了二楼自主学习区。。",
        "你公众号写的很好",
        "每次看都深有感触",
        "很荣幸也很开心能够认识你",
        "愿你成为自己喜欢的样子",
        "不抱怨 不将就",
        "有自由 有光芒",
        "你也会记得我的生日吧~",
        "那就以我很喜欢的一句歌词结尾吧",
        "Sometimes I get high, sometimes I get low",
        "But I'm calm as can be in a room full of strangers",
        "有没有发现照片的顺序",
        "是春夏秋冬呢？",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "一位亲爱的朋友": "./imgs/spring.png",
        "每次去图书馆都发现": "./imgs/summer.jpg",
        "很荣幸也很开心能够认识你":"./imgs/autumn.jpg",
        "那就以我很喜欢的一句歌词结尾吧":"./imgs/winter.jpg",
        //"有没有发现照片的顺序":"./imgs/winter.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
