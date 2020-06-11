import 'package:flutter/material.dart';

class ClassfyPage extends StatefulWidget {

  _ClassfyPageState createState() => _ClassfyPageState();

}

class _ClassfyPageState extends State<ClassfyPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('分类'),
      ),
      body: Center(
        child: Text('这是分类'),
      ),
    );
  }

}