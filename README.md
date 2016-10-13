# log-me
</br>
**log-me** is a simple logging tool you can use to log events to a log file within your project. You can think of this as a more powerful ` console.log() ` except you can turn this one off when you don't need logs to the terminal riddled all over the place.
</br>



## Run in **DEBUG** mode

Wherever you utilize **log-me** in your code it will always log to the ./logs/log.txt file so you don't have to worry about missing an event in your App but the DEBUG mode can be turned on or off.
</br>

To run in debug mode enter the commands below in the terminal:

```bash

$ cd ROOT/
$ DEBUG=true node server.js

```
</br>

To exit DEBUG mode you'll have to stop the server and start up normally, without setting the environmental variable ``` DEBUG ```.
</br>
```bash

$ cd ROOT/

```
</br>
To stop the server type ``` control + ^C ```
</br>

You can enter the following commands in the terminal to run the API normally:
```bash

$ cd ROOT/
$ node server.js

```
</br>
