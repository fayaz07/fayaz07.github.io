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
              SizedBox(height: 10.0),
              Row(
                children: <Widget>[
                  Flexible(
                    flex: 5,
                    child: Align(
                      alignment: Alignment.topLeft,
                                          child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
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
                  Flexible(flex: 5, child: Image.asset('assets/440.jpg')),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
