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

  List<Widget> _getData() {
    List<Widget> d = new List();
    for(var i=0; i<22; i++) {
      d.add(
        ListTile(
          title: Text('我是第${i + 1}个列表'),
          leading: Icon(Icons.home),
        )
      );
    }
    return d;
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(2),
      children: this._getData(),
    );
  }

}