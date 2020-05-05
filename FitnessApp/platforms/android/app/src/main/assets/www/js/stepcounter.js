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
    initialize: function ()
    {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //Run the stepCounter and stepDetector when the device opens.

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function ()
    {
        this.receivedEvent('deviceready');
        stepCounter();

    },

    // Update DOM on a Received Event
    receivedEvent: function (id)
    {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};




app.initialize();
//Global variables to count steps and keep track of the 'trigger value'
var steps = -1;
var steps2 = 0;
var triggerVal;

/**
 * 
 * The stepCounter() function creates, well, a step counter (which is higher latency, higher accuracy)
 * In the 'listener(event)' function, the event parameter is passed and the function is run by the sensor
 * object. The sensor listener is where the magic happens. It takes four parameters: the type of sensor (in this case,
 * the STEP_COUNTER, the speed (NORMAL is fine for our use case), the listener method, and what to do in case of error.
 * The listener function is where our calculations happen, using the event parameter. event.values is an array, making
 * var values an array. For stepCounter(), event.values[0] returns the amount of steps taken since the system booted up.
 *  triggerVal is checked against that number, and if they're not equal, it means either the app has first initialized
 *  (or this particular page has initialized - this can be made to be a separate page from index.html), or that a step
 *  has been taken. triggerVal is then set equal to the amount of steps taken since system start up, and the step 
 *  counter is incremented by 1. There may be a better solution to this, such as initializing triggerVal with the value
 *  immediately and then adding steps based on the difference between the two values, but this works for now.
 */
function stepCounter()
{
    function listener(event)
    {
        var values = event.values;
        if (triggerVal !== values[0])
        {
            triggerVal === values[0];
            steps++;
        }
        counterOutput();
    }

    sensors.addSensorListener("STEP_COUNTER", "NORMAL", listener, function (error)
    {
        if (error)
            alert("Could not listen to sensor");
    });
}

/**
 * 
 * Step detector functions in a slightly different manner. Because it is meant to be low-latency with accuracy being 
 * sacrificed (likely better for higher speed), its speed is set to 'FASTEST'. Other than that, event.values is still
 * an array, so values2 is the same array. However, values2[0] is only ever between 0 and 1, inclusive.. If it is 1, a 
 * step was detected. If it is 0, a step was not detected. This basically sets the variable value equal to whatever 
 * values2[0] is, and if it is greater than 0, a step was taken so that step counter variable is incremented.
 */
function stepDetector()
{
    function listener2(event)
    {
        var values2 = event.values;
        var value = -1;
        if (values2.length > 0)
            value = values2[0];
        if (value > 0)
            steps2++;
        detectorOutput();
    }

    sensors.addSensorListener("STEP_DETECTOR", "FASTEST", listener2, function (error)
    {
        if (error)
            alert("Could not listen to sensor");
    });
}

//These two functions are simply how to use the step variables. In this case, they are put into a p element for output.
function counterOutput()
{
    document.getElementById("stepCounter").innerHTML = "<p>Steps Taken: " + steps + "</p>";
}
function detectorOutput()
{
    document.getElementById("stepDetector").innerHTML = "<p>StepDetector: " + steps2 + "</p>";
}