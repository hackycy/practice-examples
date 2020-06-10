import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
        title: Text(
          'GridView',
          textDirection: TextDirection.ltr,
        ),
      ),body: Main(),
      ),
    );
  }

}

class Main extends StatelessWidget {

  List<Widget> _getData() {
    List<Widget> d = new List();
    for(var i=0; i<22; i++) {
      d.add(
        Container(
          color: Colors.yellow,
          child: Center(
            child: Text('我是第${i + 1}个列表'),
          ),
          height: 200.0, // GridView 无法指定高度，只能设置比例
        )
      );
    }
    return d;
  }

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      padding: EdgeInsets.all(10.0),
      crossAxisCount: 2, // 列数
      crossAxisSpacing: 20.0, //水平间距
      mainAxisSpacing: 20.0, //垂直间距
      childAspectRatio: 0.7, // 子widget的宽和高比例, GridView 无法指定高度
      children: this._getData(),
    );
  }

}