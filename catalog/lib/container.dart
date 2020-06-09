import 'package:flutter/material.dart';

void main() {
  runApp(
    Content()
  );
}

class Content extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: Center(
          child: Text(
            'container',
            style: TextStyle(
              color: Colors.black,
            ),
            textDirection: TextDirection.ltr,
          ),
        ),
        height: 300.0,
        width: 300.0,
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(
            color: Colors.blue,
            width: 2.0,
          )
        ),
    ),
    );
  }

}