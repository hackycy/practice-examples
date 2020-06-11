import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'Padding',
          textDirection: TextDirection.ltr,
        ),
      ),body: Main(),
      ),
    );
  }

}

class Main extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 300.0,
        height: 300.0,
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Image.network(
            'http://t7.baidu.com/it/u=2704272957,1194893808&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592291658&t=b65f2329266f56534bdf42af70cf1854',
            fit: BoxFit.cover,
          ),
        ),
        decoration: BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            color: Colors.blue,
            width: 2.0,
          )
        ),
      ),
    );
  }
}