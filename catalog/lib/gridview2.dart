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

  List<String> _list;
  
  Main() {
    _list = new List();
      for(var i=0; i<22; i++) {
        _list.add('我是第${i + 1}个列表');
      }
  }

  Widget _getData(context, index) {
    return Container(
            color: Colors.yellow,
            child: Center(
              child: Text(_list[index]),
            ),
            height: 200.0, // GridView 无法指定高度，只能设置比例
          );
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisSpacing: 10.0,
        mainAxisSpacing: 10.0,
        crossAxisCount: 3
      ), 
      itemCount: this._list.length,
      itemBuilder: this._getData,
    );
  }

}