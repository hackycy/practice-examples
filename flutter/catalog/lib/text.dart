import 'package:flutter/material.dart';

//https://api.flutter.dev/flutter/widgets/Text-class.html

void main() {

  runApp(
    Content()
  );
}

class Content extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        '这是一个Text组件，测试换行', 
        overflow: TextOverflow.ellipsis,
        maxLines: 2,
        style: TextStyle(
          fontWeight: FontWeight.bold,
          color: Colors.red,
          backgroundColor: Colors.white,
          wordSpacing: 22.0,
          letterSpacing: 12.0,
          fontSize: 42.0
        ),
        textDirection: TextDirection.ltr,
      ), 
    );
  }
  
}