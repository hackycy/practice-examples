import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
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
        child: Text(
          'body content',
          textDirection: TextDirection.ltr,
        ),
      ),
    );
  }



}