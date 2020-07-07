import 'package:flutter/material.dart';

class AppBarPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AppBar Demo'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.security), 
            onPressed: (){}
          ),
        ],
      ),
      body: Center(
        child: Text('appbar'),
      ),
    );
  }

}