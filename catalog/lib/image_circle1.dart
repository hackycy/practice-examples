import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Main(),
    );
  }
}

class Main extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
   return Scaffold(
     appBar: AppBar(
       title: Text('Image Circle'),
     ),
     body: Center(
     child: Container(
      //  child: ,
       width: 300.0,
       height: 300.0,
       decoration: BoxDecoration(
         color: Colors.blue,
         border: Border.all(
           color: Colors.yellow
         ),
         borderRadius: BorderRadius.circular(150),
         image: DecorationImage(
           image: NetworkImage(
             'http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1592292271&t=9332a62f42c756daf8f9419666973f83'
            ),
           fit: BoxFit.cover,
         ),
       ),
     ),
   ),
   ); 
  }
}