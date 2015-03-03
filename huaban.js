/**
 * Created by jiangli on 15/3/3.
 */

var request = require('superagent');

var img_static = 'http://img.hb.aicdn.com/';
//Host: huaban.com
//Referer: http://huaban.com/explore/meijia/
//    Accept: application/json
//Cookie: referer=http%3A%2F%2Fwww.baidu.com%2Fs%3Fwd%3D%25E8%258A%25B1%25E7%2593%25A3%25E7%25BD%2591%26rsv_spt%3D1%26issp%3D1%26f%3D3%26rsv_bp%3D0%26rsv_idx%3D2%26ie%3Dutf-8%26tn%3Dbaiduhome_pg%26rsv_enter%3D1%26rsv_sug3%3D6%26rsv_sug1%3D6%26oq%3D%25E8%258A%25B1%25E7%2593%25A3%26rsv_sug2%3D1%26rsp%3D0%26inputT%3D3504%26rsv_sug4%3D4163; _dc=1; sid=H2DiqEkwhO6AsV5lxav9A9Kn.6FAU5fLVbng16OOOpYmxft2GmAL2Mxm8HQ7a%2F0d7QoQ; _ga=GA1.2.132899006.1423118375; __asc=8da119c514bddac4c12179d1a8d; __auc=8da119c514bddac4c12179d1a8d
//Accept-Encoding: gzip, deflate, sdch
//Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
//Connection: keep-alive
//Host: huaban.com
//X-Request: JSON
//X-Requested-With: XMLHttpRequest
//Cache-Control: no-cache

request
    .get('http://huaban.com/explore/meijia/?i6sqj0o5&max=238846750&limit=20&wfl=1')
    .set('Host','huaban.com')
    .set('Referer','http://huaban.com/explore/meijia/')
    .set('Accept','application/json')
    .set('Cookie','referer=http%3A%2F%2Fwww.baidu.com%2Fs%3Fwd%3D%25E8%258A%25B1%25E7%2593%25A3%25E7%25BD%2591%26rsv_spt%3D1%26issp%3D1%26f%3D3%26rsv_bp%3D0%26rsv_idx%3D2%26ie%3Dutf-8%26tn%3Dbaiduhome_pg%26rsv_enter%3D1%26rsv_sug3%3D6%26rsv_sug1%3D6%26oq%3D%25E8%258A%25B1%25E7%2593%25A3%26rsv_sug2%3D1%26rsp%3D0%26inputT%3D3504%26rsv_sug4%3D4163; _dc=1; sid=H2DiqEkwhO6AsV5lxav9A9Kn.6FAU5fLVbng16OOOpYmxft2GmAL2Mxm8HQ7a%2F0d7QoQ; _ga=GA1.2.132899006.1423118375; __asc=8da119c514bddac4c12179d1a8d; __auc=8da119c514bddac4c12179d1a8d')
    .set('Accept-Encoding','gzip, deflate, sdch')
    .set('Accept-Language','zh-CN,zh;q=0.8,en;q=0.6')
    .set('Connection','keep-alive')
    .set('X-Request','JSON')
    .set('X-Requested-With','XMLHttpRequest')
    .end(function(error, res){

        if(error){
            throw error;
        }

        var imgs =[];
        var body = res.body;
        var pins = body.pins;
        for(var i=0;i<pins.length;i++){
            var file = pins[i].file;
            imgs.push(img_static+file.key);
        }
        console.log(imgs);
    });