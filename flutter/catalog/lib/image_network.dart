import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.light(),
      home: Main(),
    );
  }

}

class Main extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Scaffold',
          textDirection: TextDirection.ltr,
        ),
      ),
      body: Center(
        child: Container(
          child: Image.network(
            'http://t7.baidu.com/it/u=2704272957,1194893808&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592291658&t=b65f2329266f56534bdf42af70cf1854',
            alignment: Alignment.center,
            // 通常结合使用
            color: Colors.white,
            colorBlendMode: BlendMode.color, //可以当作滤镜吧
            // 通常结合使用
            fit: BoxFit.cover,
          ),
          width: 300.0,
          height: 300.0,
          decoration: BoxDecoration(
            border: Border.all(
              color: Colors.yellow
            ),
          ),
        ),
      ),
    );
  }

}