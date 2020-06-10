import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            'Stack',
            textDirection: TextDirection.ltr,
          ),
        ),
        body: Main(),
      ),
    );
  }
}

class Main extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: Stack(
          alignment: Alignment(-1.0, -1.0),
          children: <Widget>[
            Container(
              width: 300.0,
              height: 300.0,
              color: Colors.yellow,
            ),
            Text('这是一个文本'),
          ],
        ),
      ),
    );
  }
}
