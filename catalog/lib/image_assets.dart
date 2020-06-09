import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.light(),
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
          'Image Load For Assets',
          textDirection: TextDirection.ltr,
        ),
      ),
      body: Center(
        child: Container(
          child: Image.asset(
            'images/wallpaper.jpg',
            fit: BoxFit.cover,
          ),
          width: 300.0,
          height: 300.0,
          decoration: BoxDecoration(
            border: Border.all(
              color: Colors.yellow
            ),
          ),
        ),
      ),
    );
  }

}