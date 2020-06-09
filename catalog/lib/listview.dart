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
    return ListView(
      children: <Widget>[

        ListTile(
          title: Text('Text'),
        ),

        ListTile(
          title: Text('Text'),
        ),

        ListTile(
          title: Text('Text'),
        ),

      ],
    );
  }

}