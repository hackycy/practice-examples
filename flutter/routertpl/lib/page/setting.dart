import 'package:flutter/material.dart';

class SettingPage extends StatefulWidget {

  _SettingPageState createState() => _SettingPageState();

}

class _SettingPageState extends State<SettingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('设置'),
      ),
      body: Center(
        child: Text('这是设置'),
      ),
    );
  }

}