import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/widgets.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  double _height, _width;

  @override
  Widget build(BuildContext context) {
    _height = MediaQuery.of(context).size.height;
    _width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Color(0xfffffbfd),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              SizedBox(height: 8.0),
              Row(
                children: <Widget>[
                  InkWell(
                    onTap: (){
                      print('tapped');
                    },
                    splashFactory: InkSplash.splashFactory,
                      hoverColor: Colors.lightBlueAccent,
                      onHover: (bool hover) {
                        print('Hovered');
                      },
                      child: SizedBox(
                        height: 50.0,
                        child: FlutterLogo(),
                      )),
                ],
              ),
              SizedBox(height: 8.0),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  //  Intro & resume button
                  Flexible(
                    flex: 4,
                    child: Align(
                      alignment: Alignment.topLeft,
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: <Widget>[
                          SizedBox(height: 50.0),
                          Align(
                            alignment: Alignment.topLeft,
                            child: Text('Hi there!',
                                style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 24.0,
                                    fontWeight: FontWeight.bold)),
                          ),
                          Row(
                            children: <Widget>[
                              Expanded(
                                  child: Text(
                                      'I\'m Fayaz, Mobile application developer - Flutter. Undergraduate in Computer Science',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 20.0,
                                          fontWeight: FontWeight.w500))),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  Flexible(flex: 6, child: Image.asset('assets/440.jpg')),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
