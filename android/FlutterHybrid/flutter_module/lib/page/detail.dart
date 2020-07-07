import 'package:flutter/material.dart';

class DetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final DetailArgs args = ModalRoute.of(context).settings.arguments;
    return Scaffold(
      appBar: AppBar(
        title: Text('详情页'),
      ),
      body: Center(
        child: Text('标题：${args.title}'),
      ),
    );
  }
}

class DetailArgs {
  String title;

  DetailArgs(this.title);
}
