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
        width: 300.0,
        height: 300.0,
        decoration: BoxDecoration(border: Border.all(color: Colors.blue)),
        child: Stack(
          alignment: Alignment(-1.0, -1.0),
          children: <Widget>[
            Align(
              alignment: Alignment.topCenter,
              child: Container(
                width: 50.0,
                height: 50.0,
                color: Colors.yellow,
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                width: 50.0,
                height: 50.0,
                color: Colors.pink,
              ),
            ),
            Align(
              alignment: Alignment.center,
              child: Container(
                width: 50.0,
                height: 50.0,
                color: Colors.purple,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
