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

  final List<String> _list = new List();

  Main() {
    for(var i=0; i<22; i++) {
      _list.add('我是第${i + 1}个列表');
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: this._list.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(this._list[index]),
        );
      },
    );
  }

}