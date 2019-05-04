function fashionclock(params) {

    // 调用此方法需要传的params的值应为 下边cvsparams的结构 若项目用在移动端时,需要使用css3的scale 根据当前宽度与最小宽度716的比值去设置缩放,可参考例子index.html进行动态设置

    // ===========================================画布及动效js 开始===========================================
    // let cvsparams = {
    //     // 选择器==画布宽高值==中间的字==中间字大小==时间字体大小==圆盘背景色==背景图片==中间字颜色==时间字体颜色==画布背景色(默认透明)==圆盘的outline色
    //     selectdom:'div>#clockcvs',      //选择器
    //     cvswh:'',      //画布宽高值   此值最低为716,否则会显示不全
    //     word:'庞',      //中间的字
    //     wordsize:'',      //中间字大小
    //     timesize:'',      //时间字体大小
    //     bgclolr:'',      //圆盘背景色
    //     bgpic:'',      //背景图片
    //     wordcolor:'',      //中间字颜色
    //     timecolor:'',      //时间字体颜色
    //     boxbgclolr:'',      //画布背景色(默认透明)
    //     outlinecolor:'',      //圆盘的outline色
    //     currentboxcolor:''      //当前时间框的填充色
    // }
    let cvsparams = params;


    // 计时器显示画布
    let cvsinterval
    clearInterval(cvsinterval);
    cvsinterval = setInterval(getsettime,500);

    // 获取当前时间
    function getsettime() {
        let currenttime = new Date();
        let shi = currenttime.getHours();
        let fen = currenttime.getMinutes()+1;
        let miao = currenttime.getSeconds();

        shi = num_to_word(shi);
        fen = num_to_word(fen);
        miao = num_to_word(miao);
        // console.log('----'+shi+':'+fen+':'+miao+'----');
        resettime(shi+'点',fen+'分',miao+'秒')
    }
    // 把 1-59的数字转换为汉字
    function num_to_word(number) {
        switch (number){
            case 1:
                return  '一';
            case 2:
                return  '二';
            case 3:
                return  '三';
            case 4:
                return  '四';
            case 5:
                return  '五';
            case 6:
                return  '六';
            case 7:
                return  '七';
            case 8:
                return  '八';
            case 9:
                return  '九';
            case 10:
                return  '十';
            case 11:
                return  '十一';
            case 12:
                return  '十二';
            case 13:
                return  '十三';
            case 14:
                return  '十四';
            case 15:
                return  '十五';
            case 16:
                return  '十六';
            case 17:
                return  '十七';
            case 18:
                return  '十八';
            case 19:
                return  '十九';
            case 20:
                return  '二十';
            case 21:
                return  '二十一';
            case 22:
                return  '二十二';
            case 23:
                return  '二十三';
            case 24:
                return  '二十四';
            case 25:
                return  '二十五';
            case 26:
                return  '二十六';
            case 27:
                return  '二十七';
            case 28:
                return  '二十八';
            case 29:
                return  '二十九';
            case 30:
                return  '三十';
            case 31:
                return  '三十一';
            case 32:
                return  '三十二';
            case 33:
                return  '三十三';
            case 34:
                return  '三十四';
            case 35:
                return  '三十五';
            case 36:
                return  '三十六';
            case 37:
                return  '三十七';
            case 38:
                return  '三十八';
            case 39:
                return  '三十九';
            case 40:
                return  '四十';
            case 41:
                return  '四十一';
            case 42:
                return  '四十二';
            case 43:
                return  '四十三';
            case 44:
                return  '四十四';
            case 45:
                return  '四十五';
            case 46:
                return  '四十六';
            case 47:
                return  '四十七';
            case 48:
                return  '四十八';
            case 49:
                return  '四十九';
            case 50:
                return  '五十';
            case 51:
                return  '五十一';
            case 52:
                return  '五十二';
            case 53:
                return  '五十三';
            case 54:
                return  '五十四';
            case 55:
                return  '五十五';
            case 56:
                return  '五十六';
            case 57:
                return  '五十七';
            case 58:
                return  '五十八';
            case 59:
                return  '五十九';
        }
    }

    // 设置时间相关的数据数组并传给画布 resettime('五点','四十八分','二十九秒');
    function resettime(hour,minute,second) {
        let hours = [
            '一点',
            '二点',
            '三点',
            '四点',
            '五点',
            '六点',
            '七点',
            '八点',
            '九点',
            '十点',
            '十一点',
            '十二点',
            '十三点',
            '十四点',
            '十五点',
            '十六点',
            '十七点',
            '十八点',
            '十九点',
            '二十点',
            '二十一点',
            '二十二点',
            '二十三点',
            '二十四点',
        ];
        let minutes = [
            '零分',
            '一分',
            '二分',
            '三分',
            '四分',
            '五分',
            '六分',
            '七分',
            '八分',
            '九分',
            '十分',
            '十一分',
            '十二分',
            '十三分',
            '十四分',
            '十五分',
            '十六分',
            '十七分',
            '十八分',
            '十九分',
            '二十分',
            '二十一分',
            '二十二分',
            '二十三分',
            '二十四分',
            '二十五分',
            '二十六分',
            '二十七分',
            '二十八分',
            '二十九分',
            '三十分',
            '三十一分',
            '三十二分',
            '三十三分',
            '三十四分',
            '三十五分',
            '三十六分',
            '三十七分',
            '三十八分',
            '三十九分',
            '四十分',
            '四十一分',
            '四十二分',
            '四十三分',
            '四十四分',
            '四十五分',
            '四十六分',
            '四十七分',
            '四十八分',
            '四十九分',
            '五十分',
            '五十一分',
            '五十二分',
            '五十三分',
            '五十四分',
            '五十五分',
            '五十六分',
            '五十七分',
            '五十八分',
            '五十九分',
        ];
        let seconds = [
            '零秒',
            '一秒',
            '二秒',
            '三秒',
            '四秒',
            '五秒',
            '六秒',
            '七秒',
            '八秒',
            '九秒',
            '十秒',
            '十一秒',
            '十二秒',
            '十三秒',
            '十四秒',
            '十五秒',
            '十六秒',
            '十七秒',
            '十八秒',
            '十九秒',
            '二十秒',
            '二十一秒',
            '二十二秒',
            '二十三秒',
            '二十四秒',
            '二十五秒',
            '二十六秒',
            '二十七秒',
            '二十八秒',
            '二十九秒',
            '三十秒',
            '三十一秒',
            '三十二秒',
            '三十三秒',
            '三十四秒',
            '三十五秒',
            '三十六秒',
            '三十七秒',
            '三十八秒',
            '三十九秒',
            '四十秒',
            '四十一秒',
            '四十二秒',
            '四十三秒',
            '四十四秒',
            '四十五秒',
            '四十六秒',
            '四十七秒',
            '四十八秒',
            '四十九秒',
            '五十秒',
            '五十一秒',
            '五十二秒',
            '五十三秒',
            '五十四秒',
            '五十五秒',
            '五十六秒',
            '五十七秒',
            '五十八秒',
            '五十九秒',
        ];
        let newhours;
        let newminutes;
        let newseconds;
        // console.log(hours.indexOf(hour));
        // console.log(minutes.indexOf(minute));
        // console.log(seconds.indexOf(second));
        newhours = hours.splice(hours.indexOf(hour)).concat(hours);
        newminutes = minutes.splice(minutes.indexOf(minute)).concat(minutes);
        newseconds = seconds.splice(seconds.indexOf(second)).concat(seconds);

        timedata = {newhours,newminutes,newseconds}
        // cvsshowtime(timedata,'div>#clockcvs',660,'牟',27,15,'#cfc','./dzpbg.png','orange','green','','red');
        cvsshowtime(timedata,cvsparams);
    }

    // 画布事件 参数:  选择器==显示时间数据==画布宽高值==中间的字==中间字大小==时间字体大小==圆盘背景色==背景图片==中间字颜色==时间字体颜色==当前时间框的填充色==画布背景色(默认透明)==圆盘的outline色
    function cvsshowtime(timedata,cvsparams) {
        let selectdom = cvsparams.selectdom,cvswh = cvsparams.cvswh,word = cvsparams.word,wordsize = cvsparams.wordsize,timesize = cvsparams.timesize,bgclolr = cvsparams.bgclolr,bgpic = cvsparams.bgpic,wordcolor = cvsparams.wordcolor,timecolor = cvsparams.timecolor,currentboxcolor= cvsparams.currentboxcolor,boxbgclolr = cvsparams.boxbgclolr,outlinecolor = cvsparams.outlinecolor;


        // console.log(timedata);
        let whdefault = cvswh||800;
        let worddefault = word||'庞';
        let fontsize = wordsize||58;
        let cvstimesize = timesize||14;
        let cvstimecolor = timecolor||'#fff';
        let cvscurrentboxcolor = currentboxcolor||'green';
        let cvs = document.querySelector(selectdom);
        let cvsparent = cvs.parentNode;
        // console.log(cvsparent)
        if(bgpic){
            // cvsparent.setAttribute('background',bgpic);
            cvsparent.style.backgroundImage = 'url('+bgpic+')';
            cvsparent.style.backgroundRepeat = 'no-repeat';
            cvsparent.style.backgroundSize = 'cover';
        }
        cvs.setAttribute('width',whdefault+'px')
        cvs.setAttribute('height',whdefault+'px')
        cvs.style.backgroundColor = boxbgclolr||'transparent';
        let ctx = cvs.getContext('2d');
        ctx.arc(whdefault/2,whdefault/2,whdefault/2,0,2*Math.PI);
        ctx.fillStyle = bgclolr||'#0f0f0f';
        ctx.fill();
        ctx.strokeStyle = outlinecolor||'#fff';
        ctx.stroke()
        // 初始界面完成
        //..............
        ctx.font = fontsize+'px normal 宋体';
        ctx.fillStyle = wordcolor||'#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'
        ctx.fillText(worddefault,whdefault/2,whdefault/2,whdefault);

        ctx.save()
        ctx.translate(whdefault/2,whdefault/2);
        ctx.beginPath();
        ctx.moveTo(fontsize,cvstimesize*2/3);
        ctx.lineTo(whdefault/2-2,cvstimesize*2/3);
        ctx.lineTo(whdefault/2-2,-cvstimesize*3/4);
        ctx.lineTo(fontsize,-cvstimesize*2/3);
        ctx.closePath();
        ctx.strokeStyle=wordcolor||'#fff';
        ctx.stroke();
        ctx.fillStyle = cvscurrentboxcolor;
        ctx.fill();
        ctx.restore();
        let hours = timedata.newhours;
        let minutes = timedata.newminutes;
        let seconds = timedata.newseconds;
        // 时
        for (let i =0;i < hours.length;i++){
            ctx.save();
            ctx.translate(whdefault/2,whdefault/2);
            ctx.rotate(2*Math.PI * i/24);
            ctx.font = cvstimesize+'px normal '
            ctx.fillStyle = cvstimecolor;
            ctx.textAlign = 'left';
            ctx.fillText(hours[i],fontsize+40,0);
            ctx.restore();
        }
        // 分
        for (let i =0;i < minutes.length;i++){
            ctx.save();
            ctx.translate(whdefault/2,whdefault/2);
            ctx.rotate(2*Math.PI * i/60);
            ctx.font = cvstimesize+'px normal '
            ctx.fillStyle = cvstimecolor;
            ctx.textAlign = 'left';
            ctx.fillText(minutes[i],fontsize+130,0);
            ctx.restore();
        }
        // 秒
        for (let i =0;i < seconds.length;i++){
            ctx.save();
            ctx.translate(whdefault/2,whdefault/2);
            ctx.rotate(2*Math.PI * i/60);
            ctx.font = cvstimesize+'px normal '
            ctx.fillStyle = cvstimecolor;
            ctx.textAlign = 'left';
            ctx.fillText(seconds[i],fontsize+240,0);
            ctx.restore();
        }
    }
    // ===========================================画布及动效js 结束===========================================
}