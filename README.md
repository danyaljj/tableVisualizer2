# Web Application Template

This is a web application based on ReactJS client-side application in order to visualizer the results of 
our table-based QA system. 

## Technologies

* less
* ReactJS
* gulp
* nodejs
* spray
* sbt

## Dependencies

* nodejs

  ```shell
  brew install node
  ```

* sbt

  ```shell
  brew install sbt
  ```

## Getting Started

1. Make sure you've followed the [Getting Started Guide](https://github.com/allenai/wiki/wiki/Getting-Started).

1. Download the [template](https://github.com/allenai/templates/archive/master.zip)

3. Unzip the resulting download and move the contents of `webapp/` to a directory of your choosing.

4. `cd webapp/`

5. `sbt`

5. `reStart`

6. Navigate to [http://localhost:8080](http://localhost:8080) to see the front-end.

7. Navigate to [http://localhost:8080/api/hello](http://localhost:8080/api/hello) to see a sample service response.

## Development

* Dynamically recompile as you make changes via: `~compile`.
* Dynamically restart the service as you make changes via `~reStart`.

## Front End Development

Changes to the front-end code will be applied as you make them, even if you only run the `reStart` command without the `~`. If you make changes to the frontend build configuration and need to restart `npm`, you'll have to use `reStop` to stop the background `npm` process, then run `reStart` again to restart it.

There's a slight lag, but keep an eye on your `sbt` console for information regarding the front-end build.

## Questions?

Contact [Daniel](http://web.engr.illinois.edu/~khashab2/)
