import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'ListView',
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
    return Container(
      height: 300,
      child: ListView(
      // 决定宽和高哪个该占满父类宽度
      scrollDirection: Axis.horizontal,
      children: <Widget>[
          Container(
            width: 180.0,
            // height: 180.0,
            color: Colors.yellow,
          ),
          Container(
            width: 180.0,
            height: 180.0,
            color: Colors.pink,
          ),
          Container(
            width: 180.0,
            height: 180.0,
            color: Colors.blue,
          ),
          Container(
            width: 180.0,
            height: 180.0,
            color: Colors.greenAccent,
          ),
          Container(
            width: 180.0,
            height: 180.0,
            color: Colors.purple,
          ),
      ],
    ),
    );
  }

}