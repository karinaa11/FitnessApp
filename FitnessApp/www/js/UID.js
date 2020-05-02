/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        window.addEventListener('load', b2 , false);
        document.getElementById("homeButton").addEventListener("click", b3);
          
    },

    // deviceready Event Handler
    //document.addEventListener("load", b2);
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
         
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function b2(){
    
    
    var a = window.localStorage.getItem('username');
    var b = window.localStorage.getItem('bday');
    var c = window.localStorage.getItem('weight');
    var d = window.localStorage.getItem('height');
    var currDate = new Date();
    var birDay = new Date(b);
    var Yrs = currDate.getFullYear() - birDay.getFullYear();
    var Dys = currDate.getDay()-birDay.getDay();
    var Mnth = currDate.getMonth()-birDay.getMonth();
    var age = Yrs;
    var BMI=703*(c/(d*d))
    if ( (currDate.getMonth()+1 < birDay.getMonth()+1) )
    {
        age--;
    }
    if((birDay.getMonth()+1 === currDate.getMonth()+1) && (currDate.getDay()-2 < birDay.getDay()+2))
     {
        age--;
    } 
    
    document.getElementById("nm").innerHTML =a;
    document.getElementById("age").innerHTML=age;
    document.getElementById("w").innerHTML = c;
    document.getElementById("h").innerHTML = d;
    document.getElementById("bmi").innerHTML = parseFloat(BMI).toFixed(2);

}
function b3(){
    
    var counter = window.localStorage.getItem('counter');
    
  window.location.href="index.html";
   

}