import tape from "tape"

import Metalsmith from "metalsmith"
import rename from "../src"

tape("metalsmith-rename", t => {
  new Metalsmith(__dirname)
    .use(
      rename([
        [/\.md$/, ".html"],
      ])
    )
    .use(files => {
      const names = Object.keys(files)
      t.equal(names[0], "index.html", "should rename .md to .html")
      t.end()
    })
    .build(err => {if (err) {throw err}})
})
